/**
 * Ground Work — Dropbox Media Sync
 *
 * Scans a Dropbox folder, downloads all images/videos,
 * then lists them so Claude can pick the right ones for each section.
 *
 * Usage:
 *   node scripts/dropbox-sync.mjs
 *
 * Token is read from .env.local — never hardcoded.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// ── Load token from .env.local ──────────────────────────────────────────────
function loadEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) {
    console.error("❌  .env.local not found. Add DROPBOX_TOKEN= to it.");
    process.exit(1);
  }
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const [key, ...rest] = line.split("=");
    if (key?.trim() === "DROPBOX_TOKEN") {
      return rest.join("=").trim();
    }
  }
  console.error("❌  DROPBOX_TOKEN not found in .env.local");
  process.exit(1);
}

const TOKEN = loadEnv();
const DROPBOX_FOLDER = process.env.DROPBOX_FOLDER || ""; // "" = root, "/Ground Work" = subfolder
const OUT_DIR = path.join(ROOT, "public", "images", "_dropbox");

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".heic", ".heif"]);
const VIDEO_EXTS = new Set([".mp4", ".mov", ".webm"]);

// ── Dropbox API helpers ─────────────────────────────────────────────────────
async function dbxPost(endpoint, body) {
  const res = await fetch(`https://api.dropboxapi.com/2/${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Dropbox API error (${endpoint}): ${err}`);
  }
  return res.json();
}

async function dbxDownload(dropboxPath) {
  const res = await fetch("https://content.dropboxapi.com/2/files/download", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Dropbox-API-Arg": JSON.stringify({ path: dropboxPath }),
    },
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Download failed (${res.status}) for ${dropboxPath}: ${errText}`);
  }
  return res;
}

// ── List all media files recursively ────────────────────────────────────────
async function listAllMedia(folderPath = "") {
  const files = [];
  let cursor = null;
  let hasMore = true;

  while (hasMore) {
    let data;
    if (!cursor) {
      data = await dbxPost("files/list_folder", {
        path: folderPath,
        recursive: true,
        limit: 200,
      });
    } else {
      data = await dbxPost("files/list_folder/continue", { cursor });
    }

    for (const entry of data.entries) {
      if (entry[".tag"] !== "file") continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXTS.has(ext) || VIDEO_EXTS.has(ext)) {
        files.push({
          name: entry.name,
          path: entry.path_display || entry.path_lower,
          size: entry.size,
          type: IMAGE_EXTS.has(ext) ? "image" : "video",
          ext,
        });
      }
    }

    hasMore = data.has_more;
    cursor = data.cursor;
  }

  return files;
}

// ── Download a file locally ──────────────────────────────────────────────────
async function downloadFile(file, outDir) {
  const localPath = path.join(outDir, file.name);
  if (fs.existsSync(localPath)) {
    console.log(`  ↩  Already downloaded: ${file.name}`);
    return localPath;
  }

  const res = await dbxDownload(file.path);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(localPath, Buffer.from(buffer));
  console.log(`  ↓  ${file.name} (${(file.size / 1024).toFixed(0)} KB)`);
  return localPath;
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("\n🎯  Ground Work — Dropbox Sync");
  console.log("────────────────────────────────");

  // Ensure output directory exists
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // List files
  console.log(`\n📂  Scanning Dropbox folder: "${DROPBOX_FOLDER || "(root)"}"...`);
  let files;
  try {
    files = await listAllMedia(DROPBOX_FOLDER);
  } catch (err) {
    console.error("❌  Failed to list files:", err.message);
    process.exit(1);
  }

  if (files.length === 0) {
    console.log("⚠️   No images or videos found. Upload some files to Dropbox and try again.");
    console.log(`    Looking in: Dropbox${DROPBOX_FOLDER || "/(root)"}`);
    process.exit(0);
  }

  const images = files.filter((f) => f.type === "image");
  const videos = files.filter((f) => f.type === "video");
  console.log(`\n✅  Found ${files.length} media files (${images.length} images, ${videos.length} videos)`);

  // Download all
  console.log(`\n⬇️   Downloading to public/images/_dropbox/...\n`);
  const localPaths = [];
  for (const file of files) {
    try {
      const localPath = await downloadFile(file, OUT_DIR);
      localPaths.push({ ...file, localPath });
    } catch (err) {
      console.warn(`  ⚠  Skipped ${file.name}: ${err.message}`);
    }
  }

  // Write manifest for Claude to read
  const manifest = {
    synced: new Date().toISOString(),
    folder: DROPBOX_FOLDER || "(root)",
    files: localPaths.map((f) => ({
      name: f.name,
      type: f.type,
      localPath: path.relative(ROOT, f.localPath),
      dropboxPath: f.path,
    })),
  };

  const manifestPath = path.join(OUT_DIR, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n────────────────────────────────`);
  console.log(`✅  Sync complete!`);
  console.log(`    ${localPaths.length} files in public/images/_dropbox/`);
  console.log(`    Manifest written to public/images/_dropbox/manifest.json`);
  console.log(`\n    Claude will now review and assign the best photos to each section.\n`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});

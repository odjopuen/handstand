import sharp from 'sharp';
import { copyFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '../public/images/_dropbox');
const dest = path.join(__dirname, '../public/images/site');

// Properly oriented — copy as-is
const straight = [
  ['Photo 2025-06-28, 10 18 56 PM.jpg', 'gallery-handstand-freestanding-1.jpg'],
  ['Photo 2025-06-28, 10 18 58 PM.jpg', 'gallery-handstand-freestanding-2.jpg'],
  ['Photo 2025-06-28, 10 18 59 PM.jpg', 'gallery-handstand-freestanding-3.jpg'],
  ['Photo 2025-06-28, 10 09 51 PM.jpg', 'gallery-handstand-spotted-wide.jpg'],
  ['Photo 2025-06-28, 10 09 53 PM.jpg', 'gallery-handstand-spotted-wide-2.jpg'],
  ['Photo 2025-06-28, 10 14 06 PM.jpg', 'gallery-jonny-portrait-1.jpg'],
  ['Photo 2025-06-28, 10 14 07 PM.jpg', 'gallery-jonny-portrait-2.jpg'],
  ['Photo 2025-06-28, 10 52 08 PM.jpg', 'gallery-class-wide.jpg'],
];

// Rotated 90° CW (shot sideways — need 90° CCW to fix)
const rotated = [
  ['Photo 2025-06-28, 10 13 50 PM.jpg', 'gallery-jonny-spotting-closeup-1.jpg'],
  ['Photo 2025-06-28, 10 13 52 PM.jpg', 'gallery-jonny-spotting-closeup-2.jpg'],
  ['Photo 2025-06-28, 10 24 48 PM.jpg', 'gallery-jonny-spotting-smile-1.jpg'],
  ['Photo 2025-06-28, 10 24 50 PM.jpg', 'gallery-jonny-spotting-smile-2.jpg'],
  ['Photo 2025-06-28, 10 22 59 PM.jpg', 'gallery-partner-handstand-smile.jpg'],
];

async function run() {
  if (!existsSync(dest)) {
    await mkdir(dest, { recursive: true });
  }

  for (const [file, name] of straight) {
    const input = path.join(src, file);
    const output = path.join(dest, name);
    await sharp(input).rotate().toFile(output); // auto-orient via EXIF
    console.log(`✓ ${name}`);
  }

  for (const [file, name] of rotated) {
    const input = path.join(src, file);
    const output = path.join(dest, name);
    // EXIF auto-orient is all that's needed (orientation 8 = 90° CW correction)
    await sharp(input).rotate().toFile(output);
    console.log(`↺ ${name}`);
  }

  console.log('\nDone — all gallery images written to public/images/site/');
}

run().catch(console.error);

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from Ground Work classes and community moments.",
};

// Placeholder grid data — replace with real images
const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  aspect: i % 3 === 0 ? "aspect-square" : i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]",
  label: ["Wall kick-up", "Balance work", "Inversion flow", "Partner spotting", "Straddle press", "Community class", "Morning session", "Advanced shapes", "First flight", "Building balance", "Inversions lab", "After class"][i],
}));

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Real people, real practice
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            The{" "}
            <span className="text-outline-electric">gallery</span>
          </h1>
          <p className="mt-8 text-sand/60 text-lg max-w-lg leading-relaxed">
            A glimpse into what happens when people dare to go upside down together.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Masonry-style grid */}
          <div className="columns-2 lg:columns-3 gap-4 space-y-4">
            {placeholders.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal to-warm-gray/40 break-inside-avoid ${item.aspect} flex items-end`}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-bebas)] text-white/[0.06] text-center leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
                    {item.label}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-caveat)] text-electric text-xl">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-sand px-6 py-3 text-sm text-warm-gray">
              <span>📸</span>
              <span>Real photos coming soon — follow us on Instagram for the latest</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-4">
              Want to be in the gallery?
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-electric text-charcoal font-bold text-sm px-10 py-4 tracking-wide uppercase hover:bg-electric-dark transition-colors"
            >
              Sign Up for the Next Workshop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

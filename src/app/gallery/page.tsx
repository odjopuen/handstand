import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Ground Work handstand workshops in Toronto. Real people, all levels, real progress.",
};

const photos = [
  {
    src: "/images/site/gallery-handstand-freestanding-2.jpg",
    alt: "Student holding a freestanding handstand while classmates watch",
    caption: "Held it",
  },
  {
    src: "/images/site/gallery-jonny-portrait-1.jpg",
    alt: "Jonny coaching one-on-one, eyes open, engaged",
    caption: "One on one",
  },
  {
    src: "/images/site/gallery-jonny-spotting-smile-2.jpg",
    alt: "Jonny watching a student's handstand, calm and focused",
    caption: "Eyes on",
  },
  {
    src: "/images/site/class-wide.jpg",
    alt: "Full workshop class in action",
    caption: "The room",
  },
  {
    src: "/images/site/gallery-class-wide.jpg",
    alt: "Class in session with WORK mural behind",
    caption: "Mid-session",
  },
  {
    src: "/images/site/gallery-jonny-spotting-closeup-2.jpg",
    alt: "Jonny hands-on spotting a handstand, total focus",
    caption: "Hands on",
  },
  {
    src: "/images/site/gallery-handstand-freestanding-3.jpg",
    alt: "Clean freestanding handstand — the whole room holding their breath",
    caption: "Airborne",
  },
  {
    src: "/images/site/gallery-jonny-portrait-2.jpg",
    alt: "Jonny mid-explanation during coaching",
    caption: "Breaking it down",
  },
  {
    src: "/images/site/class-progression.jpg",
    alt: "Students practicing handstand progressions",
    caption: "Progression",
  },
];

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
            What 90 minutes of handstand practice actually looks like.
          </p>
        </div>
      </section>

      {/* Gallery grid — uniform 3-col, aspect-[4/5] for clean rhythm */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-warm-gray/10"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 lg:p-5">
                  <span className="font-[family-name:var(--font-caveat)] text-electric text-xl">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 lg:mt-24 text-center">
            <p className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-4">
              Want to be in the gallery?
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-electric text-off-white font-bold text-sm px-10 py-4 tracking-wide uppercase hover:bg-electric-dark transition-colors"
            >
              Workshop Sign Up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

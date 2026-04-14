import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Ground Work handstand workshops in Toronto. Real people, all levels, real progress.",
};

const photos = [
  {
    src: "/images/site/gallery-handstand-freestanding-1.jpg",
    alt: "Freestanding handstand in the center of the floor while the class watches",
    caption: "Freestanding",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/site/gallery-jonny-spotting-smile-1.jpg",
    alt: "Jonny spotting a student in a handstand",
    caption: "Spotted",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/site/gallery-class-wide.jpg",
    alt: "Full class in session at the gym — WORK mural in background",
    caption: "The class",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/site/gallery-jonny-portrait-1.jpg",
    alt: "Jonny coaching one-on-one, eyes open, engaged",
    caption: "One on one",
    aspect: "aspect-square",
  },
  {
    src: "/images/site/gallery-handstand-spotted-wide.jpg",
    alt: "Jonny spotting a student into a handstand with the full class visible",
    caption: "Full room energy",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/site/gallery-jonny-spotting-closeup-1.jpg",
    alt: "Jonny close up spotting a handstand, focused and present",
    caption: "In the moment",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/site/gallery-handstand-freestanding-2.jpg",
    alt: "Student holding a freestanding handstand while classmates look on",
    caption: "Held it",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/site/gallery-partner-handstand-smile.jpg",
    alt: "Partner-assisted handstand practice — student smiling mid-hold",
    caption: "Partner work",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/site/gallery-jonny-portrait-2.jpg",
    alt: "Jonny mid-explanation during coaching, eyes open and engaged",
    caption: "Breaking it down",
    aspect: "aspect-square",
  },
  {
    src: "/images/site/gallery-jonny-spotting-smile-2.jpg",
    alt: "Jonny watching a student's handstand, calm and focused",
    caption: "Eyes on",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/site/gallery-handstand-freestanding-3.jpg",
    alt: "Clean freestanding handstand — the whole room holding their breath",
    caption: "Airborne",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/site/gallery-jonny-spotting-closeup-2.jpg",
    alt: "Jonny hands-on spotting a handstand, total focus",
    caption: "Hands on",
    aspect: "aspect-[3/4]",
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

      {/* Gallery grid */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={`group relative overflow-hidden rounded-2xl break-inside-avoid ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-[family-name:var(--font-caveat)] text-electric text-xl">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-4">
              Want to be in the gallery?
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-electric text-off-white font-bold text-sm px-10 py-4 tracking-wide uppercase hover:bg-electric-dark transition-colors"
            >
              Sign Up for the Next Workshop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

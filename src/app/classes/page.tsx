import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Workshop",
  description: "Monthly handstand workshop in Toronto. 90-minute format: warm-up, handstand practice by level, HIIT finisher. Max 16. All levels. Co-hosted by Jonny & Garson.",
};

// ── Update these each month ───────────────────────────────────────────────────
const NEXT_WORKSHOP = {
  date: "April 25, 2026",
  time: "2:00 – 3:30 PM",
  location: "Downtown Toronto — exact address shared on sign-up",
  spotsLeft: 16,
};
const LUMA_EVENT_URL = "https://luma.com/uoopsxfs";
// ─────────────────────────────────────────────────────────────────────────────

const whatToExpect = [
  {
    heading: "The structure",
    body: "30 minutes warm-up (wrists get the love they deserve). 30 minutes handstand practice, split by level. 30 minutes full-body HIIT to finish. 90 minutes total.",
  },
  {
    heading: "A focused approach",
    body: "Every block has a purpose. Warm-up preps wrists and shoulders for what's coming. Practice splits by level — beginners get real coaching on the basics, experienced folks get pushed on the shape. A strength finisher that transfers to holding a line. You'll be sweating by the end — but nothing in the 90 minutes is filler.",
  },
  {
    heading: "All levels, genuinely",
    body: "First-timer, coming back after years, or already freestanding — we split the practice block by where you're at. Everyone gets something useful.",
  },
  {
    heading: "Co-hosted",
    body: "Jonny leading the handstand side, Garson Karrel co-hosting — my friend and movement coach (animal movement is his specialty). He's learning handstands alongside you.",
  },
];

export default function WorkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            monthly community workshop
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-8"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            The{" "}
            <span className="text-outline-electric">Workshop</span>
          </h1>
          <p className="text-sand/50 text-lg max-w-lg leading-relaxed">
            Once a month, a group gathers to work on handstands. 90 minutes. Warm-up, practice, HIIT finisher. You&apos;ll leave exhausted — in the best way.
          </p>
        </div>
      </section>

      {/* Next date + photo */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

            {/* Photo */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/site/hero-bg.jpg"
                alt="Ground Work handstand workshop"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-charcoal/25" />
            </div>

            {/* Next date info */}
            <div>
              <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-4">
                next workshop
              </p>
              <p
                className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-8"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                April <span className="text-charcoal">25</span>
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3 text-warm-gray">
                  <Calendar size={16} className="text-electric flex-shrink-0" />
                  <span>{NEXT_WORKSHOP.date} · {NEXT_WORKSHOP.time}</span>
                </div>
                <div className="flex items-center gap-3 text-warm-gray">
                  <MapPin size={16} className="text-electric flex-shrink-0" />
                  <span>{NEXT_WORKSHOP.location}</span>
                </div>
                <div className="flex items-center gap-3 text-warm-gray">
                  <Users size={16} className="text-electric flex-shrink-0" />
                  <span>Max {NEXT_WORKSHOP.spotsLeft} people</span>
                </div>
              </div>

              <a
                href={LUMA_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-electric text-off-white font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-all duration-200 hover:scale-[1.02]"
              >
                Sign up for April 25
                <ArrowUpRight size={16} />
              </a>

              <p className="mt-4 text-warm-gray/50 text-xs">
                Spots are limited. Waitlist available if full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-4">
            what it&apos;s like
          </p>
          <h2
            className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-16"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            What to expect
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatToExpect.map((item, i) => (
              <div key={i} className="space-y-3">
                <span className="font-[family-name:var(--font-bebas)] text-charcoal/25 text-3xl block">
                  0{i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-dm-serif)] text-lg text-charcoal">
                  {item.heading}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community photos */}
      <section className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-sand/40 text-lg mb-12">
            from the last workshop
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {[
              "/images/site/gallery-student-portrait.jpg",
              "/images/site/class-wide.jpg",
              "/images/site/gallery-student-handstand-group.jpg",
              "/images/site/class-wall-handstand-row.jpg",
              "/images/site/gallery-student-handstand-spotted.jpg",
              "/images/site/gallery-handstand-spotted-wide-2.jpg",
              "/images/site/class-hiit-rollers.jpg",
              "/images/site/gallery-partner-plank-drill.jpg",
              "/images/site/gallery-student-partner-lift.jpg",
            ].map((src, i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5">
                <Image
                  src={src}
                  alt="Workshop photo"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/15 group-hover:bg-charcoal/5 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

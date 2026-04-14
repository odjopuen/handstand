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
    heading: "Not a yoga class",
    body: "This is a workout. You'll sweat. You'll probably be sore tomorrow. The handstand stuff is patient, precise work — the HIIT at the end makes sure nobody leaves with energy left over.",
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
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {[
              "/images/site/class-foundations.jpg",
              "/images/site/class-progression.jpg",
              "/images/site/class-community.jpg",
              "/images/site/partner-work.jpg",
              "/images/site/floor-work.jpg",
              "/images/site/jonny-coaching.jpg",
            ].map((src, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 ? "aspect-[4/3] lg:col-span-2" : "aspect-square"}`}>
                <Image
                  src={src}
                  alt="Workshop photo"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-charcoal mb-10">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Do I need any experience?",
                a: "No. First-timers and people who haven't moved in a while are exactly who this is for. You won't be the only one.",
              },
              {
                q: "How fit do I need to be?",
                a: "Fit enough to move for 90 minutes. If you can walk up a few flights of stairs, you'll manage — and you'll be better for coming.",
              },
              {
                q: "Will I be able to handstand after one class?",
                a: "Honestly? No. Handstands take years — like learning to walk. But you'll leave knowing exactly how to train, and with people to train with.",
              },
              {
                q: "What should I wear?",
                a: "Comfortable athletic wear. Bare feet or grip socks. No shoes.",
              },
              {
                q: "How do I find out the location?",
                a: "Location rotates — we use different downtown Toronto spots. Exact address is in the Luma confirmation a few days before.",
              },
              {
                q: "What if it's full?",
                a: "Join the waitlist on Luma — you'll be notified automatically if a spot opens.",
              },
              {
                q: "Can I bring someone?",
                a: "Yes — just have them sign up separately on Luma.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-warm-gray/10 pb-8 last:border-0">
                <h3 className="font-medium text-charcoal mb-2">{item.q}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={LUMA_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-full bg-electric text-off-white font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-all duration-200 hover:scale-[1.02]"
            >
              Sign up for April 25
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

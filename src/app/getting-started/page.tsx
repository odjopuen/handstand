import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "New to handstands? No experience needed. Here's everything you need to know before your first Ground Work workshop in Toronto.",
};

const steps = [
  {
    number: "01",
    title: "No experience needed",
    description: "Seriously. We start from zero. If you can put your hands on the floor, you have everything you need. We've welcomed complete beginners, people who haven't exercised in years, and everyone in between.",
  },
  {
    number: "02",
    title: "Sign up for the next workshop",
    description: "One monthly workshop, downtown Toronto. Check the booking page for the next date and grab a spot on Luma. Max 16 people, two coaches — spots go fast.",
  },
  {
    number: "03",
    title: "Wear comfortable clothes",
    description: "Athletic wear you can move in. Bare feet or grip socks are best. We practice on mats. Bring water. Leave your ego at the door.",
  },
  {
    number: "04",
    title: "Arrive 10 minutes early",
    description: "First-timers get a brief intro before class. We'll run you through what to expect, answer your questions, and make sure you feel comfortable before we start.",
  },
  {
    number: "05",
    title: "Embrace the wobble",
    description: "You will fall. Everyone does. That's literally how you learn. We celebrate the attempts as much as the holds — sometimes more.",
  },
  {
    number: "06",
    title: "Keep coming back",
    description: "One workshop plants the seed. Consistent practice makes it grow. The handstand is not a trick you learn once — it's a conversation you keep having with your body. Show up every month and watch what happens.",
  },
];

const myths = [
  { myth: "You need to be strong", truth: "Technique matters far more than strength. Many beginners surprise themselves." },
  { myth: "You need to be flexible", truth: "Handstands are mostly about alignment, not flexibility. Tight hamstrings? No problem." },
  { myth: "It takes years to learn", truth: "You'll kick up against a wall in your first session. Freestanding comes faster than you think." },
  { myth: "It's only for gymnasts", truth: "Most of our students have zero gymnastics background. It's a skill, and skills can be learned." },
];

export default function GettingStartedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Never done a handstand?
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            Start{" "}
            <span className="text-outline-electric">here.</span>
          </h1>
          <p className="mt-8 text-sand/60 text-lg max-w-lg leading-relaxed">
            Everything you need to know before your first workshop. Spoiler: it&apos;s less scary than you think.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Your first six steps
          </h2>

          <div className="space-y-0 border border-warm-gray/10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8 p-8 border-b border-warm-gray/10 last:border-b-0 group hover:bg-sand/30 transition-colors">
                <span className="font-[family-name:var(--font-bebas)] text-4xl text-charcoal/25 flex-shrink-0 w-12">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myth busters */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-4">let&apos;s set the record straight</p>
          <h2
            className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-16"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Myths vs. reality
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            {myths.map((item) => (
              <div key={item.myth} className="bg-off-white rounded-2xl p-8">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-error text-lg flex-shrink-0">✗</span>
                  <p className="text-warm-gray text-sm line-through">{item.myth}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-charcoal text-lg flex-shrink-0">✓</span>
                  <p className="text-charcoal text-sm font-medium">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 text-center">
        <h2
          className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Ready?{" "}
          <span className="text-electric">Let&apos;s go.</span>
        </h2>
        <Link
          href="/booking"
          className="inline-flex items-center justify-center rounded-full bg-electric text-off-white font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
        >
          Sign Up for the Next Workshop
        </Link>
      </section>
    </>
  );
}

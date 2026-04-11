import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for the next Ground Work handstand workshop in Toronto. Monthly, rotating locations, all levels welcome.",
};

// ─── UPDATE THESE each month ─────────────────────────────────────────────────
const LUMA_EVENT_URL = "https://luma.com/uoopsxfs";
const NEXT_DATE = "April 25, 2026";
// ─────────────────────────────────────────────────────────────────────────────

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Small groups, real attention
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            Book a{" "}
            <span className="text-outline-electric">class</span>
          </h1>
          <p className="mt-8 text-sand/60 text-lg max-w-lg leading-relaxed">
            Monthly community workshop. Rotating Toronto locations. Max 16 people. All levels welcome.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6">

          {/* Main sign-up CTA */}
          <div className="rounded-3xl bg-charcoal p-10 lg:p-16 text-center mb-16">
            <p className="font-[family-name:var(--font-caveat)] text-sand/40 text-xl mb-4">
              next class
            </p>
            <h2
              className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              See upcoming <span className="text-electric">dates</span>
            </h2>
            <p className="text-electric/80 font-[family-name:var(--font-bebas)] text-2xl tracking-wide mb-2">
              {NEXT_DATE}
            </p>
            <p className="text-sand/50 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
              Sign up on Luma — you&apos;ll get a confirmation email, the location details, and a reminder before the workshop.
            </p>
            <a
              href={LUMA_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center rounded-full bg-electric text-charcoal font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-all duration-200 hover:scale-[1.02]"
            >
              View dates & sign up
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* What to expect */}
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-charcoal mb-8">
            What to expect
          </h2>

          <div className="space-y-4 mb-16">
            {[
              {
                icon: <Calendar size={18} />,
                title: "Monthly schedule",
                body: "One class per month. Dates are announced a few weeks ahead — follow on Instagram or sign up on Luma to get notified automatically.",
              },
              {
                icon: <MapPin size={18} />,
                title: "Rotating Toronto locations",
                body: "Each class is at a different spot around the city. Location details go out to registered attendees before class.",
              },
              {
                icon: <Users size={18} />,
                title: "Max 16 people",
                body: "Intentionally small so everyone gets real attention, not just a number in a big group.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl border border-warm-gray/10 hover:bg-sand/20 transition-colors">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-electric/10 flex items-center justify-center text-electric">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-charcoal text-sm mb-1">{item.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="rounded-3xl bg-sand p-10">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-8">
              Common questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do I need experience?",
                  a: "Not at all. The monthly class is beginner-friendly. If you've never done a handstand in your life, you're exactly who this is for.",
                },
                {
                  q: "What should I wear?",
                  a: "Comfortable athletic clothing you can move freely in. Bare feet or grip socks work best — no shoes on the mat.",
                },
                {
                  q: "What if the class is full?",
                  a: "Luma has a built-in waitlist. Add yourself and you'll be notified automatically if a spot opens.",
                },
                {
                  q: "Can I bring a friend?",
                  a: "Yes — encourage them to register separately on Luma so they have their own spot confirmed.",
                },
              ].map((item) => (
                <div key={item.q}>
                  <h3 className="font-medium text-charcoal text-sm mb-1">{item.q}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-warm-gray/10">
              <p className="text-warm-gray text-sm">
                Still have a question?{" "}
                <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                  Get in touch →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

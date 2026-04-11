import type { Metadata } from "next";
import { Marquee } from "@/components/home/Marquee";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Toronto's most welcoming handstand community.",
};

const timeline = [
  { year: "2010", event: "First handstand attempt in a park. Fell immediately. Came back the next day." },
  { year: "2013", event: "First competition — finished last, learned everything." },
  { year: "2016", event: "Started teaching privately. One student became ten." },
  { year: "2019", event: "Opened the first community class. Sold out in 48 hours." },
  { year: "2022", event: "Grew to three class formats. 500+ practitioners trained." },
  { year: "Now", event: "Still learning. Still teaching. Still loving every second upside down." },
];

const values = [
  {
    title: "Beginners first",
    description: "Every expert was once a beginner. We never forget that, and we design every class around it.",
  },
  {
    title: "Progress, not perfection",
    description: "The wobbles are part of the journey. We celebrate the process, not just the final hold.",
  },
  {
    title: "Community over competition",
    description: "We cheer louder for each other than we do for ourselves. That's what makes this place special.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            The story behind the practice
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            About{" "}
            <span className="text-outline-electric">us</span>
          </h1>
          <p className="mt-8 text-sand/60 text-lg max-w-lg leading-relaxed">
            Thousands of hours upside down, and one unwavering belief — anyone can learn to handstand.
          </p>
        </div>
      </section>

      <Marquee />

      {/* Philosophy */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            {/* Left */}
            <div>
              <h2
                className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
              >
                Why I teach
              </h2>
              <div className="space-y-5 text-warm-gray leading-relaxed">
                <p>
                  Handstands changed my life. Not because they made me stronger (they did), or more flexible (also true), but because they taught me what it feels like to be genuinely present.
                </p>
                <p>
                  When you&apos;re upside down, balanced on your hands, there&apos;s no room for yesterday&apos;s problems or tomorrow&apos;s anxiety. There&apos;s only now. Only this breath. Only this millimetre of adjustment.
                </p>
                <p>
                  I started teaching because I wanted more people to experience that. The joy of it. The surprise of what your body can do when you give it a chance.
                </p>
              </div>
            </div>

            {/* Right — values */}
            <div className="space-y-0 border border-warm-gray/10">
              {values.map((v, i) => (
                <div key={i} className="p-8 border-b border-warm-gray/10 last:border-b-0 hover:bg-sand/30 transition-colors">
                  <span className="font-[family-name:var(--font-bebas)] text-electric text-4xl block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-2">
                    {v.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-4">the journey</p>
          <h2
            className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-16"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            How we got here
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-warm-gray/20 ml-[3.5rem]" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-28 text-right">
                    <span className="font-[family-name:var(--font-bebas)] text-4xl text-electric">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-electric mt-3 ring-4 ring-sand" />
                  <p className="text-warm-gray leading-relaxed pt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 text-center">
        <p className="font-[family-name:var(--font-caveat)] text-sand/40 text-xl mb-4">ready to start?</p>
        <h2
          className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          A spot is waiting{" "}
          <span className="text-electric">for you.</span>
        </h2>
        <a
          href="/booking"
          className="inline-flex items-center justify-center rounded-full bg-electric text-charcoal font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
        >
          Book a Class
        </a>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Marquee } from "@/components/home/Marquee";

export const metadata: Metadata = {
  title: "About",
  description: "Ground Work is run by Jonny — 15 years of handstand practice, a community-first teaching philosophy, and a deep belief that patience is the real skill.",
};


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
              {/* Jonny photo */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-10">
                <Image
                  src="/images/site/jonny-coaching.jpg"
                  alt="Jonny coaching a handstand class"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-charcoal/20" />
              </div>

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

      {/* The Practice */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-4">the practice</p>
          <h2
            className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-16"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Patience is<br />
            <span className="text-outline-charcoal">the skill</span>
          </h2>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6 text-warm-gray leading-relaxed">
              <p>
                A handstand doesn&apos;t happen in a single session. It doesn&apos;t happen after ten. It happens slowly — in the quiet accumulation of showing up, falling, adjusting, and showing up again.
              </p>
              <p>
                What most people don&apos;t expect is how much of it is listening. Listening to where your weight wants to go. Feeling which finger is gripping too hard and which isn&apos;t gripping enough. Noticing the tiny shift in your hips that sends everything sideways.
              </p>
              <p>
                That process — of learning to read your own body with precision — is what makes the handstand one of the most honest practices there is. You can&apos;t fake it. You can&apos;t rush it. You just have to keep coming back.
              </p>
            </div>

            <div className="space-y-6 text-warm-gray leading-relaxed">
              <p>
                This is why consistency matters more than intensity. One session a week, every week, will take you further than ten sessions in a month followed by a long break. The nervous system needs repetition. The body needs time to integrate what it learned.
              </p>
              <p>
                Progress rarely looks like progress when you&apos;re in it. Then one day you kick up and something feels different — quieter, more stable — and you realise the months of practice were working the whole time.
              </p>
              <p className="font-[family-name:var(--font-dm-serif)] text-charcoal text-lg italic">
                That&apos;s the part I love most. Teaching people to trust the process when they can&apos;t yet see the result.
              </p>
            </div>
          </div>

          {/* Pullquote */}
          <div className="mt-16 pt-16 border-t border-warm-gray/15">
            <p
              className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
            >
              &ldquo;The handstand is not a trick you learn —<br className="hidden lg:block" />
              <span className="text-electric"> it&apos;s a conversation you keep having with your body.&rdquo;</span>
            </p>
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

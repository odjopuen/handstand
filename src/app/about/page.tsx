import type { Metadata } from "next";
import Image from "next/image";
import { Marquee } from "@/components/home/Marquee";

export const metadata: Metadata = {
  title: "About",
  description: "Ground Work is run by Jonny, co-hosted with Garson Karrel — 15 years of handstand practice, a community-first approach, and a deep belief that patience is the real skill.",
};


const values = [
  {
    title: "Patience first",
    description: "A clean handstand takes time — closer to learning to walk than learning a trick. The class shows you how, and keeps you coming back.",
  },
  {
    title: "Train between sessions",
    description: "Real progress happens in the weeks between workshops. We'll give you what to work on and people to work on it with.",
  },
  {
    title: "Community is the point",
    description: "Curious, rediscovering, or already deep in it — everyone belongs. The goal is to leave with people you can practise with.",
  },
];

const scenicShots = [
  {
    src: "/images/site/about-scenic-amazon.jpg",
    alt: "Handstand on the bow of a canoe on the Amazon river",
    place: "Amazonas",
    year: "2022",
  },
  {
    src: "/images/site/about-scenic-lanzarote.jpg",
    alt: "Handstand on concrete blocks in a red desert landscape",
    place: "Lanzarote",
    year: "2024",
  },
  {
    src: "/images/site/about-scenic-panama.jpg",
    alt: "Silhouette handstand in a Panama tidal pool at sunset",
    place: "Panama",
    year: "2025",
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
            Fifteen years of practice, a lot of breaks, and one belief that kept bringing me back: anyone can learn — if they&apos;re willing to be patient.
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
                  I started handstanding at 14 and promptly stopped. Then started again. Then stopped. That went on for years — I had more breaks than sessions. At some point it finally clicked, and since then I haven&apos;t looked back. Obsessed is probably the right word.
                </p>
                <p>
                  I teach because this practice got me through a lot, and it did it with two ingredients I didn&apos;t always want: patience, and consistency. I want to share what that looks like — and to build a community of people who train together, so nobody has to figure it out alone.
                </p>
                <p>
                  I co-host the workshops with my friend Garson Karrel — my own movement coach (animal movement is his specialty), now learning handstands alongside everyone else. Two sets of eyes, real attention, honest support.
                </p>
                <p className="font-[family-name:var(--font-dm-serif)] text-charcoal text-lg italic">
                  Once you get it, you&apos;re hooked. Promise.
                </p>
              </div>
            </div>

            {/* Right — values */}
            <div className="space-y-0 border border-warm-gray/10">
              {values.map((v, i) => (
                <div key={i} className="p-8 border-b border-warm-gray/10 last:border-b-0 hover:bg-sand/30 transition-colors">
                  <span className="font-[family-name:var(--font-bebas)] text-charcoal/25 text-4xl block mb-3">
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
                What most people don&apos;t expect is how much of it is listening — to where your weight wants to go, which finger grips too hard, the tiny hip shift that sends everything sideways.
              </p>
              <p>
                That process — learning to read your body with precision — makes the handstand one of the most honest practices there is. You can&apos;t fake it. You can&apos;t rush it.
              </p>
            </div>

            <div className="space-y-6 text-warm-gray leading-relaxed">
              <p>
                Consistency matters more than intensity. One session a week beats ten in a month followed by a long break. The nervous system needs repetition.
              </p>
              <p>
                Progress rarely looks like progress when you&apos;re in it. Then one day you kick up and something feels different — quieter, more stable — and you realise it was working the whole time.
              </p>
              <p className="font-[family-name:var(--font-dm-serif)] text-charcoal text-lg italic">
                That&apos;s the part I love most. Teaching people to trust the process when they can&apos;t yet see the result.
              </p>
            </div>
          </div>

          {/* Scenic proof — handstands, everywhere */}
          <div className="mt-20 lg:mt-24">
            <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-10">
              handstands come with me
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {scenicShots.map((shot) => (
                <figure key={shot.src}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-warm-gray/10">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className="font-[family-name:var(--font-dm-serif)] italic text-charcoal text-lg">
                      {shot.place}
                    </span>
                    <span className="font-[family-name:var(--font-bebas)] text-warm-gray text-sm tracking-[0.25em]">
                      {shot.year}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Pullquote */}
          <div className="mt-16 pt-16 border-t border-warm-gray/15">
            <p
              className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
            >
              &ldquo;A handstand isn&apos;t a trick you learn.<br className="hidden lg:block" />
              <span className="text-charcoal"> It&apos;s a conversation you keep having with your body — one that gets better with time.&rdquo;</span>
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
          className="inline-flex items-center justify-center rounded-full bg-electric text-off-white font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
        >
          Workshop Sign Up
        </a>
      </section>
    </>
  );
}

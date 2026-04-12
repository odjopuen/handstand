import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Stories from the Ground Work community — real people, real results.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Don&apos;t take our word for it
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            Student{" "}
            <span className="text-outline-electric">stories</span>
          </h1>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="rounded-3xl bg-sand p-8 lg:p-12 relative overflow-hidden group hover:bg-sand/70 transition-colors"
              >
                {/* Big quote mark */}
                <span
                  className="absolute top-4 right-6 font-[family-name:var(--font-dm-serif)] text-[8rem] leading-none text-electric/10 select-none pointer-events-none"
                >
                  &ldquo;
                </span>

                <div className="relative">
                  <span className="font-[family-name:var(--font-bebas)] text-charcoal/25 text-3xl block mb-6">
                    0{i + 1}
                  </span>

                  <blockquote>
                    <p className="font-[family-name:var(--font-dm-serif)] text-charcoal leading-snug mb-8" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <footer className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0">
                        <span className="font-[family-name:var(--font-bebas)] text-xl text-off-white">
                          {t.studentName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <cite className="not-italic font-medium text-charcoal text-sm block">
                          {t.studentName}
                        </cite>
                        <div className="flex items-center gap-3 mt-0.5">
                          {t.achievement && (
                            <span className="text-warm-gray text-xs">✦ {t.achievement}</span>
                          )}
                          <span className="text-warm-gray text-xs">{t.duration}</span>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-4">
              ready to write your own story?
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-electric text-charcoal font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
            >
              Sign Up for the Next Workshop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

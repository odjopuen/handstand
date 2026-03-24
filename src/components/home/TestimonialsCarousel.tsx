"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsCarousel() {
  const featured = testimonials.filter((t) => t.featured);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % featured.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + featured.length) % featured.length);

  const testimonial = featured[current];

  return (
    <Section background="cream">
      <SectionHeading
        title="What Students Say"
        subtitle="Real stories from real practitioners"
      />

      <AnimatedReveal>
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl bg-off-white p-8 shadow-[var(--shadow-lg)] sm:p-12">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/10 sm:h-14 sm:w-14" />

            <blockquote className="relative z-10">
              <p className="text-lg leading-relaxed text-charcoal sm:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <footer className="mt-6 flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center">
                  <span className="text-lg font-bold text-off-white">
                    {testimonial.studentName.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite className="not-italic font-medium text-charcoal">
                    {testimonial.studentName}
                  </cite>
                  <p className="text-sm text-warm-gray">
                    {testimonial.achievement} &middot; {testimonial.duration}
                  </p>
                </div>
              </footer>
            </blockquote>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full border border-warm-gray/20 p-2 text-warm-gray transition-colors hover:border-primary hover:text-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-primary"
                        : "w-2 bg-warm-gray/30 hover:bg-warm-gray/50"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="rounded-full border border-warm-gray/20 p-2 text-warm-gray transition-colors hover:border-primary hover:text-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </AnimatedReveal>
    </Section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const featured = testimonials.filter((t) => t.featured);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const t = featured[current];

  return (
    <section className="bg-charcoal py-24 lg:py-36 overflow-hidden relative">
      {/* Big background quote mark */}
      <div
        className="absolute top-8 left-6 font-[family-name:var(--font-dm-serif)] text-electric/10 leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
      >
        &ldquo;
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-caveat)] text-sand/40 text-lg mb-10"
        >
          what students say
        </motion.p>

        {/* Testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote>
              <p
                className="font-[family-name:var(--font-dm-serif)] text-off-white leading-tight"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="mt-10 flex items-center gap-4">
                {/* Initial avatar */}
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0">
                  <span className="font-[family-name:var(--font-bebas)] text-xl text-off-white">
                    {t.studentName.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite className="not-italic font-medium text-sand text-sm block">
                    {t.studentName}
                  </cite>
                  {t.achievement && (
                    <p className="text-electric text-xs mt-0.5">
                      ✦ {t.achievement}
                    </p>
                  )}
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-14 flex items-center gap-3">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === current
                  ? "w-12 bg-electric"
                  : "w-4 bg-sand/20 hover:bg-sand/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}

          <span className="ml-auto text-sand/25 text-xs font-mono">
            {String(current + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

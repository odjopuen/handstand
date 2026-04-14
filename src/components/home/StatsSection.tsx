"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 15, suffix: "", label: "Years of practice", note: "with plenty of breaks — the addiction stuck" },
  { value: 1, suffix: "", label: "Workshop per month", note: "downtown Toronto" },
  { value: 16, suffix: "", label: "Spots per workshop", note: "intentionally small" },
  { value: 2, suffix: "", label: "Hosts per session", note: "Jonny coaching, Garson spotting" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1400;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="bg-sand py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-12 text-center"
        >
          by the numbers
        </motion.p>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-warm-gray/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center lg:px-8"
            >
              <div
                className="font-[family-name:var(--font-bebas)] text-charcoal leading-none mb-2"
                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-[family-name:var(--font-dm-serif)] text-charcoal text-base sm:text-lg mb-1">
                {stat.label}
              </p>
              <p className="text-warm-gray text-xs">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

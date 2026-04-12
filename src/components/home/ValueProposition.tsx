"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Playful Exploration",
    description:
      "Handstands should be fun. We celebrate the wobbles as much as the holds.",
    accent: "text-electric",
  },
  {
    number: "02",
    title: "Disciplined Progression",
    description:
      "Progress comes from showing up consistently. Every workshop builds on the last.",
    accent: "text-primary-light",
  },
  {
    number: "03",
    title: "Community & Connection",
    description:
      "This isn't a gym — it's a community. Everyone belongs, everyone supports each other.",
    accent: "text-secondary-light",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-off-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-4"
        >
          How we practice
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-[family-name:var(--font-bebas)] text-charcoal uppercase leading-none mb-16 lg:mb-20"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
        >
          Three things we<br />
          <span className="text-outline-charcoal">believe in</span>
        </motion.h2>

        {/* Pillars */}
        <div className="grid gap-px bg-warm-gray/10 border border-warm-gray/10 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-off-white p-8 lg:p-10 overflow-hidden cursor-default card-hover"
            >
              {/* Big background number */}
              <span
                className={`absolute top-4 right-4 font-[family-name:var(--font-bebas)] text-[8rem] leading-none select-none pointer-events-none transition-opacity duration-300 opacity-[0.06] group-hover:opacity-[0.12] ${pillar.accent}`}
              >
                {pillar.number}
              </span>

              {/* Foreground number */}
              <span className={`font-[family-name:var(--font-bebas)] text-4xl ${pillar.accent} block mb-6`}>
                {pillar.number}
              </span>

              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-charcoal mb-4">
                {pillar.title}
              </h3>

              <p className="text-warm-gray leading-relaxed text-sm">
                {pillar.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${pillar.accent.replace("text-", "bg-")}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

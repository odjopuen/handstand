"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { classes } from "@/data/classes";
import { Clock, Users, ArrowRight } from "lucide-react";

const levelColors: Record<string, string> = {
  beginner: "bg-secondary/20 text-secondary",
  intermediate: "bg-primary/20 text-primary",
  advanced: "bg-electric/20 text-charcoal",
  "all-levels": "bg-dusty-blue/20 text-dusty-blue",
};

const levelLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "all-levels": "All Levels",
};

const cardGradients = [
  "from-[#3D3229] to-[#5C4A3A]",
  "from-[#4A3D2E] to-[#6B5240]",
  "from-[#2E3D3A] to-[#3D5A54]",
];

export function ClassesPreview() {
  return (
    <section className="bg-charcoal py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col gap-4 mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[family-name:var(--font-caveat)] text-sand/50 text-lg mb-2"
            >
              Find your level
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              Pick your{" "}
              <span className="text-outline-electric">class</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 text-sand/50 text-sm hover:text-electric transition-colors group"
            >
              View all classes
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint — mobile */}
        <p className="text-sand/30 text-xs tracking-widest uppercase mb-6 lg:hidden">
          ← Scroll to explore →
        </p>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 overflow-x-auto scroll-snap-x pb-8 px-6 max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:overflow-visible lg:gap-6">
        {classes.map((cls, i) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="scroll-snap-start flex-shrink-0 w-[78vw] sm:w-[56vw] lg:w-auto"
          >
            <Link href={`/classes/${cls.slug}`} className="group block h-full">
              <div className="relative rounded-2xl overflow-hidden h-full bg-gradient-to-br from-charcoal to-warm-gray/20 border border-white/[0.06] flex flex-col card-hover">
                {/* Image / gradient area */}
                <div className={`relative h-52 bg-gradient-to-br ${cardGradients[i]} flex items-end p-6 overflow-hidden`}>
                  {/* Background class number */}
                  <span
                    className="absolute top-2 right-4 font-[family-name:var(--font-bebas)] text-[7rem] leading-none text-white/[0.06] select-none"
                  >
                    0{i + 1}
                  </span>

                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColors[cls.level]}`}>
                    {levelLabels[cls.level]}
                  </span>

                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-off-white uppercase tracking-wide group-hover:text-electric transition-colors duration-300">
                    {cls.title}
                  </h3>
                  <p className="mt-2 text-sand/50 text-sm leading-relaxed flex-1">
                    {cls.shortDescription}
                  </p>

                  <div className="mt-5 flex items-center gap-5 text-xs text-sand/30">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {cls.durationMinutes} min
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={12} />
                      Max {cls.maxParticipants}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-electric text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

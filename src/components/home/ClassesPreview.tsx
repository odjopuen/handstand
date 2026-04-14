"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

// ── Update these each month ───────────────────────────────────────────────────
const NEXT_WORKSHOP = {
  date: "April 25",
  year: "2026",
  location: "Downtown Toronto — address shared on sign-up",
  spotsLeft: 16,
};
// ─────────────────────────────────────────────────────────────────────────────

const photos = [
  { src: "/images/site/class-foundations.jpg", alt: "Workshop participants working together" },
  { src: "/images/site/partner-work.jpg", alt: "Partner practice and support" },
  { src: "/images/site/class-community.jpg", alt: "The community in action" },
];

export function ClassesPreview() {
  return (
    <section className="bg-charcoal py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left — photo mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Large top-left */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden col-span-1 row-span-2">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
            </div>
            {/* Top right */}
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
            </div>
            {/* Bottom right */}
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
            </div>
          </motion.div>

          {/* Right — workshop info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[family-name:var(--font-caveat)] text-sand/50 text-lg mb-3"
            >
              monthly community workshop
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              The{" "}
              <span className="text-outline-electric">Workshop</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-sand/60 leading-relaxed mb-10 max-w-md"
            >
              90 minutes. Warm-up, handstand practice, and a HIIT finisher so nothing&apos;s left in the tank. You&apos;ll leave exhausted. Probably addicted.
            </motion.p>

            {/* Next date card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 mb-8"
            >
              <p className="text-sand/30 text-xs tracking-widest uppercase mb-3">Next workshop</p>
              <p
                className="font-[family-name:var(--font-bebas)] text-electric leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {NEXT_WORKSHOP.date}
              </p>
              <div className="space-y-2 text-sm text-sand/50">
                <span className="flex items-center gap-2">
                  <Calendar size={13} className="text-electric/60" />
                  {NEXT_WORKSHOP.date}, {NEXT_WORKSHOP.year}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-electric/60" />
                  {NEXT_WORKSHOP.location}
                </span>
                <span className="flex items-center gap-2">
                  <Users size={13} className="text-electric/60" />
                  Max {NEXT_WORKSHOP.spotsLeft} people
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-electric text-off-white font-bold text-sm px-7 py-3.5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
              >
                Sign up
              </Link>
              <Link
                href="/classes"
                className="inline-flex items-center gap-2 text-sand/40 text-sm hover:text-electric transition-colors group"
              >
                About the workshop
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

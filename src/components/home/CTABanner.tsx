"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="bg-charcoal py-24 lg:py-36 overflow-hidden relative">
      {/* Animated accent blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[60vw] h-[60vw] rounded-full opacity-[0.03] animate-float"
          style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-caveat)] text-sand/40 text-xl mb-6"
        >
          once you get it, you&apos;re hooked — promise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-[family-name:var(--font-bebas)] uppercase leading-none text-off-white"
          style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)" }}
        >
          Start your
          <br />
          <span className="text-electric">practice.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sand/50 text-lg max-w-md mx-auto"
        >
          Curious, rediscovering it, or deep in it — everyone belongs. Just show up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-electric text-off-white font-bold text-sm px-10 py-5 tracking-wide uppercase hover:bg-electric-dark transition-all duration-200 hover:scale-[1.02]"
          >
            Sign Up for the Workshop
          </Link>
          <Link
            href="/getting-started"
            className="text-sand/40 text-sm hover:text-sand/80 transition-colors"
          >
            First time? Read the beginner guide →
          </Link>
        </motion.div>

        {/* Small trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-8 text-sand/20 text-xs tracking-widest uppercase"
        >
          <span>Small groups</span>
          <span className="text-electric/40">✦</span>
          <span>All levels</span>
          <span className="text-electric/40">✦</span>
          <span>Built for community</span>
        </motion.div>
      </div>
    </section>
  );
}

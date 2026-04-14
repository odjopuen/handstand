"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal">
      {/* Photo background */}
      <div className="absolute inset-0">
        <Image
          src="/images/site/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-charcoal/72" />
        {/* Top scrim — darkens just the header zone so the logo stays readable over any photo */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />
        {/* Bottom fade to charcoal */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
        <span
          className="font-[family-name:var(--font-bebas)] leading-none whitespace-nowrap"
          style={{ fontSize: "28vw", color: "rgba(255,255,255,0.022)", letterSpacing: "-0.02em" }}
        >
          HANDSTAND
        </span>
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

      {/* Giant headline — vertically centred, eyebrow sits directly above it */}
      <div className="absolute inset-0 flex items-center z-10 px-6 max-w-7xl mx-auto w-full" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Eyebrow — sits right above the headline like every other page */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-caveat)] text-primary-light mb-2"
            style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
          >
            Practice, consistency, patience. We lay the ground work.
          </motion.p>

          <h1 className="font-[family-name:var(--font-bebas)] uppercase leading-[0.88] tracking-tight">
            {["Ground", "Work", "Handstand"].map((word, i) => (
              <span
                key={word}
                className={`block ${i === 1 ? "text-outline-electric" : "text-off-white"}`}
                style={{ fontSize: "min(15vw, 26vh)" }}
              >
                {word}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>

      {/* Bottom bar — CTAs + counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 max-w-7xl mx-auto"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <p className="text-sand/50 text-sm leading-relaxed max-w-xs">
            One workshop a month. Toronto.<br className="hidden sm:block" />
            All levels. 16 spots — kept small so you actually get seen.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-electric text-off-white font-bold text-sm px-7 py-3.5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
            >
              Workshop Sign Up
            </Link>
            <Link
              href="/classes"
              className="inline-flex items-center justify-center rounded-full border border-off-white/20 text-off-white text-sm px-7 py-3.5 tracking-wide uppercase hover:bg-off-white/10 transition-colors"
            >
              The Workshop
            </Link>
            <span className="hidden lg:inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] border border-white/[0.07] px-4 py-2.5 ml-2">
              <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-electric" />
              <span className="text-sand/35 text-xs">
                <span className="font-[family-name:var(--font-bebas)] text-electric text-base tracking-wide">{seconds}s</span>
                {" "}upside down
              </span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute top-24 right-6 z-10 text-xs text-sand/20 tracking-widest uppercase hidden lg:block"
      >
        Toronto, ON
      </motion.div>
    </section>
  );
}

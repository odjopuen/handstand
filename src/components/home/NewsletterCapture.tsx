"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-off-white py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-charcoal p-10 lg:p-16 relative overflow-hidden">
          {/* Background text */}
          <div className="absolute right-0 bottom-0 font-[family-name:var(--font-bebas)] text-[12rem] leading-none text-white/[0.03] select-none pointer-events-none">
            FREE
          </div>

          <div className="relative z-10 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[family-name:var(--font-caveat)] text-sand/50 text-xl mb-4"
            >
              free guide
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Your first{" "}
              <span className="text-electric">30 days</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sand/50 text-sm leading-relaxed mb-8 max-w-md"
            >
              Daily drills, warm-ups, and progressions built for beginners. No gym needed. Just 15 minutes a day.
            </motion.p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl bg-electric/10 border border-electric/20 p-5 inline-flex items-center gap-3"
              >
                <span className="text-electric text-xl">✓</span>
                <p className="text-electric font-medium text-sm">Guide sent! Check your inbox.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-stretch max-w-md">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full bg-white/[0.06] border border-white/10 text-off-white placeholder:text-sand/25 px-5 py-3.5 text-sm focus:outline-none focus:border-electric/50 transition-colors"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-electric text-charcoal font-bold text-sm px-7 py-3.5 tracking-wide uppercase hover:bg-electric-dark transition-colors disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? "Sending..." : "Send it to me"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-xs text-error">Something went wrong. Please try again.</p>
            )}

            <p className="mt-4 text-sand/25 text-xs">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

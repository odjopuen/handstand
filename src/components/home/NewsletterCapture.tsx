"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/JxQitls8UVe1lPqY4lNKQO";

export function NewsletterCapture() {
  return (
    <section className="bg-off-white py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-charcoal p-10 lg:p-16 relative overflow-hidden">
          {/* Background text */}
          <div className="absolute right-0 bottom-0 font-[family-name:var(--font-bebas)] text-[12rem] leading-none text-white/[0.03] select-none pointer-events-none">
            COMMUNITY
          </div>

          <div className="relative z-10 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[family-name:var(--font-caveat)] text-sand/50 text-xl mb-4"
            >
              the community
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Become part of{" "}
              <span className="text-electric">the community</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sand/50 text-sm leading-relaxed mb-8 max-w-md"
            >
              Where we post next dates, drop locations, share training tips, and you can ask questions between workshops. This is where the community actually lives.
            </motion.p>

            <motion.a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 rounded-full bg-electric text-off-white font-bold text-sm px-8 py-4 tracking-wide uppercase hover:bg-electric-dark transition-colors"
            >
              <MessageCircle size={16} />
              Join the community
            </motion.a>

            <p className="mt-4 text-sand/25 text-xs">Free to join.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

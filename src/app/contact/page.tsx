"use client";

import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/JxQitls8UVe1lPqY4lNKQO";
const LUMA_EVENT_URL = "https://luma.com/uoopsxfs";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Easiest way to ask? Show up.
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            Say{" "}
            <span className="text-outline-electric">hello.</span>
          </h1>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left: form */}
            <div>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-charcoal mb-8">
                Send us a message
              </h2>

              {status === "success" ? (
                <div className="rounded-2xl bg-electric/10 border border-electric/20 p-8 text-center">
                  <p className="text-4xl mb-3">🤸</p>
                  <p className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-2">Message received!</p>
                  <p className="text-warm-gray text-sm">We&apos;ll get back to you soon — usually same day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-charcoal uppercase tracking-wide mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-warm-gray/20 bg-transparent px-4 py-3.5 text-charcoal placeholder:text-warm-gray/40 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal uppercase tracking-wide mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-warm-gray/20 bg-transparent px-4 py-3.5 text-charcoal placeholder:text-warm-gray/40 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal uppercase tracking-wide mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What's on your mind?"
                      className="w-full rounded-xl border border-warm-gray/20 bg-transparent px-4 py-3.5 text-charcoal placeholder:text-warm-gray/40 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-full bg-electric text-off-white font-bold text-sm px-8 py-4 tracking-wide uppercase hover:bg-electric-dark transition-colors disabled:opacity-60 w-full"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p className="text-error text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>

            {/* Right: 3 paths */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <div className="rounded-2xl bg-charcoal p-8">
                <p className="font-[family-name:var(--font-caveat)] text-sand/50 text-lg mb-2">
                  best for quick questions
                </p>
                <p className="font-[family-name:var(--font-dm-serif)] text-xl text-off-white mb-3">
                  Join the community
                </p>
                <p className="text-sand/50 text-sm mb-6 leading-relaxed">
                  Where dates drop, locations are shared, and people ask questions between workshops. This is where the community actually lives.
                </p>
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-electric text-off-white font-bold text-sm px-7 py-3.5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
                >
                  <MessageCircle size={15} />
                  Join WhatsApp group
                </a>
              </div>

              {/* Workshop signup */}
              <div className="rounded-2xl bg-sand p-8">
                <p className="font-[family-name:var(--font-caveat)] text-warm-gray text-lg mb-2">
                  ready to try it?
                </p>
                <p className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal mb-3">
                  Sign up for a workshop
                </p>
                <p className="text-warm-gray text-sm mb-6 leading-relaxed">
                  Monthly, downtown Toronto. 90 minutes. All levels. Meet us in person — that&apos;s the best way to ask anything.
                </p>
                <a
                  href={LUMA_EVENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-charcoal text-off-white font-bold text-sm px-7 py-3.5 tracking-wide uppercase hover:bg-charcoal/80 transition-colors"
                >
                  Workshop Sign Up
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

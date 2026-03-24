"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { Mail, Download } from "lucide-react";

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
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section background="charcoal">
      <AnimatedReveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <Download className="h-8 w-8 text-primary-light" />
          </div>

          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-off-white sm:text-4xl">
            Your First 30 Days
          </h2>
          <p className="mt-4 text-sand/70">
            Get our free visual guide to starting your handstand practice.
            Daily drills, warm-ups, and progressions — delivered to your inbox.
          </p>

          {status === "success" ? (
            <div className="mt-8 rounded-lg bg-success/10 border border-success/20 p-4">
              <p className="text-success font-medium">
                Check your inbox! Your guide is on its way.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end"
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-off-white/10 border-off-white/20 text-off-white placeholder:text-sand/40"
                  aria-label="Email address"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "loading"}
              >
                <Mail className="mr-2 h-4 w-4" />
                {status === "loading" ? "Sending..." : "Get the Free Guide"}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-error">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="mt-4 text-xs text-sand/40">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </AnimatedReveal>
    </Section>
  );
}

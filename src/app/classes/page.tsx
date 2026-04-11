import type { Metadata } from "next";
import Link from "next/link";
import { classes } from "@/data/classes";
import { Clock, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Classes",
  description: "Handstand classes in Toronto for every level — from complete beginners to advanced practitioners.",
};

const levelColors: Record<string, string> = {
  beginner: "bg-secondary/20 text-secondary border-secondary/20",
  intermediate: "bg-primary/20 text-primary border-primary/20",
  advanced: "bg-electric/20 text-charcoal border-electric/30",
  "all-levels": "bg-dusty-blue/20 text-dusty-blue border-dusty-blue/20",
};

const levelLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "all-levels": "All Levels",
};

export default function ClassesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Find your level
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none mb-8"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            Our{" "}
            <span className="text-outline-electric">classes</span>
          </h1>
          <p className="text-sand/50 text-lg max-w-lg leading-relaxed">
            Three formats, one goal — to get you more comfortable, more capable, and more confident upside down.
          </p>
        </div>
      </section>

      {/* Classes grid */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {classes.map((cls, i) => (
              <Link key={cls.id} href={`/classes/${cls.slug}`} className="group block">
                <div className="border border-warm-gray/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors card-hover">
                  {/* Image area */}
                  <div className="h-56 bg-gradient-to-br from-charcoal to-warm-gray/30 relative flex items-end p-6">
                    <span
                      className="absolute top-4 right-5 font-[family-name:var(--font-bebas)] text-[6rem] leading-none text-white/[0.06] select-none"
                    >
                      0{i + 1}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full border ${levelColors[cls.level]} font-medium`}>
                      {levelLabels[cls.level]}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 lg:p-8">
                    <h2 className="font-[family-name:var(--font-bebas)] text-3xl text-charcoal uppercase tracking-wide group-hover:text-primary transition-colors">
                      {cls.title}
                    </h2>
                    <p className="mt-2 text-warm-gray text-sm leading-relaxed">
                      {cls.shortDescription}
                    </p>

                    <div className="mt-6 flex items-center gap-6 text-xs text-warm-gray/70">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {cls.durationMinutes} min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={12} />
                        Max {cls.maxParticipants} people
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-primary text-sm font-medium">
                      See full details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ strip */}
          <div className="mt-20 rounded-3xl bg-sand p-10 lg:p-14">
            <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-charcoal mb-8">
              Common questions
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                { q: "Do I need any experience?", a: "Absolutely not. First Flight is designed for complete beginners — no handstand background required." },
                { q: "What should I wear?", a: "Comfortable athletic clothing you can move freely in. Bare feet or grip socks work best." },
                { q: "How often should I come?", a: "Once a week is a great start. Twice a week is where you'll see real momentum build." },
                { q: "What if I don't know which class to pick?", a: "Start with First Flight if you're new to handstands. Not sure? Just reach out — we'll point you in the right direction." },
              ].map((item) => (
                <div key={item.q} className="space-y-2">
                  <h3 className="font-medium text-charcoal text-sm">{item.q}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

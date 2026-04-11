import type { Metadata } from "next";
import Link from "next/link";
import { classes } from "@/data/classes";
import { Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Class",
  description: "Book your handstand class in Toronto. All levels welcome.",
};

const levelLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "all-levels": "All Levels",
};

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-[family-name:var(--font-caveat)] text-primary-light text-xl mb-4">
            Small groups, real attention
          </p>
          <h1
            className="font-[family-name:var(--font-bebas)] text-off-white uppercase leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
          >
            Book a{" "}
            <span className="text-outline-electric">class</span>
          </h1>
          <p className="mt-8 text-sand/60 text-lg max-w-lg leading-relaxed">
            Pick the class that fits where you are right now. All levels welcome — total beginners to advanced practitioners.
          </p>
        </div>
      </section>

      {/* Class picker */}
      <section className="bg-off-white py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-charcoal mb-10">
            Choose your class
          </h2>

          <div className="space-y-4">
            {classes.map((cls, i) => (
              <div key={cls.id} className="group rounded-2xl border border-warm-gray/10 p-6 lg:p-8 hover:border-primary/30 transition-all hover:bg-sand/20 card-hover cursor-pointer">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-[family-name:var(--font-bebas)] text-electric text-2xl">
                        0{i + 1}
                      </span>
                      <span className="text-xs font-medium text-warm-gray px-3 py-1 rounded-full bg-warm-gray/10">
                        {levelLabels[cls.level]}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl lg:text-3xl text-charcoal uppercase tracking-wide">
                      {cls.title}
                    </h3>
                    <p className="text-warm-gray text-sm mt-2 leading-relaxed max-w-lg">
                      {cls.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-5 text-xs text-warm-gray/60">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {cls.durationMinutes} min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={12} />
                        Max {cls.maxParticipants}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/classes/${cls.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-electric text-charcoal font-bold text-sm px-7 py-3.5 tracking-wide uppercase hover:bg-electric-dark transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 rounded-2xl bg-sand p-6 text-sm text-warm-gray">
            <p className="font-medium text-charcoal mb-1">Not sure which class?</p>
            <p>
              If you&apos;re new to handstands, start with <strong>First Flight</strong> — always. You can move to other classes once you&apos;ve got your footing (literally).{" "}
              <Link href="/getting-started" className="text-primary underline underline-offset-2">
                Read our beginner guide →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

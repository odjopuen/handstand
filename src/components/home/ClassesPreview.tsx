import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { LevelBadge } from "@/components/shared/LevelBadge";
import { Card, CardContent } from "@/components/ui/Card";
import { buttonVariants } from "@/components/ui/Button";
import { classes } from "@/data/classes";
import { Clock, Users, ArrowRight } from "lucide-react";

export function ClassesPreview() {
  return (
    <Section>
      <SectionHeading
        title="Find Your Class"
        subtitle="From your very first kick-up to advanced shapes — there's a class for where you are right now"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls, index) => (
          <AnimatedReveal key={cls.id} delay={index * 100}>
            <Link href={`/classes/${cls.slug}`}>
              <Card className="group h-full">
                {/* Image placeholder */}
                <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-sand to-secondary-light/30 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-caveat)] text-2xl text-warm-gray/50">
                    {cls.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <LevelBadge level={cls.level} />
                  {cls.priceNote && (
                    <span className="text-xs font-medium text-primary">
                      {cls.priceNote}
                    </span>
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-charcoal group-hover:text-primary transition-colors">
                  {cls.title}
                </h3>

                <CardContent className="mt-2">
                  <p className="text-sm leading-relaxed">
                    {cls.shortDescription}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-warm-gray">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {cls.durationMinutes} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      Max {cls.maxParticipants}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </AnimatedReveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/classes"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          View All Classes & Schedule
        </Link>
      </div>
    </Section>
  );
}

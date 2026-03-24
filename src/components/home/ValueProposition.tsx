import { Sparkles, TrendingUp, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const pillars = [
  {
    icon: Sparkles,
    title: "Playful Exploration",
    description:
      "Handstands should be fun. We approach every session with curiosity and joy — celebrating the wobbles as much as the holds.",
  },
  {
    icon: TrendingUp,
    title: "Disciplined Progression",
    description:
      "Real progress comes from consistent, intentional practice. Every class builds on the last with clear structure and purpose.",
  },
  {
    icon: Users,
    title: "Community & Connection",
    description:
      "This isn't a gym — it's a group of friends exploring movement together. Everyone belongs, everyone supports each other.",
  },
];

export function ValueProposition() {
  return (
    <Section background="sand">
      <SectionHeading
        title="How We Practice"
        subtitle="Three principles that guide everything we do"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <AnimatedReveal key={pillar.title} delay={index * 100}>
            <div className="rounded-xl bg-off-white p-8 shadow-[var(--shadow-md)] text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <pillar.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-dm-serif)] text-xl text-charcoal">
                {pillar.title}
              </h3>
              <p className="text-warm-gray leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

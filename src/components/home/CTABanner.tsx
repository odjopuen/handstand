import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export function CTABanner() {
  return (
    <Section background="sand">
      <AnimatedReveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-charcoal sm:text-4xl lg:text-5xl">
            Ready to Try?
          </h2>
          <p className="mt-4 text-lg text-warm-gray">
            Your first class is free. No experience needed. Just show up,
            and we&apos;ll take care of the rest.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/booking"
              className={cn(buttonVariants({ variant: "primary", size: "xl" }))}
            >
              Book Your Free Class
            </Link>
            <Link
              href="/getting-started"
              className={cn(buttonVariants({ variant: "ghost", size: "xl" }))}
            >
              Not sure? Read our beginner guide →
            </Link>
          </div>
        </div>
      </AnimatedReveal>
    </Section>
  );
}

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "default" | "sand" | "cream" | "charcoal";
  containerSize?: "default" | "narrow" | "wide";
}

export function Section({
  className,
  background = "default",
  containerSize = "default",
  children,
  ...props
}: SectionProps) {
  const bgClasses = {
    default: "bg-off-white",
    sand: "bg-sand",
    cream: "bg-cream",
    charcoal: "bg-charcoal text-off-white",
  };

  return (
    <section
      className={cn(bgClasses[background], "py-16 lg:py-24", className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

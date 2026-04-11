import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ValueProposition } from "@/components/home/ValueProposition";
import { ClassesPreview } from "@/components/home/ClassesPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { NewsletterCapture } from "@/components/home/NewsletterCapture";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueProposition />
      <Marquee dark={false} reverse />
      <ClassesPreview />
      <StatsSection />
      <TestimonialsCarousel />
      <NewsletterCapture />
      <CTABanner />
    </>
  );
}

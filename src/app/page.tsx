import { Hero } from "@/components/home/Hero";
import { ValueProposition } from "@/components/home/ValueProposition";
import { ClassesPreview } from "@/components/home/ClassesPreview";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { NewsletterCapture } from "@/components/home/NewsletterCapture";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ClassesPreview />
      <TestimonialsCarousel />
      <NewsletterCapture />
      <CTABanner />
    </>
  );
}

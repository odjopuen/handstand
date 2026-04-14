export interface Testimonial {
  id: string;
  studentName: string;
  studentImage?: string;
  quote: string;
  fullStory?: string;
  level: "beginner" | "intermediate" | "advanced" | "all-levels";
  duration: string;
  achievement?: string;
  featured: boolean;
  order: number;
}

// Real testimonials from the April 25, 2026 workshop will be added here.
// Until then, the TestimonialsCarousel and /testimonials route are hidden.
export const testimonials: Testimonial[] = [];

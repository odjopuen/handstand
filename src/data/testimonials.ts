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

export const testimonials: Testimonial[] = [
  {
    id: "1",
    studentName: "Sarah M.",
    quote:
      "I walked in terrified — I hadn't been upside down since I was 8 years old. Within an hour, I was holding a wall handstand and grinning ear to ear. The vibe is so welcoming.",
    level: "beginner",
    duration: "3 months",
    achievement: "First freestanding handstand",
    featured: true,
    order: 1,
  },
  {
    id: "2",
    studentName: "James K.",
    quote:
      "After a year of trying on my own, I was stuck. Two months of classes here and I finally found my balance. The coaching eye is unreal — you can feel the depth of the practice immediately.",
    level: "intermediate",
    duration: "6 months",
    achievement: "Consistent 20-second holds",
    featured: true,
    order: 2,
  },
  {
    id: "3",
    studentName: "Priya L.",
    quote:
      "This isn't just a class, it's a community. I come for the handstands but I stay for the people. Every session feels like hanging out with friends who happen to love being upside down.",
    level: "beginner",
    duration: "8 months",
    achievement: "Wall to freestanding transition",
    featured: true,
    order: 3,
  },
];

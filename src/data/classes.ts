export type ClassLevel = "beginner" | "intermediate" | "advanced" | "all-levels";

export interface ClassDefinition {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  level: ClassLevel;
  durationMinutes: number;
  maxParticipants: number;
  prerequisites: string[];
  whatToBring: string[];
  whatYoullLearn: string[];
  image: string;
  isDropIn: boolean;
  priceNote?: string;
}

export const classes: ClassDefinition[] = [
  {
    id: "first-flight",
    slug: "first-flight",
    title: "First Flight",
    shortDescription:
      "Your very first handstand class. No experience needed — just curiosity and a willingness to play.",
    fullDescription:
      "This is where every journey begins. First Flight is designed for complete beginners who have never tried a handstand (or haven't tried since they were a kid). We'll start with the fundamentals: wrist preparation, body alignment, and building comfort upside down. By the end of class, you'll have kicked up against a wall and surprised yourself with what you can do.",
    level: "beginner",
    durationMinutes: 75,
    maxParticipants: 12,
    prerequisites: [],
    whatToBring: [
      "Comfortable athletic clothing",
      "Water bottle",
      "An open mind",
    ],
    whatYoullLearn: [
      "Safe wrist warm-up and preparation",
      "How to position your hands and stack your body",
      "Wall-supported handstand entries",
      "Building comfort being upside down",
      "A take-home practice routine",
    ],
    image: "/images/hero/first-flight.jpg",
    isDropIn: true,
    priceNote: "First class free for new students",
  },
  {
    id: "building-balance",
    slug: "building-balance",
    title: "Building Balance",
    shortDescription:
      "For practitioners ready to leave the wall behind. Focus on freestanding balance and holds.",
    fullDescription:
      "You've been upside down, now it's time to stay there. Building Balance takes you from wall-dependent to freestanding. We'll work on kick-up technique, finding your balance point, and developing the micro-corrections that keep you hovering. Expect lots of practice time, partner work, and those magical moments where everything clicks.",
    level: "intermediate",
    durationMinutes: 90,
    maxParticipants: 10,
    prerequisites: [
      "Comfortable with 30-second wall handstand",
      "Basic understanding of hand placement",
    ],
    whatToBring: [
      "Comfortable athletic clothing",
      "Water bottle",
      "Wrist wraps (optional)",
    ],
    whatYoullLearn: [
      "Kick-up technique for freestanding",
      "Finding and maintaining your balance point",
      "Finger and palm pressure corrections",
      "Partner spotting techniques",
      "Endurance and hold training",
    ],
    image: "/images/hero/building-balance.jpg",
    isDropIn: true,
  },
  {
    id: "inversions-lab",
    slug: "inversions-lab",
    title: "Inversions Lab",
    shortDescription:
      "Advanced shapes, press handstands, and creative movement for experienced practitioners.",
    fullDescription:
      "The Lab is where we push boundaries. This class is for experienced handstanders who want to explore advanced shapes (straddle, pike, scorpion), press entries, one-arm progressions, and creative transitions. We work at your edge — wherever that is. Expect a challenging, supportive environment where we celebrate both the attempts and the achievements.",
    level: "advanced",
    durationMinutes: 90,
    maxParticipants: 8,
    prerequisites: [
      "Consistent 15+ second freestanding hold",
      "Comfortable with kick-up entries",
    ],
    whatToBring: [
      "Comfortable athletic clothing",
      "Water bottle",
      "Wrist wraps (recommended)",
    ],
    whatYoullLearn: [
      "Press handstand progressions (straddle and pike)",
      "Shape changes and transitions",
      "One-arm handstand foundations",
      "Creative movement and flow",
      "Individualized feedback on your practice",
    ],
    image: "/images/hero/inversions-lab.jpg",
    isDropIn: false,
  },
];

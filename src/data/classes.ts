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
  isActive: boolean;
  priceNote?: string;
}

// One monthly workshop, three sections. Co-hosted by Jonny and Garson Karrel.
export const classes: ClassDefinition[] = [
  {
    id: "ground-work-workshop",
    slug: "workshop",
    title: "Ground Work Monthly Workshop",
    shortDescription:
      "90 minutes. All levels. Warm-up, handstand practice split by level, and a HIIT finisher that builds the strength the shape needs.",
    fullDescription:
      "One workshop a month, downtown Toronto. 30 minutes of handstand-specific warm-up (wrists get the love they deserve). 30 minutes of handstand practice, split by level — first-timers against the wall, intermediates finding their balance point, advanced chasing new shapes. 30 minutes of full-body HIIT to finish — because handstand practice is patient work, and the strength you build at the end is what makes the shape stick. Every minute has a purpose. Come train.",
    level: "all-levels",
    durationMinutes: 90,
    maxParticipants: 16,
    prerequisites: [],
    whatToBring: [
      "Comfortable athletic clothing",
      "Water bottle",
      "An open mind (and a little patience)",
    ],
    whatYoullLearn: [
      "Wrist and shoulder prep you can repeat at home",
      "Where to train your handstand next — honest feedback on your level",
      "Partner spotting and how to practise safely between workshops",
      "A HIIT finisher that targets the muscles handstand practice misses",
      "People to keep practising with in the park, at the gym, wherever",
    ],
    image: "/images/site/class-foundations.jpg",
    isDropIn: true,
    isActive: true,
  },
];

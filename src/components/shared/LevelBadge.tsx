import { Badge } from "@/components/ui/Badge";

type ClassLevel = "beginner" | "intermediate" | "advanced" | "all-levels";

const levelLabels: Record<ClassLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "all-levels": "All Levels",
};

interface LevelBadgeProps {
  level: ClassLevel;
  className?: string;
}

export function LevelBadge({ level, className }: LevelBadgeProps) {
  return (
    <Badge variant={level} className={className}>
      {levelLabels[level]}
    </Badge>
  );
}

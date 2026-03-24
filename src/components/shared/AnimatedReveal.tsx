"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const directionClasses = {
    up: "translate-y-5",
    down: "-translate-y-5",
    left: "translate-x-5",
    right: "-translate-x-5",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 transition-all duration-500 ease-[var(--ease-smooth)]",
        directionClasses[direction],
        "[&.visible]:opacity-100 [&.visible]:translate-x-0 [&.visible]:translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
}

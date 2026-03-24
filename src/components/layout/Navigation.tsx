"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden lg:flex items-center gap-1", className)}>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-primary bg-primary/5"
                : "text-charcoal hover:text-primary hover:bg-sand"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

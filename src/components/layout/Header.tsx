"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoColor = scrolled ? "var(--color-charcoal)" : "var(--color-off-white)";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-off-white/95 backdrop-blur-md shadow-[var(--shadow-sm)]"
          : "bg-gradient-to-b from-black/50 to-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="font-[family-name:var(--font-bebas)] text-2xl uppercase leading-none tracking-wide transition-colors hover:text-primary lg:text-3xl"
            style={{ color: logoColor }}
          >
            Ground{" "}
            <span className="text-electric">Work</span>
          </Link>

          <Navigation />

          <div className="flex items-center gap-3">
            <Link
              href="/booking"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "hidden lg:inline-flex"
              )}
            >
              Join Workshop
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

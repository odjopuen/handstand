import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/95 backdrop-blur-md shadow-[var(--shadow-sm)]">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="font-[family-name:var(--font-bebas)] text-2xl uppercase leading-none tracking-wide text-charcoal hover:opacity-80 lg:text-3xl"
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

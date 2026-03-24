import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-charcoal">
      {/* Background — placeholder gradient until real video/image is added */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-primary-dark/30" />

      {/* TODO: Replace with <video> or <Image> when assets are provided */}
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-4 font-[family-name:var(--font-caveat)] text-xl text-primary-light sm:text-2xl">
          15 years of practice. One invitation.
        </p>

        <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl leading-tight text-off-white sm:text-5xl md:text-6xl lg:text-7xl">
          Discover the Joy of
          <br />
          <span className="text-primary-light">Being Upside Down</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-sand/80 sm:text-xl">
          Handstand classes in Toronto for every body. Whether you&apos;ve never
          been upside down or you&apos;re chasing a one-arm hold — there&apos;s
          a place for you here.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/booking"
            className={cn(
              buttonVariants({ variant: "primary", size: "xl" })
            )}
          >
            Start Your Journey
          </Link>
          <Link
            href="/classes"
            className={cn(
              buttonVariants({ variant: "outline", size: "xl" }),
              "border-off-white/30 text-off-white hover:bg-off-white/10 hover:text-off-white"
            )}
          >
            View Schedule
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-off-white/30 p-1">
          <div className="h-2 w-1.5 rounded-full bg-off-white/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}

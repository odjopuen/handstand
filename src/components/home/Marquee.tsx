const items = [
  "TORONTO",
  "15 YEARS OF PRACTICE",
  "HANDSTANDS FOR EVERY BODY",
  "BEGINNERS WELCOME",
  "SMALL GROUPS",
  "REAL RESULTS",
  "JOIN THE COMMUNITY",
];

interface MarqueeProps {
  dark?: boolean;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ dark = true, reverse = false, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden py-4 ${dark ? "bg-charcoal" : "bg-electric"} ${className}`}
    >
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`font-[family-name:var(--font-bebas)] text-2xl tracking-widest uppercase px-6 whitespace-nowrap ${
                dark ? "text-off-white/80" : "text-charcoal"
              }`}
            >
              {item}
            </span>
            <span
              className={`text-xs ${dark ? "text-electric" : "text-charcoal/50"}`}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

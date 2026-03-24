import { Instagram, Youtube } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      href: BUSINESS_INFO.social.instagram,
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: BUSINESS_INFO.social.youtube,
      icon: Youtube,
      label: "YouTube",
    },
  ].filter((link) => link.href);

  if (links.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${link.label}`}
          className="text-warm-gray transition-colors hover:text-primary"
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}

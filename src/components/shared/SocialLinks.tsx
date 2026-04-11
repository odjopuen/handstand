import { BUSINESS_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      href: BUSINESS_INFO.social.instagram,
      icon: InstagramIcon,
      label: "Instagram",
    },
    {
      href: BUSINESS_INFO.social.youtube,
      icon: YoutubeIcon,
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

export const SITE_CONFIG = {
  name: "Ground Work",
  tagline: "Toronto Handstand Community",
  description:
    "Ground Work is a monthly handstand workshop in Toronto. All levels welcome. Small groups, real coaching, rotating locations across the city.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://groundworkto.com",
  ogImage: "/images/og/default.jpg",
  creator: "Ground Work",
  locale: "en_CA",
} as const;

export const BUSINESS_INFO = {
  name: "Ground Work",
  address: {
    street: "", // TODO: Add actual address
    city: "Toronto",
    province: "Ontario",
    postalCode: "",
    country: "CA",
  },
  phone: "", // TODO: Add phone number
  email: "", // TODO: Add contact email
  // Monthly workshop — no fixed weekly schedule. Location announced per event.
  workshopSchedule: "Monthly, downtown Toronto",
  social: {
    instagram: "", // TODO: Add social links
    youtube: "",
    tiktok: "",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Workshop", href: "/classes" },
  { label: "Getting Started", href: "/getting-started" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

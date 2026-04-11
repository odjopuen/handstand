export const SITE_CONFIG = {
  name: "Ground Work",
  tagline: "Handstand Practice for Every Body",
  description:
    "Discover the joy of handstands with Toronto's most welcoming practice community. Classes for complete beginners to advanced practitioners.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://groundwork.ca",
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
  hours: {
    // TODO: Update with actual hours
    monday: "Closed",
    tuesday: "Closed",
    wednesday: "Closed",
    thursday: "Closed",
    friday: "Closed",
    saturday: "10:00 AM – 12:00 PM",
    sunday: "Closed",
  },
  social: {
    instagram: "", // TODO: Add social links
    youtube: "",
    tiktok: "",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Getting Started", href: "/getting-started" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

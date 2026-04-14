import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions? Say hello. Usually same-day replies — or just come to the next Ground Work workshop in Toronto.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

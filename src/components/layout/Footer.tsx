import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { BUSINESS_INFO, NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-sand/80">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wide leading-none text-off-white"
            >
              Ground{" "}
              <span className="text-electric">Work</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-sand/60">
              Monthly handstand workshop in Toronto. 90 minutes. 16 spots. Co-hosted by Jonny & Garson.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-heading text-lg text-off-white">
              Explore
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-sand/60 transition-colors hover:text-primary-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Start */}
          <div>
            <h3 className="mb-4 font-heading text-lg text-off-white">
              Get Started
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/getting-started"
                className="text-sm text-sand/60 transition-colors hover:text-primary-light"
              >
                First Time? Start Here
              </Link>
              <Link
                href="/classes"
                className="text-sm text-sand/60 transition-colors hover:text-primary-light"
              >
                The Workshop
              </Link>
              <Link
                href="/booking"
                className="text-sm text-sand/60 transition-colors hover:text-primary-light"
              >
                Sign Up for the Workshop
              </Link>
            </nav>
          </div>

          {/* Contact Info — Local SEO anchor */}
          <div>
            <h3 className="mb-4 font-heading text-lg text-off-white">
              Find Us
            </h3>
            <address className="not-italic">
              <div className="flex items-start gap-2 text-sm text-sand/60">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  {BUSINESS_INFO.address.street && (
                    <>
                      {BUSINESS_INFO.address.street}
                      <br />
                    </>
                  )}
                  {BUSINESS_INFO.address.city},{" "}
                  {BUSINESS_INFO.address.province}{" "}
                  {BUSINESS_INFO.address.postalCode}
                </span>
              </div>
              {BUSINESS_INFO.phone && (
                <div className="mt-3 flex items-center gap-2 text-sm text-sand/60">
                  <Phone size={16} className="shrink-0" />
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="hover:text-primary-light transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              )}
              {BUSINESS_INFO.email && (
                <div className="mt-3 flex items-center gap-2 text-sm text-sand/60">
                  <Mail size={16} className="shrink-0" />
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="hover:text-primary-light transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              )}
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-sand/10 pt-8 text-center text-xs text-sand/40">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            &nbsp;|&nbsp; Toronto, Ontario, Canada
          </p>
        </div>
      </Container>
    </footer>
  );
}

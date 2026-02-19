import Link from "next/link";
import { Instagram, Facebook, X, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { name: "Wedding Planning", href: "/services" },
  { name: "Corporate Events", href: "/services" },
  { name: "Birthday Parties", href: "/services" },
  { name: "Private Dinners", href: "/services" },
  { name: "Engagement Events", href: "/services" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">
                Eventive<span className="text-primary">rich</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-background/70">
              Creating unforgettable luxury events and celebrations. We bring
              your vision to life with elegance and precision.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex size-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <X size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
              <li>
                <a
                  href="tel:+XXXXXXXXXX"
                  className="flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Phone size={16} className="shrink-0 text-primary" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@eventiverich.com"
                  className="flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Mail size={16} className="shrink-0 text-primary" />
                  hello@eventiverich.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Eventiverich. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

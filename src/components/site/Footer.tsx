import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS } from "./brand";
import { SERVICES } from "./serviceData";

const socials = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              BroBax delivers premium plumbing and heating services built on precision, reliability,
              and transparent communication.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  to="/contact"
                  aria-label={`${social.label} (placeholder)`}
                  className="group press grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/50 hover:text-brass"
                >
                  <social.icon className="icon-pop h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="eyebrow">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-nudge text-sm text-muted-foreground hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Services</h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="link-nudge text-sm text-muted-foreground hover:text-brass"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="link-nudge text-sm text-muted-foreground hover:text-brass"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nudge text-sm text-muted-foreground hover:text-brass"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp {BRAND.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="link-nudge text-sm break-all text-muted-foreground hover:text-brass"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" aria-hidden="true" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BroBax. All rights reserved.</p>
          <p>Premium Plumbing &amp; Heating Services</p>
        </div>
      </div>
    </footer>
  );
}

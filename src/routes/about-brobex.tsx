import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Globe, Instagram, Mail, MessageCircle, MonitorSmartphone, Palette, Phone, Rocket, Search, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { LuxLink } from "@/components/site/LuxButton";
import { BRAND } from "@/components/site/brand";
import logoAsset from "@/assets/brobex-logo.png.asset.json";

const title = "About BroBex — Web Developer | Code. Design. Solve. Elevate.";
const description =
  "BroBex is the web developer behind this site. Custom websites, premium UI design, SEO and performance work. Contact BroBex on 0370-999-5042, WhatsApp, or BroBex.ffx@gmail.com.";

export const Route = createFileRoute("/about-brobex")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "BroBex — Web Developer",
          description,
          email: BRAND.email,
          telephone: BRAND.phoneDisplay,
          slogan: "Code. Design. Solve. Elevate.",
        }),
      },
    ],
  }),
  component: AboutBrobexPage,
});

const skills = [
  {
    icon: Code2,
    title: "Custom Development",
    text: "Hand-built, fast, modern websites and web apps — no bloated templates, no drag-and-drop shortcuts.",
  },
  {
    icon: Palette,
    title: "Premium UI Design",
    text: "Luxury-grade interfaces with real design systems: type scales, colour tokens, and motion that feels intentional.",
  },
  {
    icon: MonitorSmartphone,
    title: "Fully Responsive",
    text: "Every layout is engineered for phones first, then scaled up to tablet and desktop without compromise.",
  },
  {
    icon: Rocket,
    title: "Performance",
    text: "GPU-composited animation, optimised images, and lean code so pages feel instant on real devices.",
  },
  {
    icon: Search,
    title: "SEO Foundations",
    text: "Semantic HTML, unique page metadata, structured data, and clean URLs built in from the start.",
  },
  {
    icon: Sparkles,
    title: "Ongoing Support",
    text: "Content updates, new sections, and improvements handled quickly after launch — the site keeps evolving.",
  },
];

const contacts = [
  {
    icon: Phone,
    label: "Call",
    value: BRAND.phoneDisplay,
    href: BRAND.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: BRAND.whatsappDisplay,
    href: BRAND.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Gmail",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: BRAND.instagramDisplay,
    href: BRAND.instagramHref,
    external: true,
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "brobexportfolio.vercel.app",
    href: BRAND.portfolioHref,
    external: true,
  },
];


function AboutBrobexPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Code. Design. Solve. Elevate."
        title="About"
        accent="BroBex"
        intro="BroBex is the web developer behind this website — building premium, fast, responsive sites for service brands that want to look and feel one level above their competition."
      />

      <section className="relative pb-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <Reveal from="left">
            <div className="lux-card glow-ring sheen group mx-auto grid max-w-xs place-items-center rounded-[1.75rem] p-8">
              <span className="float-slow grid h-40 w-40 place-items-center overflow-hidden rounded-full border border-brass/40 bg-surface-2">
                <img
                  src={logoAsset.url}
                  alt="BroBex web developer logo"
                  width={320}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <p className="mt-6 text-center font-display text-3xl">
                <span className="text-metal-shimmer">Bro</span>
                <span className="text-foreground">Bex</span>
              </p>
              <p className="eyebrow mt-2 text-center">Web Developer</p>
            </div>
          </Reveal>

          <Reveal from="right">
            <h2 className="text-3xl sm:text-4xl">
              Websites that <span className="text-metal">earn trust</span> in the first five seconds
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                Most small-business websites lose customers before a word is read — slow loading,
                dated layouts, and no clear way to get in touch. BroBex fixes that: clear structure,
                confident design, and a call-to-action that is never more than a tap away.
              </p>
              <p>
                This BroBax plumbing site is an example of that approach — a dark luxury design
                system, smooth GPU-accelerated motion, dedicated pages for every service, fixed call
                and WhatsApp buttons, and SEO metadata on every page.
              </p>
              <p>
                Need something similar for your own business — a portfolio, a store, a booking site,
                or a full brand refresh? Message BroBex directly using the details below, follow the
                daily build process on Instagram, or browse the full portfolio to see finished work.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LuxLink href={BRAND.portfolioHref} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" aria-hidden="true" />
                View Portfolio
              </LuxLink>
              <LuxLink href={BRAND.instagramHref} target="_blank" rel="noopener noreferrer" variant="outline">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Follow {BRAND.instagramDisplay}
              </LuxLink>
              <LuxLink href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" variant="outline">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Message on WhatsApp
              </LuxLink>
            </div>

          </Reveal>
        </div>
      </section>

      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What BroBex Does</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Design, build, and <span className="text-metal">elevate</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 90}
                from={i % 2 === 0 ? "left" : "right"}
                className="h-full"
              >
                <article className="lux-card glow-ring sheen group flex h-full flex-col rounded-2xl p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                    <s.icon className="icon-pop h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-brobex" className="relative pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Contact BroBex</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Same number, <span className="text-metal">same fast reply</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Calls, WhatsApp messages, and emails all reach BroBex directly.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {contacts.map((c, i) => (
              <Reveal key={c.label} delay={i * 90} from="scale" className="h-full">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="lux-card glow-ring sheen group press flex h-full flex-col rounded-2xl p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                    <c.icon className="icon-pop h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="eyebrow mt-6">{c.label}</p>
                  <p className="mt-2 font-display text-2xl break-all text-brass-soft">{c.value}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12" delay={120}>
            <div className="glass glow-ring rounded-2xl p-7 text-center">
              <p className="eyebrow">Credit</p>
              <p className="mt-3 font-display text-2xl sm:text-3xl">
                This site is designed &amp; developed by{" "}
                <a
                  href={BRAND.portfolioHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metal-shimmer sweep-underline"
                >
                  BroBex
                </a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Tapping the BroBex logo or name anywhere on this site opens the full portfolio. Want
                one for your business?{" "}
                <a
                  href={BRAND.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brass-soft sweep-underline hover:text-brass"
                >
                  DM on Instagram
                </a>{" "}
                or{" "}
                <Link to="/contact" className="text-brass-soft sweep-underline hover:text-brass">
                  send a message
                </Link>
                .
              </p>

            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

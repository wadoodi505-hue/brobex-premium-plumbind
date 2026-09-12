import {
  BellRing,
  CalendarCheck,
  FileText,
  Gauge,
  Leaf,
  Sparkles,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { LuxRouteLink } from "./LuxButton";

const features = [
  {
    icon: CalendarCheck,
    title: "Priority Booking",
    text: "Reserve a preferred visit window and get a confirmation before we set out.",
  },
  {
    icon: FileText,
    title: "Clear Written Quotes",
    text: "Scope and pricing explained in writing before any work starts — no surprises.",
  },
  {
    icon: Gauge,
    title: "System Health Check",
    text: "Pressure, flow, and heating performance checked on every visit as standard.",
  },
  {
    icon: BellRing,
    title: "Service Reminders",
    text: "Optional seasonal reminders so boiler and drainage care never slips.",
  },
  {
    icon: Leaf,
    title: "Efficiency Advice",
    text: "Practical guidance to lower water and energy waste in your home.",
  },
  {
    icon: ShieldCheck,
    title: "Aftercare Follow-Up",
    text: "A quick check-in after larger jobs to confirm everything runs as it should.",
  },
  {
    icon: Wrench,
    title: "Planned Maintenance",
    text: "Recurring visits for landlords, rentals, and busy households.",
  },
  {
    icon: Sparkles,
    title: "Upgrade Planning",
    text: "Fixture, bathroom, and heating upgrades scoped around your budget.",
  },
];

const marquee = [
  "Emergency Callouts",
  "Boiler Servicing",
  "Leak Detection",
  "Bathroom Fit-Outs",
  "Drain Clearing",
  "Radiator Balancing",
  "Water Heaters",
  "Pipe Repairs",
  "Landlord Maintenance",
  "Upgrade Consultations",
];

export function Advantages() {
  return (
    <section id="advantages" className="relative overflow-hidden py-24 lg:py-32">
      <div className="depth-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="aurora pointer-events-none absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-brass/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">
            More From{" "}
            <a
              href="https://brobexportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sweep-underline text-brass-soft transition-colors hover:text-brass"
            >
              BroBex
            </a>
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Extra features that make service{" "}
            <span className="text-metal-shimmer">effortless</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Beyond the repair itself, every booking includes the details that make the whole
            experience calm, clear, and easy to plan around — upfront pricing, tidy workspaces,
            photo updates after the job, and a direct line to a real person who remembers your
            system.
          </p>

        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 4) * 80}
              from={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="lux-card sheen lift group flex h-full flex-col rounded-2xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass transition-transform duration-500 ease-[var(--ease-lux)] group-hover:-rotate-6 group-hover:scale-110">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl">{f.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" delay={60}>
          <div
            className="glass relative overflow-hidden rounded-2xl py-5"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <ul className="marquee-track items-center gap-10 pr-10" aria-hidden="true">
              {[...marquee, ...marquee].map((item, i) => (
                <li
                  key={`${item}-${i}`}
                  className="flex shrink-0 items-center gap-3 text-xs tracking-[0.24em] uppercase text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center" delay={120}>
          <LuxRouteLink to="/contact">Explore your options</LuxRouteLink>
        </Reveal>
      </div>
    </section>
  );
}

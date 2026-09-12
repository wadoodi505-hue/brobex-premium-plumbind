import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES } from "./services";

export function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {heading ? (
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              A complete plumbing &amp; heating <span className="text-metal">service portfolio</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              From urgent repairs to planned maintenance, every visit follows the same standard of
              workmanship and clear communication.
            </p>
          </Reveal>
        ) : null}

        <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 ${heading ? "mt-14" : ""}`}>
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 90}
              from={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="lux-card glow-ring sheen group flex h-full flex-col rounded-2xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass transition-transform duration-500 group-hover:scale-105">
                  <service.icon className="icon-pop h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {service.includes.slice(0, 3).map((inc) => (
                    <li key={inc} className="flex gap-2 text-xs leading-relaxed text-muted-foreground/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.66rem] tracking-[0.18em] uppercase text-brass-soft/80">
                  {service.response}
                </p>
                <div className="hairline my-6" aria-hidden="true" />
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="link-nudge text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-brass-soft hover:text-brass"
                >
                  View Details
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

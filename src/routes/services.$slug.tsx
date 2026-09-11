import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Clock, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { LuxLink, LuxRouteLink } from "@/components/site/LuxButton";
import { SERVICES, getService } from "@/components/site/serviceData";
import { BRAND } from "@/components/site/brand";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = service ? `${service.title} | BroBax` : "Service | BroBax";
    const description = service
      ? `${service.text} ${service.intro}`.slice(0, 155)
      : "Premium plumbing and heating services from BroBax.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="depth-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brass/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="animate-in fade-in slide-in-from-bottom-4 relative mx-auto max-w-4xl px-5 duration-1000 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-brass"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All Services
          </Link>

          <span className="mt-8 grid h-14 w-14 place-items-center rounded-2xl border border-brass/30 bg-brass/10 text-brass">
            <service.icon className="h-6 w-6" aria-hidden="true" />
          </span>

          <h1 className="mt-6 text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {service.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LuxRouteLink to="/contact">
              Request a Service
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </LuxRouteLink>
            <LuxLink href={BRAND.phoneHref} variant="outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {BRAND.phoneDisplay}
            </LuxLink>
          </div>
        </div>
      </section>

      <section className="relative pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-2 lg:gap-6 lg:px-8">
          <Reveal className="h-full">
            <article className="lux-card h-full rounded-2xl p-8">
              <h2 className="text-2xl">What this service includes</h2>
              <ul className="mt-6 space-y-4">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <article className="lux-card h-full rounded-2xl p-8">
              <h2 className="text-2xl">Signs you need this</h2>
              <ul className="mt-6 space-y-4">
                {service.signs.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="hairline my-7" aria-hidden="true" />
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">{service.response}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">More Services</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Often needed <span className="text-metal">alongside this</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 90} className="h-full">
                <Link
                  to="/services/$slug"
                  params={{ slug: other.slug }}
                  className="lux-card group flex h-full flex-col rounded-2xl p-7"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                    <other.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl">{other.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {other.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-brass-soft">
                    View Details
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { ArrowUpRight } from "lucide-react";
import whyImage from "@/assets/why-brobax.jpg";
import { Reveal } from "./Reveal";
import { LuxRouteLink } from "./LuxButton";

const points = [
  {
    title: "Precision",
    text: "Diagnosis before action. We identify the real cause, then repair it properly rather than patching a symptom.",
    detail: "Pressure and flow re-tested before we sign off the job.",
  },
  {
    title: "Reliability",
    text: "Confirmed appointments, clear arrival windows, and solutions chosen to hold up over the long term.",
    detail: "Quality parts, protected floors, and a clean finish every visit.",
  },
  {
    title: "Transparency",
    text: "You hear what the work involves and what it costs before anything starts — no assumptions, no surprises.",
    detail: "Price agreed up front — no call-out surprises added later.",
  },
];

export function WhyBrobax() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-brass/5 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-lux)]">
              <img
                src={whyImage}
                alt="BroBax plumbing technician adjusting brass valves on copper pipework"
                width={1200}
                height={1408}
                loading="lazy"
                className="ken-burns h-[26rem] w-full object-cover lg:h-[36rem]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.008_60/70%),transparent_60%)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Why BroBax</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Precision. Reliability. <span className="text-metal">Transparency.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Plumbing work is only as good as the care behind it. BroBax treats every call as a
              service experience — considered, communicative, and finished to a standard you notice.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 120}>
                <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-2xl p-3 transition-colors duration-500 hover:bg-brass/5">
                  <span className="font-display text-2xl text-brass/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-brass">
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="sweep-underline inline-block text-2xl">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.text}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-brass-soft/75">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10" delay={120}>
            <LuxRouteLink to="/contact">
              Contact Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </LuxRouteLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

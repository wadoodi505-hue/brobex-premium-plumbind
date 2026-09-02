import { BadgeCheck, Clock, Eye, HeartHandshake, Ruler, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Professional Workmanship",
    text: "Work completed to a considered, tidy standard on every visit.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    text: "Prompt replies and efficient scheduling when something goes wrong.",
  },
  {
    icon: Eye,
    title: "Transparent Communication",
    text: "Clear explanations of the issue and the work before we begin.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    text: "Dependable arrival times and solutions built to last.",
  },
  {
    icon: Ruler,
    title: "Attention To Detail",
    text: "Finishing, sealing, and testing checked before we leave.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Approach",
    text: "Your home, comfort, and time respected throughout.",
  },
];

const stats = ["Fast Response", "Professional Service", "Reliable Solutions", "Customer Focused"];

export function Trust() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="depth-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">About BroBax</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Built on trust, <span className="text-metal">finished with care</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            BroBax is a premium plumbing and heating service focused on doing fewer things
            exceptionally well — precise work, honest advice, and a service experience that feels
            effortless.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={80}>
          <ul className="glass grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4">
            {stats.map((stat) => (
              <li key={stat} className="px-6 py-8 text-center">
                <p className="font-display text-2xl text-brass-soft sm:text-3xl">
                  {stat.split(" ")[0]}
                </p>
                <p className="mt-1 text-[0.68rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {stat.split(" ").slice(1).join(" ")}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={(i % 3) * 90}
              from={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="lux-card sheen h-full rounded-2xl p-7">
                <pillar.icon className="h-5 w-5 text-brass" aria-hidden="true" />
                <h3 className="mt-5 text-xl">{pillar.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

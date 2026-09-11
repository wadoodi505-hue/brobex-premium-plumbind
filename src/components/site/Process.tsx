import { CalendarCheck, ClipboardList, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Call or Request",
    text: "Tell us what is happening in your own words. We ask a few targeted questions to understand urgency, access, and the likely cause before we travel.",
    detail: "Answered by a person — no automated queue",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Confirmed Arrival",
    text: "You receive a fixed arrival window rather than a vague half-day slot, plus a message before we set off so your day is never on hold.",
    detail: "Emergency calls prioritised same day",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Diagnose & Quote",
    text: "We test, inspect, and isolate the real fault, then explain the options and the cost in plain language. Nothing starts before you approve it.",
    detail: "Written price agreed up front",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Repair & Protect",
    text: "The work is completed with quality parts, protective sheeting over your floors and fittings, and a full clean-down when we finish.",
    detail: "Dust sheets and floor protection as standard",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Test & Aftercare",
    text: "Pressure, flow, and heat are re-tested in front of you. You get maintenance guidance so the same fault is far less likely to return.",
    detail: "Follow-up check on request",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How We Work</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Five steps from first call to <span className="text-metal">final test</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every BroBax visit follows the same sequence, so you always know what happens next, what
            it costs, and when it will be finished.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={(i % 3) * 90}
              from={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <li className="lux-card glow-ring sheen group flex h-full flex-col rounded-2xl p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                    <s.icon className="icon-pop h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl text-brass/40 transition-colors duration-500 group-hover:text-brass/80">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <div className="hairline my-5" aria-hidden="true" />
                <p className="text-[0.68rem] tracking-[0.18em] uppercase text-brass-soft/80">
                  {s.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

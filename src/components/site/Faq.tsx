import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { LuxLink } from "./LuxButton";
import { BRAND } from "./brand";

export const FAQS = [
  {
    q: "What plumbing services does BroBax provide?",
    a: "BroBax covers emergency plumbing, drain cleaning, leak detection and repair, water heater and boiler work, pipe repair and replacement, bathroom and kitchen plumbing, fixture installation, and preventive maintenance.",
  },
  {
    q: "How quickly can you respond to an urgent issue?",
    a: "Urgent calls are prioritised. Get in touch by phone and we will confirm the soonest available visit along with a clear arrival window.",
  },
  {
    q: "Will I know the cost before work begins?",
    a: "Yes. We explain the issue, the recommended fix, and the cost before starting so you can make a decision with full information.",
  },
  {
    q: "Do you handle both plumbing and heating?",
    a: "We do. Plumbing and heating systems are closely connected, so we service both — including boilers, water heaters, and associated pipework.",
  },
  {
    q: "How do I book a service with BroBax?",
    a: `Call ${BRAND.phoneDisplay}, email ${BRAND.email}, or send the request form on this page and we will follow up to arrange a visit.`,
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Questions, <span className="text-metal">answered clearly</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Still unsure about something? A short conversation is usually the fastest way to get a
            straight answer.
          </p>
          <LuxLink href={BRAND.phoneHref} variant="outline" className="mt-8">
            Call BroBax
          </LuxLink>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-xl hover:text-brass hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

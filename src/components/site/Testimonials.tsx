import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export const REVIEWS = [
  {
    quote:
      "Arrived when promised, explained the issue clearly, and left the space spotless. Exactly the standard of service I was hoping for.",
    name: "Placeholder Review",
    meta: "Sample content — Water heater service",
  },
  {
    quote:
      "The leak was traced quickly and repaired without tearing the room apart. Calm, professional, and thorough from start to finish.",
    name: "Placeholder Review",
    meta: "Sample content — Leak detection",
  },
  {
    quote:
      "Straightforward pricing and no pressure. The heating has run perfectly since the visit and communication was excellent throughout.",
    name: "Placeholder Review",
    meta: "Sample content — Boiler servicing",
  },
  {
    quote:
      "Called late in the evening with water coming through a ceiling. The supply was isolated fast and the repair was done properly the same night.",
    name: "Placeholder Review",
    meta: "Sample content — Emergency plumbing",
  },
  {
    quote:
      "Two other visits had cleared the drain for a week each time. This was the first one that actually held. Clearly a more thorough job.",
    name: "Placeholder Review",
    meta: "Sample content — Drain cleaning",
  },
  {
    quote:
      "Full bathroom refit handled end to end. Levels, seals, and finish are all exactly right and the site was kept tidy every day.",
    name: "Placeholder Review",
    meta: "Sample content — Bathroom plumbing",
  },
  {
    quote:
      "New sink and dishwasher connection done in one visit, with isolation valves added so future servicing is simple. Thoughtful work.",
    name: "Placeholder Review",
    meta: "Sample content — Kitchen plumbing",
  },
  {
    quote:
      "The annual check picked up a failing valve before it became a flood. Written summary afterwards made the priorities easy to follow.",
    name: "Placeholder Review",
    meta: "Sample content — Preventive maintenance",
  },
  {
    quote:
      "Radiators were cold at the bottom for years. After balancing and a pump replacement the whole house heats evenly again.",
    name: "Placeholder Review",
    meta: "Sample content — Heating services",
  },
];

export function Testimonials({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? REVIEWS.slice(0, limit) : REVIEWS;

  return (
    <section id="reviews" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            What great service <span className="text-metal">should feel like</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            The reviews below are placeholder content used during development. They are not real
            customer testimonials and will be replaced with verified feedback.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.quote} delay={(i % 3) * 110} className="h-full">
              <figure className="lux-card glow-ring sheen group flex h-full flex-col rounded-2xl p-8">
                <Quote className="icon-pop h-6 w-6 text-brass/70" aria-hidden="true" />
                <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-foreground/90">
                  {item.quote}
                </blockquote>
                <div className="hairline my-6" aria-hidden="true" />
                <figcaption>
                  <p className="text-sm font-semibold text-foreground/85">{item.name}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">{item.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Instagram, MessageCircle, Phone } from "lucide-react";
import { BRAND } from "./brand";

export function FloatingContact() {
  return (
    <>
      <a
        href={BRAND.phoneHref}
        aria-label={`Call BroBax on ${BRAND.phoneDisplay}`}
        className="glass group press pulse-ring fixed bottom-5 left-4 z-50 grid h-14 w-14 place-items-center rounded-full border border-brass/40 text-brass shadow-[var(--shadow-glow)] transition-transform duration-500 hover:-translate-y-1 hover:border-brass sm:bottom-7 sm:left-6"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="pointer-events-none absolute left-16 hidden rounded-full border border-border bg-surface/90 px-3 py-1.5 text-[0.68rem] tracking-[0.18em] whitespace-nowrap uppercase text-foreground/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
          Call Now
        </span>
      </a>

      <a
        href={BRAND.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message BroBax on WhatsApp at ${BRAND.whatsappDisplay}`}
        className="glass group press pulse-ring fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full border border-brass/40 text-brass shadow-[var(--shadow-glow)] transition-transform duration-500 hover:-translate-y-1 hover:border-brass sm:bottom-7 sm:right-6"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="pointer-events-none absolute right-16 hidden rounded-full border border-border bg-surface/90 px-3 py-1.5 text-[0.68rem] tracking-[0.18em] whitespace-nowrap uppercase text-foreground/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
          WhatsApp
        </span>
      </a>

      <a
        href={BRAND.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Follow BroBex on Instagram ${BRAND.instagramDisplay}`}
        className="glass group press fixed right-4 bottom-[5.5rem] z-50 grid h-12 w-12 place-items-center rounded-full border border-brass/30 text-brass-soft shadow-[var(--shadow-glow)] transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:border-brass hover:text-brass sm:right-6 sm:bottom-[6.5rem]"
      >
        <Instagram className="icon-pop h-5 w-5" aria-hidden="true" />
        <span className="pointer-events-none absolute right-14 hidden rounded-full border border-border bg-surface/90 px-3 py-1.5 text-[0.68rem] tracking-[0.18em] whitespace-nowrap uppercase text-foreground/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
          Instagram
        </span>
      </a>
    </>

  );
}

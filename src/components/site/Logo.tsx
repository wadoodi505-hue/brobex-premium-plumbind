import logoAsset from "@/assets/brobex-logo.png";
import { BRAND } from "./brand";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href={BRAND.portfolioHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="BroBex portfolio — designed & developed by BroBex"
      title="Designed & developed by BroBex — view portfolio"
      className={`group press inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-brass/40 bg-surface-2 shadow-[0_0_0_0_hsl(var(--brass)/0)] transition-all duration-500 ease-[var(--ease-lux)] will-change-transform group-hover:scale-110 group-hover:border-brass/70 group-hover:rotate-[8deg]">
        <img
          src={logoAsset.url}
          alt="BroBex logo"
          width={80}
          height={80}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </span>
      <span className="font-display text-2xl leading-none tracking-tight">
        <span className="text-metal-shimmer">Bro</span>
        <span className="text-foreground transition-colors duration-300 group-hover:text-brass">
          Bex
        </span>
      </span>
    </a>
  );
}

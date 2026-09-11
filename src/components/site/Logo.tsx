import logoAsset from "@/assets/brobex-logo.png";
import { BRAND } from "./brand";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href={BRAND.portfolioUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit the BroBex portfolio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-brass/40 bg-surface-2 transition-transform duration-500 ease-[var(--ease-lux)] group-hover:scale-105">
        <img
          src={logoAsset}
          alt=""
          width={80}
          height={80}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </span>

      <span className="font-display text-2xl leading-none tracking-tight">
        <span className="text-metal">Bro</span>
        <span className="text-foreground">Bex</span>
      </span>
    </a>
  );
}

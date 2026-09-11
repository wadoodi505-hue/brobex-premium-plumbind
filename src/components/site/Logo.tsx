import logoAsset from "@/assets/brobex-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass/40 bg-surface-2 overflow-hidden will-change-transform transition-transform duration-500 ease-[var(--ease-lux)] hover:scale-105">
        <img
          src={logoAsset}
          alt="BroBex logo"
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
    </span>
  );
}
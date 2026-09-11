import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  accent,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20">
      <div className="depth-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brass/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="animate-in fade-in slide-in-from-bottom-4 relative mx-auto max-w-4xl px-5 text-center duration-1000 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-6xl">
          {title} {accent ? <span className="text-metal">{accent}</span> : null}
        </h1>
        {intro ? <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{intro}</p> : null}
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}

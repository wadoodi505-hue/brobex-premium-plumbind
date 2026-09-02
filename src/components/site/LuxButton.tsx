import { forwardRef } from "react";
import { createLink } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-[image:var(--gradient-brass)] text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-brass/45 text-brass-soft hover:border-brass hover:bg-brass/10 hover:-translate-y-0.5",
  ghost: "text-foreground/80 hover:text-brass",
} as const;

type Variant = keyof typeof variants;

export function LuxLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function LuxButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

const LuxAnchor = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }
>(({ variant = "primary", className = "", children, ...props }, ref) => (
  <a ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props}>
    {children}
  </a>
));
LuxAnchor.displayName = "LuxAnchor";

export const LuxRouteLink = createLink(LuxAnchor);

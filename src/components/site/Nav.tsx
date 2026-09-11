import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { LuxLink } from "./LuxButton";
import { BRAND, NAV_LINKS } from "./brand";

const underline =
  "relative text-sm transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-brass after:transition-all after:duration-300";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b py-2" : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <div className="min-w-0">
          <Logo />
        </div>

        <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className={`${underline} text-foreground/75 after:w-0 hover:text-brass hover:after:w-full`}
              activeProps={{ className: "text-brass after:w-full" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BRAND.phoneHref}
            className="hidden items-center gap-2 text-sm text-brass-soft transition-colors hover:text-brass lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BRAND.phoneDisplay}
          </a>
          <span className="hidden sm:block">
            <LuxLink href="/contact" className="whitespace-nowrap">
              Request Service
            </LuxLink>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-brass/50 hover:text-brass xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`glass fixed inset-x-0 top-[4.5rem] mx-3 origin-top rounded-2xl p-6 transition-[transform,opacity] duration-500 ease-[var(--ease-lux)] will-change-transform xl:hidden ${
          open
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[calc(100%+1.5rem)] opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className={`flex flex-col divide-y divide-border ${open ? "stagger-slide" : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              onClick={() => setOpen(false)}
              className="py-3.5 font-display text-2xl text-foreground/90 transition-colors hover:text-brass"
              activeProps={{
                className: "text-brass underline decoration-brass decoration-1 underline-offset-8",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          <LuxLink href="/contact" onClick={() => setOpen(false)}>
            Request a Service
          </LuxLink>
          <LuxLink href={BRAND.phoneHref} variant="outline">
            Call {BRAND.phoneDisplay}
          </LuxLink>
        </div>
      </div>
    </header>
  );
}

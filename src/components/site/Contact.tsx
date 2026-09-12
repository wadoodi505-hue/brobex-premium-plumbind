import { useState } from "react";
import { Instagram, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { LuxButton } from "./LuxButton";
import { BRAND } from "./brand";

const serviceTypes = [
  "Emergency Plumbing",
  "Drain Cleaning",
  "Leak Detection & Repair",
  "Water Heater Services",
  "Boiler & Heating Services",
  "Pipe Repair & Replacement",
  "Bathroom Plumbing",
  "Kitchen Plumbing",
  "Fixture Installation",
  "Preventive Maintenance",
];

const fieldClass =
  "w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-brass/60 focus:outline-none focus:ring-2 focus:ring-ring";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);

    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service Type: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      `Service request — ${data.get("service")}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email app to send the request to BroBax.");
    form.reset();
    setSending(false);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="depth-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Request a service <span className="text-metal">with BroBax</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Tell us what you need and we will follow up promptly with next steps and a clear plan for
            the work.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={BRAND.phoneHref}
              className="lux-card flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block">Phone</span>
                <span className="mt-1 block font-display text-2xl text-brass-soft">
                  {BRAND.phoneDisplay}
                </span>
              </span>
            </a>
            <a
              href={BRAND.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-card flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block">WhatsApp</span>
                <span className="mt-1 block font-display text-2xl text-brass-soft">
                  {BRAND.whatsappDisplay}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="lux-card glow-ring sheen group press flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                <Mail className="icon-pop h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block">Email</span>
                <span className="mt-1 block truncate text-base text-foreground/90">
                  {BRAND.email}
                </span>
              </span>
            </a>
            <a
              href={BRAND.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-card glow-ring sheen group press flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                <Instagram className="icon-pop h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block">Instagram</span>
                <span className="mt-1 block font-display text-2xl text-brass-soft">
                  {BRAND.instagramDisplay}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  Behind-the-scenes builds, finished jobs, and quick tips.
                </span>
              </span>
            </a>
          </div>

        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="glass rounded-[1.5rem] p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow mb-2 block">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="phone" className="eyebrow mb-2 block">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className={fieldClass}
                  placeholder="Best contact number"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="eyebrow mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className="eyebrow mb-2 block">
                  Service Type
                </label>
                <select id="service" name="service" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service} className="bg-surface">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`${fieldClass} resize-none`}
                  placeholder="Describe the issue or the work you need"
                />
              </div>
            </div>

            <LuxButton type="submit" disabled={sending} className="mt-7 w-full sm:w-auto">
              Request Service
              <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5" />
            </LuxButton>
            <p className="mt-4 text-xs text-muted-foreground">
              Submitting opens your email app with the details pre-filled for {BRAND.email}.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

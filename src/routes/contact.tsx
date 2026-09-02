import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { BRAND } from "@/components/site/brand";

const title = "Contact BroBax | Request a Plumbing Service";
const description =
  "Request a BroBax plumbing or heating visit. Call 0370-999-5042, message on WhatsApp, email BroBex.ffx@gmail.com, or send the service request form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: BRAND.name,
          email: BRAND.email,
          telephone: BRAND.phoneDisplay,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: BRAND.phoneDisplay,
            email: BRAND.email,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you need,"
        accent="we'll handle the rest"
        intro="Call, WhatsApp, email, or send the form below. Urgent issues are prioritised, and every request gets a clear next step."
      />
      <Contact />
    </SiteLayout>
  );
}

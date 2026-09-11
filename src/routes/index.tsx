import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyBrobax } from "@/components/site/WhyBrobax";
import { Process } from "@/components/site/Process";
import { Advantages } from "@/components/site/Advantages";
import { Emergency } from "@/components/site/Emergency";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { BRAND } from "@/components/site/brand";

const title = "BroBax — Premium Plumbing & Heating Services";
const description =
  "BroBax delivers premium plumbing and heating services with precision, reliability, and transparent communication. Request a service or call 0370-999-5042.";

export const Route = createFileRoute("/")({
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
          description,
          email: BRAND.email,
          telephone: BRAND.phoneDisplay,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <WhyBrobax />
      <Process />
      <Advantages />
      <Emergency />
      <Testimonials limit={3} />
      <Faq />
      <Contact />
    </SiteLayout>
  );
}

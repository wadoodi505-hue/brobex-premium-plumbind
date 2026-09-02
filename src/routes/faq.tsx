import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Faq, FAQS } from "@/components/site/Faq";
import { Emergency } from "@/components/site/Emergency";

const title = "FAQ | BroBax Plumbing & Heating";
const description =
  "Answers to common questions about BroBax services, response times, pricing transparency, heating work, and how to book a plumbing visit.";

export const Route = createFileRoute("/faq")({
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
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="FAQ"
        title="Straight answers,"
        accent="before you book"
        intro="The questions we are asked most often, answered plainly. If something is missing, a short call is usually the fastest way to get clarity."
      />
      <Faq />
      <Emergency />
    </SiteLayout>
  );
}

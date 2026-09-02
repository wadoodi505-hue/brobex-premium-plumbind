import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { WhyBrobax } from "@/components/site/WhyBrobax";
import { Emergency } from "@/components/site/Emergency";

const title = "Why BroBax | Precision, Reliability, Transparency";
const description =
  "Why clients choose BroBax: precise diagnosis before action, reliable scheduling and long-lasting solutions, and transparent pricing explained before work starts.";

export const Route = createFileRoute("/why-brobax")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Why BroBax"
        title="Three standards"
        accent="we never move on"
        intro="Precision, reliability, and transparency are not slogans here — they are the checks every job is measured against before we consider it finished."
      />
      <WhyBrobax />
      <Emergency />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { Emergency } from "@/components/site/Emergency";

const title = "Reviews | BroBax Plumbing & Heating";
const description =
  "Sample review content showing the BroBax service standard across emergency plumbing, leak detection, heating, bathrooms, kitchens, and maintenance visits.";

export const Route = createFileRoute("/reviews")({
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
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Reviews"
        title="The experience"
        accent="we aim for every time"
        intro="All reviews on this page are clearly labelled placeholder content used during development. They will be replaced with verified customer feedback once collected."
      />
      <Testimonials />
      <Emergency />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Emergency } from "@/components/site/Emergency";

const title = "Plumbing & Heating Services | BroBax";
const description =
  "Explore BroBax plumbing and heating services: emergency plumbing, drain cleaning, leak detection, water heaters, boilers, pipework, bathrooms, kitchens, and maintenance.";

export const Route = createFileRoute("/services/")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Services"
        title="Plumbing &amp; heating,"
        accent="done properly"
        intro="Every service follows the same standard: diagnose the real cause, explain the work and the cost, then finish it to a level we would accept in our own home. Select a service to see exactly what it covers."
      />
      <Services heading={false} />
      <Emergency />
    </SiteLayout>
  );
}

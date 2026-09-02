import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Trust } from "@/components/site/Trust";
import { Emergency } from "@/components/site/Emergency";

const title = "About BroBax | Premium Plumbing & Heating";
const description =
  "BroBax is a premium plumbing and heating service built on precise workmanship, dependable scheduling, and clear communication on every visit.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About BroBax"
        title="A service brand,"
        accent="not just a trade call"
        intro="BroBax was built around a simple idea: plumbing should feel like a premium service. Considered diagnosis, respectful work in your home, and honest answers before anything begins."
      />
      <Trust />
      <Emergency />
    </SiteLayout>
  );
}

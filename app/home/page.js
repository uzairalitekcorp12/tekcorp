import Home from "../main-website-pages/Home/Home";
import { getLatestArticles } from "../_lib/data/articles";
import { getCaseStudies } from "../_lib/data/caseStudies";
import { buildPageMetadata } from "../_lib/metadata";

// Keep the portfolio and latest-insight cards in sync with MongoDB.
export const dynamic = "force-dynamic";

export const metadata = buildPageMetadata({
  title: "Home",
  canonical: "/home",
  description:
    "TekCorp delivers digital transformation, software engineering, product development, AI automation and scalable technology solutions for modern businesses.",
});

export default async function HomeRoute() {
  const [articles, projectResult] = await Promise.all([
    getLatestArticles({ limit: 8 }),
    getCaseStudies({ page: 1, limit: 12 }),
  ]);

  return (
    <Home
      articles={Array.isArray(articles) ? articles : []}
      projects={projectResult?.caseStudies || []}
    />
  );
}

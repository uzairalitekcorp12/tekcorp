import OfferingsPage from "../main-website-components/OfferingsPage/OfferingsPage";
import { SOLUTION_SHOWCASE_ITEMS } from "../_lib/data/solutionProductPages";
import { buildPageMetadata } from "../_lib/metadata";

export const metadata = buildPageMetadata({
  title: "Business & Technology Solutions",
  canonical: "/solutions",
  description:
    "Explore TekCorp CRM, ERP, API, cloud, DevOps, reporting and data-analysis solutions for connected modern operations.",
});

export default function SolutionsRouteNotUsed() {
  return (
    <OfferingsPage
      type="solutions"
      eyebrow="Connected technology, practical outcomes"
      title="Solutions that make your business work better."
      description="Connect platforms, modernize infrastructure and turn business data into clearer decisions with solutions designed around your existing systems and goals."
      items={SOLUTION_SHOWCASE_ITEMS}
      showcaseTitle="Explore our business solutions"
      showcaseDescription="From system integration to cloud delivery and reporting, each solution is shaped around reliable operations and measurable value."
      cardLabel="Explore Solution"
    />
  );
}

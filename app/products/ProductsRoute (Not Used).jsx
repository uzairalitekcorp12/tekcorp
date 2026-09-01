import OfferingsPage from "../main-website-components/OfferingsPage/OfferingsPage";
import { PRODUCT_SHOWCASE_ITEMS } from "../_lib/data/solutionProductPages";
import { buildPageMetadata } from "../_lib/metadata";

export const metadata = buildPageMetadata({
  title: "Digital Products",
  canonical: "/products",
  description:
    "Explore TekCorp digital commerce, task management, employee management and onboarding software products.",
});

export default function ProductsRouteNotUsed() {
  return (
    <OfferingsPage
      type="products"
      eyebrow="Purpose-built business platforms"
      title="Products designed for the way modern teams operate."
      description="Explore practical digital platforms for commerce, project coordination and employee onboarding, with room to adapt each product to your organization."
      items={PRODUCT_SHOWCASE_ITEMS}
      showcaseTitle="Explore our digital products"
      showcaseDescription="Each product combines a clear user experience with the operational capabilities teams need to work efficiently and scale confidently."
      cardLabel="Explore Product"
    />
  );
}

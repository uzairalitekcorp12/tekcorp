import ProductDetailPage from "@/app/main-website-components/ProductDetailPage/ProductDetailPage";
import {
  getProductPage,
  PRODUCT_SHOWCASE_ITEMS,
} from "@/app/_lib/data/solutionProductPages";

export default function DigitalCommerceSoftware() {
  return (
    <ProductDetailPage
      page={getProductPage("digital-commerce-software")}
      showcaseItems={PRODUCT_SHOWCASE_ITEMS}
    />
  );
}

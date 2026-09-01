import ProductDetailPage from "@/app/main-website-components/ProductDetailPage/ProductDetailPage";
import {
  getProductPage,
  PRODUCT_SHOWCASE_ITEMS,
} from "@/app/_lib/data/solutionProductPages";

export default function TaskManagementPortal() {
  return (
    <ProductDetailPage
      page={getProductPage("task-management-portal")}
      showcaseItems={PRODUCT_SHOWCASE_ITEMS}
    />
  );
}

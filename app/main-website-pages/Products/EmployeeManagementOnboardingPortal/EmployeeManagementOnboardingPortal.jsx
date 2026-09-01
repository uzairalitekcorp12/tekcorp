import ProductDetailPage from "@/app/main-website-components/ProductDetailPage/ProductDetailPage";
import {
  getProductPage,
  PRODUCT_SHOWCASE_ITEMS,
} from "@/app/_lib/data/solutionProductPages";

export default function EmployeeManagementOnboardingPortal() {
  return (
    <ProductDetailPage
      page={getProductPage("employee-management-onboarding-portal")}
      showcaseItems={PRODUCT_SHOWCASE_ITEMS}
    />
  );
}

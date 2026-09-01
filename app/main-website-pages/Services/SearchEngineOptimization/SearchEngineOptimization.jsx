import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import SearchEngineOptimizationPage from "@/app/main-website-components/SearchEngineOptimizationPage/SearchEngineOptimizationPage";

export default function SearchEngineOptimization() {
  return (
    <ServicePageLayout page="search-engine-optimization" contactId="seo-contact" navbarProps={{ ctaHref: "#seo-contact" }} footerProps={{ ctaHref: "#seo-contact" }}>
      <SearchEngineOptimizationPage />
    </ServicePageLayout>
  );
}

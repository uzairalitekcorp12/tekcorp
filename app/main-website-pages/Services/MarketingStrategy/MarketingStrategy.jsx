import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import MarketingStrategyPage from "@/app/main-website-components/MarketingStrategyPage/MarketingStrategyPage";

export default function MarketingStrategy() {
  return (
    <ServicePageLayout page="marketing-strategy" contactId="marketing-strategy-contact" navbarProps={{ ctaHref: "#marketing-strategy-contact" }} footerProps={{ ctaHref: "#marketing-strategy-contact" }}>
      <MarketingStrategyPage />
    </ServicePageLayout>
  );
}

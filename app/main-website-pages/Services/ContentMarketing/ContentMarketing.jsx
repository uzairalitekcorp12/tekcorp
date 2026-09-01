import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import ContentMarketingPage from "@/app/main-website-components/ContentMarketingPage/ContentMarketingPage";

export default function ContentMarketing() {
  return (
    <ServicePageLayout page="content-marketing" contactId="content-marketing-contact" navbarProps={{ ctaHref: "#content-marketing-contact" }} footerProps={{ ctaHref: "#content-marketing-contact" }}>
      <ContentMarketingPage />
    </ServicePageLayout>
  );
}

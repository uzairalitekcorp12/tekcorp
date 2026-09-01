import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import SocialMediaMarketingPage from "@/app/main-website-components/SocialMediaMarketingPage/SocialMediaMarketingPage";

export default function SocialMediaMarketing() {
  return (
    <ServicePageLayout
      page="social-media-marketing"
      contactId="social-media-contact"
      navbarProps={{ variant: "adaptive", transparentTargetId: "social-media-hero", ctaHref: "#social-media-contact" }}
      footerProps={{ ctaHref: "#social-media-contact" }}
    >
      <SocialMediaMarketingPage />
    </ServicePageLayout>
  );
}

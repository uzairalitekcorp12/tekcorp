import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import GoogleAdsPage from "@/app/main-website-components/GoogleAdsPage/GoogleAdsPage";

export default function GoogleAds() {
  return (
    <ServicePageLayout
      page="google-ads"
      contactId="google-ads-contact"
      navbarProps={{ variant: "adaptive", transparentTargetId: "google-ads-hero", ctaHref: "#google-ads-contact" }}
      footerProps={{ ctaHref: "#google-ads-contact" }}
    >
      <GoogleAdsPage />
    </ServicePageLayout>
  );
}

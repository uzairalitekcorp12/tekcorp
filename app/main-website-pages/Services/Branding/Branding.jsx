import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import BrandingPage from "@/app/main-website-components/BrandingPage/BrandingPage";

export default function Branding() {
  return (
    <ServicePageLayout
      page="branding"
      contactId="branding-contact"
      navbarProps={{ ctaHref: "#branding-contact" }}
      footerProps={{ ctaHref: "#branding-contact" }}
    >
      <BrandingPage />
    </ServicePageLayout>
  );
}

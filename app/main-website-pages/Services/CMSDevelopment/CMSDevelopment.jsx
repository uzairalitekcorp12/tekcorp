import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import CMSDevelopmentPage from "@/app/main-website-components/CMSDevelopmentPage/CMSDevelopmentPage";

export default function CMSDevelopment() {
  return (
    <ServicePageLayout
      page="cms-development"
      contactId="cms-development-contact"
      navbarProps={{ ctaHref: "#cms-development-contact" }}
      footerProps={{ ctaHref: "#cms-development-contact" }}
    >
      <CMSDevelopmentPage />
    </ServicePageLayout>
  );
}

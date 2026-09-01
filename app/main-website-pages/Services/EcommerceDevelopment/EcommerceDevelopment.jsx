import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import EcommerceDevelopmentPage from "@/app/main-website-components/EcommerceDevelopmentPage/EcommerceDevelopmentPage";

export default function EcommerceDevelopment() {
  return (
    <ServicePageLayout
      page="ecommerce-development"
      contactId="ecommerce-development-contact"
      navbarProps={{ ctaHref: "#ecommerce-development-contact" }}
      footerProps={{ ctaHref: "#ecommerce-development-contact" }}
    >
      <EcommerceDevelopmentPage />
    </ServicePageLayout>
  );
}

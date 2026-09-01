import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import TekLMSPage from "@/app/main-website-components/TekLMSPage/TekLMSPage";

export default function TekLMS() {
  return (
    <ServicePageLayout page="teklms" contactId="teklms-contact" navbarProps={{ ctaHref: "#teklms-contact" }} footerProps={{ ctaHref: "#teklms-contact" }}>
      <TekLMSPage />
    </ServicePageLayout>
  );
}

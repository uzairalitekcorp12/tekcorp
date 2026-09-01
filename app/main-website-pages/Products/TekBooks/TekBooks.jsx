import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import TekBooksPage from "@/app/main-website-components/TekBooksPage/TekBooksPage";

export default function TekBooks() {
  return (
    <ServicePageLayout page="tekbooks" contactId="tekbooks-contact" navbarProps={{ ctaHref: "#tekbooks-contact" }} footerProps={{ ctaHref: "#tekbooks-contact" }}>
      <TekBooksPage />
    </ServicePageLayout>
  );
}

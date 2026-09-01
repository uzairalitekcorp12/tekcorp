import SitePageLayout from "@/app/_shared/SitePageLayout/SitePageLayout";
import LegalNavbar from "./LegalNavbar";

export default function LegalLayout({ children }) {
  return (
    <SitePageLayout
      className="legal-route"
      dataPage="legal"
      navbar={
        <LegalNavbar
          homeHref="/home"
          ctaHref="/contact"
        />
      }
      footerProps={{ ctaHref: "/contact" }}
    >
      {children}
    </SitePageLayout>
  );
}

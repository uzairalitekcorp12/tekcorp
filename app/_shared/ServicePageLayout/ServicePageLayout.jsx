import Navbar from "@/app/_shared/Navbar/Navbar";
import ContactSection from "@/app/_shared/ContactSection/ContactSection";
import Footer2 from "@/app/_shared/Footer/Footer2";
import HomePortfolio from "@/app/main-website-components/HomePortfolio/HomePortfolio";
import "./ServicePageLayout.css";

export default function ServicePageLayout({
  children,
  page,
  projects = [],
  showContact = true,
}) {
  return (
    <div className="tek-service-route" data-page={page}>
      <Navbar
        variant="default"
        initialActiveTab="Our Solutions"
        homeHref="/home"
        ctaHref="/contact"
      />

      <main>
        {children}
        <HomePortfolio
          projects={projects}
          eyebrow="SELECTED PRODUCT WORK"
          title="Digital Systems"
          subtitle="A selection of digital products shaped through strategy, interface design and close engineering collaboration."
          sectionId={`${page}-projects`}
          ctaHref="/case-studies"
          ctaLabel="View All Projects"
        />
        {showContact ? <ContactSection /> : null}
      </main>

      <Footer2 contactHref="/contact" />
    </div>
  );
}

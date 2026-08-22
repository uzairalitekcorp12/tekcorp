import Navbar from
  "@/app/_shared/Navbar/Navbar";

import Footer2 from
  "@/app/_shared/Footer/Footer2";

import ContactSection from
  "@/app/_shared/ContactSection/ContactSection";

import QualityAssuranceTestingPage from
  "@/app/main-website-components/QualityAssuranceTestingPage/QualityAssuranceTestingPage";

export default function QualityAssuranceTesting() {
  return (
    <div
      className="tek-service-route"
      data-page="quality-assurance-testing"
    >
      <Navbar
        variant="default"
        initialActiveTab="Our Solutions"
        homeHref="/Home"
        ctaHref="/Contact"
      />

      <main>
        <QualityAssuranceTestingPage />

        <ContactSection />
      </main>

      <Footer2
        contactHref="/Contact"
      />
    </div>
  );
}

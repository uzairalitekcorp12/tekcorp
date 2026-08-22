import Navbar from
  "@/app/_shared/Navbar/Navbar";

import Footer2 from
  "@/app/_shared/Footer/Footer2";

import ContactSection from
  "@/app/_shared/ContactSection/ContactSection";

import MaintenanceSupportPage from
  "@/app/main-website-components/MaintenanceSupportPage/MaintenanceSupportPage";

export default function MaintenanceSupport() {
  return (
    <div
      className="tek-service-route"
      data-page="maintenance-support"
    >
      <Navbar
        variant="default"
        initialActiveTab="Our Solutions"
        homeHref="/Home"
        ctaHref="/Contact"
      />

      <main>
        <MaintenanceSupportPage />

        <ContactSection />
      </main>

      <Footer2
        contactHref="/Contact"
      />
    </div>
  );
}

import ServicePageLayout from
  "@/app/_shared/ServicePageLayout/ServicePageLayout";

import MaintenanceSupportPage from
  "@/app/main-website-components/MaintenanceSupportPage/MaintenanceSupportPage";

export default function MaintenanceSupport({ projects = [] }) {
  return (
    <ServicePageLayout page="maintenance-support" projects={projects}>
      <MaintenanceSupportPage />
    </ServicePageLayout>
  );
}

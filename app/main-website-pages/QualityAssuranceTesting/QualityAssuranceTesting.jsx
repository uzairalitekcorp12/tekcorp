import ServicePageLayout from
  "@/app/_shared/ServicePageLayout/ServicePageLayout";

import QualityAssuranceTestingPage from
  "@/app/main-website-components/QualityAssuranceTestingPage/QualityAssuranceTestingPage";

export default function QualityAssuranceTesting({ projects = [] }) {
  return (
    <ServicePageLayout page="quality-assurance-testing" projects={projects}>
      <QualityAssuranceTestingPage />
    </ServicePageLayout>
  );
}

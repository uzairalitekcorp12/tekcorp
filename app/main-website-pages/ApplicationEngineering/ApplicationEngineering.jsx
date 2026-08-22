import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import ApplicationEngineeringPage from "@/app/main-website-components/ApplicationEngineeringPage/ApplicationEngineeringPage";

export default function ApplicationEngineering({ projects = [] }) {
  return (
    <ServicePageLayout page="application-engineering" projects={projects}>
      <ApplicationEngineeringPage />
    </ServicePageLayout>
  );
}

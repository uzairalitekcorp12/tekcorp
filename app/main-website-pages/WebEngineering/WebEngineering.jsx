import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import WebEngineeringPage from "@/app/main-website-components/WebEngineeringPage/WebEngineeringPage";

export default function WebEngineering({ projects = [] }) {
  return (
    <ServicePageLayout page="web-engineering" projects={projects}>
      <WebEngineeringPage />
    </ServicePageLayout>
  );
}

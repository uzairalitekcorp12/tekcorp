import ServicePageLayout from
  "@/app/_shared/ServicePageLayout/ServicePageLayout";

import PrototypingDesignPage from
  "@/app/main-website-components/PrototypingDesignPage/PrototypingDesignPage";

export default function PrototypingDesign({ projects = [] }) {
  return (
    <ServicePageLayout
      page="prototyping-ui-ux-design"
      showContact={false}
      projects={projects}
    >
      <PrototypingDesignPage />
    </ServicePageLayout>
  );
}

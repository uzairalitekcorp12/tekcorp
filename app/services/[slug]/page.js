import { notFound } from "next/navigation";

import ApplicationEngineering from "../../main-website-pages/ApplicationEngineering/ApplicationEngineering";
import MaintenanceSupport from "../../main-website-pages/MaintenanceSupport/MaintenanceSupport";
import PrototypingDesign from "../../main-website-pages/PrototypingDesign/PrototypingDesign";
import QualityAssuranceTesting from "../../main-website-pages/QualityAssuranceTesting/QualityAssuranceTesting";
import WebEngineering from "../../main-website-pages/WebEngineering/WebEngineering";
import { getCaseStudies } from "../../_lib/data/caseStudies";
import {
  getServicePage,
  SERVICE_SLUGS,
} from "../../_lib/data/servicePages";
import { buildPageMetadata } from "../../_lib/metadata";

const SERVICE_COMPONENTS = {
  "web-engineering": WebEngineering,
  "application-engineering": ApplicationEngineering,
  "maintenance-support": MaintenanceSupport,
  "prototyping-ui-ux-design": PrototypingDesign,
  "quality-assurance-testing": QualityAssuranceTesting,
};

// Portfolio cards on service pages should use the current MongoDB content.
export const dynamic = "force-dynamic";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return { title: "Service Not Found" };
  }

  return buildPageMetadata({
    ...page,
    canonical: `/service/${slug}`,
  });
}

export default async function ServiceRoute({ params }) {
  const { slug } = await params;
  const SelectedPage = SERVICE_COMPONENTS[slug];

  if (!SelectedPage) {
    notFound();
  }

  const projectResult = await getCaseStudies({ page: 1, limit: 12 });

  return <SelectedPage projects={projectResult?.caseStudies || []} />;
}

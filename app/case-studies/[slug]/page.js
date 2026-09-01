import {
  notFound,
} from "next/navigation";

import CaseStudyDetail from "../../main-website-pages/CaseStudyDetail/CaseStudyDetail";

import {
  getCaseStudyBySlug,
} from "../../_lib/data/caseStudies";


export const dynamic =
  "force-dynamic";


export async function generateMetadata({
  params,
}) {
  const resolvedParams =
    await params;

  const caseStudy =
    await getCaseStudyBySlug(
      resolvedParams?.slug,
    );


  if (!caseStudy) {
    return {
      title:
        "Case Study Not Found",
    };
  }


  const image =
    caseStudy.heroImage ||
    caseStudy.thumbnail ||
    "";

  const canonical =
    `/case-studies/${caseStudy.slug}`;


  return {
    title:
      caseStudy.title,

    description:
      caseStudy.shortDescription ||
      `Explore ${caseStudy.title}, a TekCorp case study.`,

    alternates: {
      canonical,
    },

    openGraph: {
      title:
        caseStudy.title,

      description:
        caseStudy.shortDescription ||
        "",

      url:
        canonical,

      images:
        image
          ? [
              image,
            ]
          : [],
    },
  };
}


export default async function CaseStudySlugRoute({
  params,
}) {
  const resolvedParams =
    await params;

  const caseStudy =
    await getCaseStudyBySlug(
      resolvedParams?.slug,
    );


  if (!caseStudy) {
    notFound();
  }


  return (
    <CaseStudyDetail
      caseStudy={caseStudy}
    />
  );
}

import CaseStudies from "../main-website-pages/CaseStudies/CaseStudies";

import {
  getCaseStudies,
  getCaseStudyCategories,
} from "../_lib/data/caseStudies";


export const dynamic =
  "force-dynamic";


export const metadata = {
  title:
    "Case Studies",

  description:
    "Explore TekCorp case studies across websites, software products, mobile applications, UI/UX and engineering.",
};


export default async function CaseStudiesRoute({
  searchParams,
}) {
  const params =
    await searchParams;

  const category =
    typeof params?.category ===
      "string"
      ? params.category
      : "all";

  const page =
    typeof params?.page ===
      "string"
      ? params.page
      : 1;


  const [
    caseStudyData,
    categories,
  ] =
    await Promise.all([
      getCaseStudies({
        category,
        page,
        limit:
          6,
      }),

      getCaseStudyCategories(),
    ]);


  return (
    <CaseStudies
      caseStudies={caseStudyData.caseStudies}
      categories={categories}
      currentPage={caseStudyData.currentPage}
      totalPages={caseStudyData.totalPages}
      total={caseStudyData.total}
      category={category}
    />
  );
}

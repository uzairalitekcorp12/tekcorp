import {
  notFound,
} from "next/navigation";

import Navbar from "../../_shared/Navbar/Navbar";
import Footer2 from "../../_shared/Footer/Footer2";

import CaseStudyDetail from "../../main-website-components/CaseStudyDetail/CaseStudyDetail";

import {
  getCaseStudyBySlug,
} from "../../_lib/content/caseStudies";


export default async function CaseStudy({
  searchParams = {},
}) {
  const caseStudy =
    await getCaseStudyBySlug(
      searchParams.slug,
    );

  if (
    !caseStudy
  ) {
    notFound();
  }


  return (
    <>
      <Navbar />

      <CaseStudyDetail
        caseStudy={
          caseStudy
        }
      />

      <Footer2 />
    </>
  );
}

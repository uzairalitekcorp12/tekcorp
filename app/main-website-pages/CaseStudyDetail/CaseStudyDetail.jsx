import Navbar from "../../_shared/Navbar/Navbar";
import Footer2 from "../../_shared/Footer/Footer2";

import CaseStudyDetailView from "../../main-website-components/CaseStudyDetail/CaseStudyDetail";


export default function CaseStudyDetail(props) {
  return (
    <>
      <Navbar />
      <CaseStudyDetailView {...props} />
      <Footer2 />
    </>
  );
}

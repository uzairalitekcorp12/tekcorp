import Navbar from "../../_shared/Navbar/Navbar";
import ContactSection from "../../_shared/ContactSection/ContactSection";
import Footer2 from "../../_shared/Footer/Footer2";

import CaseStudiesPage from "../../main-website-components/CaseStudiesPage/CaseStudiesPage";


export default function CaseStudies(props) {
  return (
    <>
      <Navbar />
      <CaseStudiesPage {...props} />
      <ContactSection />
      <Footer2 />
    </>
  );
}

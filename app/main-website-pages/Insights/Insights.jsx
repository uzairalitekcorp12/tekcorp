import Navbar from "../../_shared/Navbar/Navbar";
import Footer2 from "../../_shared/Footer/Footer2";

import InsightsPage from "../../main-website-components/InsightsPage/InsightsPage";


export default function Insights(props) {
  return (
    <>
      <Navbar />
      <InsightsPage {...props} />
      <Footer2 />
    </>
  );
}

import Navbar from "../../_shared/Navbar/Navbar";
import Footer2 from "../../_shared/Footer/Footer2";

import ArticleDetailView from "../../main-website-components/ArticleDetail/ArticleDetail";


export default function ArticleDetail(props) {
  return (
    <>
      <Navbar />
      <ArticleDetailView {...props} />
      <Footer2 />
    </>
  );
}

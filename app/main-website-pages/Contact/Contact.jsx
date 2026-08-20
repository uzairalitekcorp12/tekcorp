import Navbar from "@/app/_shared/Navbar/Navbar";
import Footer2 from "@/app/_shared/Footer/Footer2";
import SiteEffects from "@/app/_shared/SiteEffects/SiteEffects";

import ContactPage from "@/app/main-website-components/ContactPage/ContactPage";


export default function Contact() {
  return (
    <>
      <Navbar />

      <main>
        <ContactPage />
      </main>

      <Footer2 />

      <SiteEffects />
    </>
  );
}

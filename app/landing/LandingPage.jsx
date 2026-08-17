import Hero from "./components/Hero/Hero";
import VideoPreview from "./components/VideoPreview/VideoPreview";
import PainPoints from "./components/PainPoints/PainPoints";
import QuoteBanner from "./components/QuoteBanner/QuoteBanner";
import Services from "./components/Services/Services";
import Impact from "./components/Impact/Impact";
import Industries from "./components/Industries/Industries";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <VideoPreview />
      <PainPoints />
      <QuoteBanner />
      <Services />
      <Impact />
      <Industries />
      <WhyChooseUs />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FAQ />
    </>
  );
}
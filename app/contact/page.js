import Contact from "../main-website-pages/Contact/Contact";
import { buildPageMetadata } from "../_lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact Us",
  canonical: "/contact",
  description:
    "Contact TekCorp to discuss your next software, web, mobile, AI, cloud, product design or digital transformation project.",
});

export default function ContactRoute() {
  return <Contact />;
}

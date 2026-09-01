import About from "../main-website-pages/About/About";
import { buildPageMetadata } from "../_lib/metadata";

export const metadata = buildPageMetadata({
  title: "About Us",
  canonical: "/about",
  description:
    "Learn about TekCorp, our team, technology expertise, partnerships and approach to building scalable digital products and business systems.",
});

export default function AboutRoute() {
  return <About />;
}

import { notFound } from "next/navigation";

import SolutionDetailPage from "../../main-website-components/SolutionDetailPage/SolutionDetailPage";
import {
  getSolutionPage,
  SOLUTION_PAGES,
} from "../../_lib/data/solutionProductPages";
import { buildPageMetadata } from "../../_lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SOLUTION_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) {
    return { title: "Solution Not Found" };
  }

  return buildPageMetadata({
    title: `${page.title} Solutions`,
    description: page.overview.description,
    canonical: `/service/${slug}`,
    image: page.assets.hero.src,
  });
}

export default async function SolutionRoute({ params }) {
  const { slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) {
    notFound();
  }

  return <SolutionDetailPage page={page} />;
}

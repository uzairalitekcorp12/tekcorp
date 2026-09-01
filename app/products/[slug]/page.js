import { notFound } from "next/navigation";

import ProductDetailPage from "../../main-website-components/ProductDetailPage/ProductDetailPage";
import {
  getProductPage,
  PRODUCT_PAGES,
  PRODUCT_SHOWCASE_ITEMS,
} from "../../_lib/data/solutionProductPages";
import { buildPageMetadata } from "../../_lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PRODUCT_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    return { title: "Product Not Found" };
  }

  return buildPageMetadata({
    title: page.title,
    description: page.introDescription,
    canonical: `/products/${slug}`,
    image: page.assets.hero.src,
  });
}

export default async function ProductRoute({ params }) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <ProductDetailPage
      page={page}
      showcaseItems={PRODUCT_SHOWCASE_ITEMS.filter((item) => item.id !== slug)}
    />
  );
}

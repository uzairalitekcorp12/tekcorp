import Insights from "../main-website-pages/Insights/Insights";

import {
  getArticles,
  getTrendingArticles,
} from "../_lib/data/articles";


export const dynamic =
  "force-dynamic";


export const metadata = {
  title:
    "Insights",

  description:
    "Explore TekCorp articles on product engineering, software architecture, web development, AI, UI/UX and digital growth.",

  alternates: {
    canonical: "/insights",
  },
};


export default async function InsightsRoute({
  searchParams,
}) {
  const params =
    await searchParams;

  const search =
    typeof params?.search ===
      "string"
      ? params.search
      : "";

  const page =
    typeof params?.page ===
      "string"
      ? params.page
      : 1;


  const [
    articleData,
    trendingArticles,
  ] =
    await Promise.all([
      getArticles({
        page,
        limit:
          6,
        search,
      }),

      getTrendingArticles({
        limit:
          5,
      }),
    ]);


  return (
    <Insights
      articles={articleData.articles}
      trendingArticles={trendingArticles}
      currentPage={articleData.currentPage}
      totalPages={articleData.totalPages}
      total={articleData.total}
      search={search}
    />
  );
}

import {
  notFound,
} from "next/navigation";

import Navbar from "../../_shared/Navbar/Navbar";
import Footer2 from "../../_shared/Footer/Footer2";

import ArticleDetail from "../../main-website-components/ArticleDetail/ArticleDetail";

import {
  getArticleBySlug,
  getLatestArticles,
  getTrendingArticles,
} from "../../_lib/data/articles";


export default async function Article({
  searchParams = {},
}) {
  const resolvedSearchParams =
    await searchParams;

  const slug =
    resolvedSearchParams.slug;

  const article =
    await getArticleBySlug(
      slug,
    );

  if (
    !article
  ) {
    notFound();
  }


  const [
    trendingArticles,
    latestArticles,
  ] =
    await Promise.all([
      getTrendingArticles({
        limit:
          4,

        excludeSlug:
          article.slug,
      }),

      getLatestArticles({
        limit:
          7,

        excludeSlug:
          article.slug,
      }),
    ]);


  return (
    <>
      <Navbar />

      <ArticleDetail
        article={
          article
        }
        trendingArticles={
          trendingArticles
        }
        latestArticles={
          latestArticles
        }
      />

      <Footer2 />
    </>
  );
}

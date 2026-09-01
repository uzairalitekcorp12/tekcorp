import {
  notFound,
} from "next/navigation";

import ArticleDetail from "../../main-website-pages/ArticleDetail/ArticleDetail";

import {
  getArticleBySlug,
  getLatestArticles,
  getTrendingArticles,
} from "../../_lib/data/articles";


export const dynamic =
  "force-dynamic";


export async function generateMetadata({
  params,
}) {
  const resolvedParams =
    await params;

  const article =
    await getArticleBySlug(
      resolvedParams?.slug,
    );


  if (!article) {
    return {
      title:
        "Article Not Found",
    };
  }


  const image =
    article.heroImage ||
    article.thumbnail ||
    "";

  const canonical =
    article.canonicalLink ||
    `/insights/${article.slug}`;


  return {
    title:
      article.metaTitle ||
      article.title,

    description:
      article.metaDescription ||
      article.excerpt ||
      `Read ${article.title} from TekCorp.`,

    alternates: {
      canonical,
    },

    openGraph: {
      title:
        article.metaTitle ||
        article.title,

      description:
        article.metaDescription ||
        article.excerpt ||
        "",

      url:
        canonical,

      images:
        image
          ? [
              image,
            ]
          : [],
    },
  };
}


export default async function ArticleSlugRoute({
  params,
}) {
  const resolvedParams =
    await params;

  const article =
    await getArticleBySlug(
      resolvedParams?.slug,
    );


  if (!article) {
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
      }),

      getLatestArticles({
        limit:
          7,

        excludeSlug:
          article.slug,
      }),
    ]);


  return (
    <ArticleDetail
      article={article}
      trendingArticles={trendingArticles}
      latestArticles={latestArticles}
    />
  );
}

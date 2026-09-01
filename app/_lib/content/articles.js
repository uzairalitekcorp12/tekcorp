// Compatibility entry point for older page modules.
// New code should import directly from app/_lib/data/articles.
export {
  getArticleBySlug,
  getArticles,
  getArticleSuggestions,
  getLatestArticles,
  getTrendingArticles,
} from "../data/articles";

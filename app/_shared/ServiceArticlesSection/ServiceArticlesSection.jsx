import HomeArticles from "@/app/main-website-components/HomeArticles/HomeArticles";

export default function ServiceArticlesSection({ articles = [] }) {
  return (
    <HomeArticles
      articles={articles}
      eyebrow="Latest Blogs"
      titleLines={[
        "Our Excited Articles you",
        "maybe Interested in",
      ]}
      sectionId="service-insights"
      className="service-insights"
    />
  );
}

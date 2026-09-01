import ContactSection from "@/app/_shared/ContactSection/ContactSection";
import SitePageLayout from "@/app/_shared/SitePageLayout/SitePageLayout";
import HomePortfolio from "@/app/main-website-components/HomePortfolio/HomePortfolio";
import ServiceArticlesSection from "@/app/_shared/ServiceArticlesSection/ServiceArticlesSection";
import { getLatestArticles } from "@/app/_lib/data/articles";
import { getCaseStudies } from "@/app/_lib/data/caseStudies";
import "./ServicePageLayout.css";

export default async function ServicePageLayout({
  children,
  page,
  projects,
  articles,
  showContact = true,
  showPortfolio = true,
  showArticles = true,
  contactId,
  navbarProps = {},
  footerProps = {},
}) {
  const [projectResult, articleResult] = await Promise.allSettled([
    Array.isArray(projects)
      ? Promise.resolve({ caseStudies: projects })
      : getCaseStudies({ page: 1, limit: 12 }),
    Array.isArray(articles)
      ? Promise.resolve(articles)
      : getLatestArticles({ limit: 8 }),
  ]);

  const databaseProjects =
    projectResult.status === "fulfilled" &&
    Array.isArray(projectResult.value?.caseStudies)
      ? projectResult.value.caseStudies
      : [];

  const databaseArticles =
    articleResult.status === "fulfilled" &&
    Array.isArray(articleResult.value)
      ? articleResult.value
      : [];

  return (
    <SitePageLayout
      className="tek-service-route"
      dataPage={page}
      navbarProps={{
        variant: "default",
        initialActiveTab: "Our Solutions",
        homeHref: "/home",
        ctaHref: "/contact",
        ...navbarProps,
      }}
      footerProps={{ ctaHref: "/contact", ...footerProps }}
    >
      {children}
      {showPortfolio ? <HomePortfolio projects={databaseProjects} /> : null}
      {showArticles ? <ServiceArticlesSection articles={databaseArticles} /> : null}
      {showContact ? <ContactSection id={contactId} /> : null}
    </SitePageLayout>
  );
}

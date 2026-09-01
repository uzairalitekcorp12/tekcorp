import "server-only";

import {
  getLatestArticles,
} from "./articles";

import {
  getCaseStudies,
} from "./caseStudies";


export async function getHomepageContent() {
  const [
    articles,
    caseStudies,
  ] =
    await Promise.all([
      getLatestArticles({
        limit: 3,
      }),

      getCaseStudies({
        page: 1,
        limit: 3,
      }),
    ]);

  return {
    articles,
    caseStudies:
      caseStudies.caseStudies,
  };
}


export async function getLandingPageContent() {
  const caseStudies =
    await getCaseStudies({
      page: 1,
      limit: 3,
    });

  return {
    featuredCaseStudies:
      caseStudies.caseStudies,
  };
}

import "server-only";

import {
  getLatestArticles,
} from "./articles";

import {
  getCaseStudies,
} from "./caseStudies";


const LANDING_CASE_STUDY_SLUGS = [
  "moosa-khan",
  "peakcare",
  "taara",
];


function selectLandingCaseStudies(caseStudies = []) {
  const availableCaseStudies = Array.isArray(caseStudies)
    ? caseStudies
    : [];
  const caseStudiesBySlug = new Map(
    availableCaseStudies.map((caseStudy) => [
      caseStudy.slug,
      caseStudy,
    ]),
  );
  const preferredCaseStudies = LANDING_CASE_STUDY_SLUGS
    .map((slug) => caseStudiesBySlug.get(slug))
    .filter(Boolean);
  const preferredSlugs = new Set(
    preferredCaseStudies.map((caseStudy) => caseStudy.slug),
  );

  return [
    ...preferredCaseStudies,
    ...availableCaseStudies.filter(
      (caseStudy) => !preferredSlugs.has(caseStudy.slug),
    ),
  ].slice(0, 3);
}


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
      limit: 24,
    });

  return {
    featuredCaseStudies: selectLandingCaseStudies(
      caseStudies.caseStudies,
    ),
  };
}

import {
  notFound,
} from "next/navigation";

import CaseStudyDetail from "../../main-website-pages/CaseStudyDetail/CaseStudyDetail";

import {
  getCaseStudyBySlug,
} from "../../_lib/data/caseStudies";

import {
  getLatestArticles,
} from "../../_lib/data/articles";


/* ==========================================================================
   PERFORMANCE / ISR

   The page can be cached for 5 minutes instead of querying MongoDB for
   every visitor.

   - Faster production response
   - Lower MongoDB load
   - Better scalability
   - New/updated case studies refresh automatically
   ========================================================================== */

export const revalidate = 300;


/* ==========================================================================
   HELPERS
   ========================================================================== */

function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function cleanText(value) {
  return textValue(value)
    .replace(/\s+/g, " ")
    .trim();
}


function getCaseStudyTitle(
  caseStudy,
) {
  return (
    textValue(
      caseStudy?.heroHeading,
    ) ||
    textValue(
      caseStudy?.title,
    ) ||
    textValue(
      caseStudy?.clientName,
    ) ||
    "TekCorp Case Study"
  );
}


function getCaseStudyImage(
  caseStudy,
) {
  /*
   * New database field first.
   *
   * Legacy fields remain as fallbacks.
   */
  return (
    textValue(
      caseStudy?.bannerImage,
    ) ||
    textValue(
      caseStudy?.heroImage,
    ) ||
    textValue(
      caseStudy?.thumbnail,
    )
  );
}


function getFirstArrayText(
  value,
) {
  if (
    !Array.isArray(value)
  ) {
    return "";
  }


  const item =
    value.find(
      (entry) =>
        cleanText(entry),
    );


  return cleanText(
    item,
  );
}


function getCaseStudyDescription(
  caseStudy,
) {
  /*
   * Do NOT prioritize industryText here.
   *
   * For your Moosa Khan record that currently contains:
   *
   * "Short industry context…"
   *
   * the actual case-study paragraph is much better for SEO.
   */

  const problemDescription =
    getFirstArrayText(
      caseStudy
        ?.sections
        ?.problems
        ?.leftParas,
    );


  const resultDescription =
    getFirstArrayText(
      caseStudy
        ?.sections
        ?.result
        ?.paras,
    );


  const description =
    cleanText(
      caseStudy
        ?.shortDescription,
    ) ||
    problemDescription ||
    resultDescription ||
    cleanText(
      caseStudy
        ?.industryText,
    ) ||
    "Explore this TekCorp case study and discover the digital solution, implementation approach and measurable business impact.";


  /*
   * Keep metadata concise for search-result presentation.
   */
  if (
    description.length >
    160
  ) {
    return `${description
      .slice(
        0,
        157,
      )
      .trim()}...`;
  }


  return description;
}


function getCanonicalSlug(
  caseStudy,
  requestedSlug,
) {
  return (
    textValue(
      caseStudy?.slug,
    ) ||
    textValue(
      requestedSlug,
    )
  );
}


function safeJsonLd(
  value,
) {
  return JSON.stringify(
    value,
  ).replace(
    /</g,
    "\\u003c",
  );
}


/* ==========================================================================
   METADATA
   ========================================================================== */

export async function generateMetadata({
  params,
}) {
  const resolvedParams =
    await params;


  const requestedSlug =
    textValue(
      resolvedParams?.slug,
    );


  const caseStudy =
    await getCaseStudyBySlug(
      requestedSlug,
    );


  if (
    !caseStudy
  ) {
    return {
      title:
        "Case Study Not Found | TekCorp",

      description:
        "The requested TekCorp case study could not be found.",

      robots: {
        index:
          false,

        follow:
          false,
      },
    };
  }


  const title =
    getCaseStudyTitle(
      caseStudy,
    );


  const description =
    getCaseStudyDescription(
      caseStudy,
    );


  const image =
    getCaseStudyImage(
      caseStudy,
    );


  const slug =
    getCanonicalSlug(
      caseStudy,
      requestedSlug,
    );


  const canonical =
    `/case-studies/${encodeURIComponent(
      slug,
    )}`;


  return {
    title:
      `${title} | TekCorp Case Study`,

    description,


    alternates: {
      canonical,
    },


    robots: {
      index:
        true,

      follow:
        true,
    },


    openGraph: {
      type:
        "article",

      title,

      description,

      url:
        canonical,

      siteName:
        "TekCorp",

      images:
        image
          ? [
              {
                url:
                  image,

                alt:
                  `${title} - TekCorp case study`,
              },
            ]
          : [],
    },


    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images:
        image
          ? [
              image,
            ]
          : [],
    },
  };
}


/* ==========================================================================
   PAGE
   ========================================================================== */

export default async function CaseStudySlugRoute({
  params,
}) {
  const resolvedParams =
    await params;


  const slug =
    textValue(
      resolvedParams?.slug,
    );


  /*
   * Case study and articles are independent database operations.
   *
   * Running them together avoids waiting for:
   *
   * Case Study Query
   *       ↓
   * Article Query
   *
   * and instead performs:
   *
   * Case Study Query ─┐
   *                   ├── simultaneously
   * Article Query ────┘
   */

  const [
    caseStudy,
    articles,
  ] =
    await Promise.all([
      getCaseStudyBySlug(
        slug,
      ),

      /*
       * Only three articles are needed for the same HomeArticles
       * presentation used on the homepage.
       *
       * Article failure should NOT break the entire case-study page.
       */
      getLatestArticles(
        3,
      ).catch(
        () => [],
      ),
    ]);


  if (
    !caseStudy
  ) {
    notFound();
  }


  /* ==========================================================================
     STRUCTURED SEO DATA
     ========================================================================== */

  const title =
    getCaseStudyTitle(
      caseStudy,
    );


  const description =
    getCaseStudyDescription(
      caseStudy,
    );


  const image =
    getCaseStudyImage(
      caseStudy,
    );


  const canonicalSlug =
    getCanonicalSlug(
      caseStudy,
      slug,
    );


  const canonicalUrl =
    `https://www.tekcorp.ae/case-studies/${encodeURIComponent(
      canonicalSlug,
    )}`;


  const technologyNames =
    Array.isArray(
      caseStudy?.technologies,
    )
      ? caseStudy.technologies
          .map(
            (technology) =>
              textValue(
                technology?.name,
              ),
          )
          .filter(
            Boolean,
          )
      : [];


  const jsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      title,

    description,

    mainEntityOfPage: {
      "@type":
        "WebPage",

      "@id":
        canonicalUrl,
    },


    author: {
      "@type":
        "Organization",

      name:
        "TekCorp",

      url:
        "https://www.tekcorp.ae",
    },


    publisher: {
      "@type":
        "Organization",

      name:
        "TekCorp",

      url:
        "https://www.tekcorp.ae",
    },


    image:
      image
        ? [
            image,
          ]
        : undefined,


    datePublished:
      caseStudy?.createdAt ||
      undefined,


    dateModified:
      caseStudy?.updatedAt ||
      caseStudy?.createdAt ||
      undefined,


    about:
      textValue(
        caseStudy?.industry,
      ) ||
      undefined,


    keywords:
      [
        textValue(
          caseStudy?.industry,
        ),

        ...technologyNames,
      ]
        .filter(
          Boolean,
        )
        .join(", ") ||
      undefined,
  };


  return (
    <>
      {/* ====================================================================
          SEO STRUCTURED DATA
          ==================================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            safeJsonLd(
              jsonLd,
            ),
        }}
      />


      {/* ====================================================================
          PAGE

          CaseStudyDetail page composition now receives:
          - case study database record
          - latest articles

          Its page flow becomes:

          Navbar
          ↓
          Case Study
          ↓
          Second Result Image
          ↓
          HomeArticles
          ↓
          ContactSection
          ↓
          Footer2
          ==================================================================== */}

      <CaseStudyDetail
        caseStudy={
          caseStudy
        }
        articles={
          Array.isArray(
            articles,
          )
            ? articles
            : []
        }
      />
    </>
  );
}
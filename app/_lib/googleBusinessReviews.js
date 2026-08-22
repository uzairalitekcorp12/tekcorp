/* THIS SHOULD NOT BE MIXED OR EDITED UNLESS SERVER SIDE TESTIMONALS NEEDED FOR THE FUTURE CURRENTLY NOT 
BEING USED OR HAVING ANY WORK 
-> CONFIGURE THE .ENV.LOCAL FOR THE KEYS
CONFIQUE THE TESTIMONALS JSX AND TESTIMONAL CSS FOR SERVER SIDE REQUEST / */



import "server-only";


/* ==========================================================================
   CONSTANTS
   ========================================================================== */

const GOOGLE_API_BASE =
  "https://mybusiness.googleapis.com/v4";

const GOOGLE_TOKEN_URL =
  "https://oauth2.googleapis.com/token";

const MAX_PAGE_SIZE = 50;


/* ==========================================================================
   STAR RATING MAP
   ========================================================================== */

const STAR_RATINGS = {
  STAR_RATING_UNSPECIFIED: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};


/* ==========================================================================
   SELECTED REVIEW CONFIG

   Preferred future format:

   GOOGLE_SELECTED_REVIEW_IDS=id1,id2,id3,id4
   GOOGLE_SELECTED_REVIEW_URLS=url1,url2,url3,url4

   This allows any number of selected reviews without changing this file.

   The old GOOGLE_REVIEW_ID_1, 2 and 3 variables are still supported below.
   ========================================================================== */

const LEGACY_SELECTED_REVIEWS = [
  {
    reviewId:
      process.env.GOOGLE_REVIEW_ID_1,

    sourceUrl:
      "https://share.google/lrnszCrvNteUqC5Zv",
  },

  {
    reviewId:
      process.env.GOOGLE_REVIEW_ID_2,

    sourceUrl:
      "https://share.google/h0DMXshd2MFU93YNK",
  },

  {
    reviewId:
      process.env.GOOGLE_REVIEW_ID_3,

    sourceUrl:
      "https://share.google/NloPGARXLOGG6MXZh",
  },
];


/* ==========================================================================
   ACCESS TOKEN CACHE

   Avoid requesting a new Google OAuth token on every server render.
   ========================================================================== */

let tokenCache = {
  accessToken: null,
  expiresAt: 0,
};


/* ==========================================================================
   ENV HELPERS
   ========================================================================== */

function requiredEnv(name) {
  const value =
    process.env[name];

  if (
    !value ||
    !value.trim()
  ) {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }

  return value.trim();
}


/* ==========================================================================
   GOOGLE REVIEWS ENABLED
   ========================================================================== */

export function isGoogleReviewsEnabled() {
  return (
    process.env.GOOGLE_REVIEWS_ENABLED ===
    "true"
  );
}


/* ==========================================================================
   GOOGLE CONFIGURED
   ========================================================================== */

export function isGoogleBusinessConfigured() {
  if (!isGoogleReviewsEnabled()) {
    return false;
  }

  const required = [
    process.env.GOOGLE_BUSINESS_CLIENT_ID,
    process.env.GOOGLE_BUSINESS_CLIENT_SECRET,
    process.env.GOOGLE_BUSINESS_REFRESH_TOKEN,
    process.env.GOOGLE_BUSINESS_ACCOUNT_ID,
    process.env.GOOGLE_BUSINESS_LOCATION_ID,
  ];

  return required.every(
    (value) =>
      typeof value === "string" &&
      value.trim().length > 0
  );
}


/* ==========================================================================
   BASE LOCATION URL
   ========================================================================== */

function getLocationBaseUrl() {
  const accountId =
    requiredEnv(
      "GOOGLE_BUSINESS_ACCOUNT_ID"
    );

  const locationId =
    requiredEnv(
      "GOOGLE_BUSINESS_LOCATION_ID"
    );

  return (
    `${GOOGLE_API_BASE}/accounts/` +
    `${encodeURIComponent(accountId)}/locations/` +
    `${encodeURIComponent(locationId)}`
  );
}


/* ==========================================================================
   GOOGLE OAUTH ACCESS TOKEN
   ========================================================================== */

async function getGoogleAccessToken() {
  const now =
    Date.now();

  /*
    Reuse existing token while it still has
    at least 60 seconds before expiration.
  */

  if (
    tokenCache.accessToken &&
    tokenCache.expiresAt >
      now + 60_000
  ) {
    return tokenCache.accessToken;
  }


  const clientId =
    requiredEnv(
      "GOOGLE_BUSINESS_CLIENT_ID"
    );

  const clientSecret =
    requiredEnv(
      "GOOGLE_BUSINESS_CLIENT_SECRET"
    );

  const refreshToken =
    requiredEnv(
      "GOOGLE_BUSINESS_REFRESH_TOKEN"
    );


  const body =
    new URLSearchParams({
      client_id: clientId,

      client_secret:
        clientSecret,

      refresh_token:
        refreshToken,

      grant_type:
        "refresh_token",
    });


  const response =
    await fetch(
      GOOGLE_TOKEN_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },

        body,

        cache: "no-store",
      }
    );


  if (!response.ok) {
    const message =
      await response.text();

    throw new Error(
      `Google OAuth failed: ` +
      `${response.status} ${message}`
    );
  }


  const data =
    await response.json();


  if (!data.access_token) {
    throw new Error(
      "Google OAuth response did not contain an access token."
    );
  }


  const expiresIn =
    Number(
      data.expires_in ??
      3600
    );


  tokenCache = {
    accessToken:
      data.access_token,

    expiresAt:
      Date.now() +
      expiresIn * 1000,
  };


  return data.access_token;
}


/* ==========================================================================
   AUTHORIZED GOOGLE FETCH
   ========================================================================== */

async function googleFetch(
  url,
  options = {}
) {
  const accessToken =
    await getGoogleAccessToken();


  const response =
    await fetch(
      url,
      {
        ...options,

        headers: {
          ...options.headers,

          Authorization:
            `Bearer ${accessToken}`,
        },

        cache:
          options.cache ??
          "no-store",
      }
    );


  if (!response.ok) {
    const message =
      await response.text();

    throw new Error(
      `Google Business API failed: ` +
      `${response.status} ${message}`
    );
  }


  return response.json();
}


/* ==========================================================================
   REVIEW NORMALIZER

   This is the single shape that your React components should work with.

   If Google changes small details later, we only update this normalizer
   rather than rewriting every testimonial component.
   ========================================================================== */

function normalizeReview(
  review,
  options = {}
) {
  const {
    sourceUrl = null,
  } = options;


  return {
    /* Core identifiers */

    id:
      review.reviewId ??
      null,

    resourceName:
      review.name ??
      null,


    /* Rating */

    rating:
      STAR_RATINGS[
        review.starRating
      ] ?? 0,


    /* Review body */

    text:
      review.comment ??
      "",


    /* Reviewer */

    name:
      review.reviewer
        ?.displayName ??
      "Google Reviewer",

    image:
      review.reviewer
        ?.profilePhotoUrl ??
      null,

    isAnonymous:
      Boolean(
        review.reviewer
          ?.isAnonymous
      ),


    /* Dates */

    date:
      review.createTime ??
      null,

    createTime:
      review.createTime ??
      null,

    updateTime:
      review.updateTime ??
      null,


    /* Business reply */

    reply:
      review.reviewReply
        ? {
            text:
              review.reviewReply
                .comment ??
              "",

            updateTime:
              review.reviewReply
                .updateTime ??
              null,

            state:
              review.reviewReply
                .reviewReplyState ??
              null,
          }
        : null,


    /* Review media */

    media:
      Array.isArray(
        review.reviewMediaItems
      )
        ? review.reviewMediaItems.map(
            (item) => ({
              thumbnailUrl:
                item.thumbnailUrl ??
                null,

              thumbnailLabel:
                item.thumbnailLabel ??
                null,

              videoUrl:
                item.videoUrl ??
                null,
            })
          )
        : [],


    /*
      Google gives a reply-management URL,
      not necessarily the public share URL
      of the review.
    */

    replyUrl:
      review.reviewReplyUrl ??
      null,


    /*
      Public Google link supplied by us
      for specifically selected reviews.
    */

    sourceUrl,


    isOfficial: true,
  };
}


/* ==========================================================================
   SELECTED REVIEW CONFIG PARSER
   ========================================================================== */

function getSelectedReviewConfig() {
  /*
    New scalable ENV format:

    GOOGLE_SELECTED_REVIEW_IDS=id1,id2,id3
    GOOGLE_SELECTED_REVIEW_URLS=url1,url2,url3
  */

  const ids =
    process.env
      .GOOGLE_SELECTED_REVIEW_IDS
      ?.split(",")
      .map(
        (value) =>
          value.trim()
      )
      .filter(Boolean) ??
    [];


  const urls =
    process.env
      .GOOGLE_SELECTED_REVIEW_URLS
      ?.split(",")
      .map(
        (value) =>
          value.trim()
      ) ??
    [];


  if (ids.length > 0) {
    return ids.map(
      (reviewId, index) => ({
        reviewId,

        sourceUrl:
          urls[index] ||
          null,
      })
    );
  }


  /*
    Backwards compatibility with
    GOOGLE_REVIEW_ID_1 / 2 / 3.
  */

  return (
    LEGACY_SELECTED_REVIEWS
      .filter(
        ({ reviewId }) =>
          typeof reviewId ===
            "string" &&
          reviewId.trim()
      )
      .map(
        ({
          reviewId,
          sourceUrl,
        }) => ({
          reviewId:
            reviewId.trim(),

          sourceUrl,
        })
      )
  );
}


/* ==========================================================================
   GET ONE REVIEW
   ========================================================================== */

export async function getGoogleReview(
  reviewId,
  {
    sourceUrl = null,
  } = {}
) {
  if (!reviewId) {
    throw new Error(
      "A Google reviewId is required."
    );
  }


  const baseUrl =
    getLocationBaseUrl();


  const review =
    await googleFetch(
      `${baseUrl}/reviews/${encodeURIComponent(
        reviewId
      )}`
    );


  return normalizeReview(
    review,
    {
      sourceUrl,
    }
  );
}


/* ==========================================================================
   GET ONE PAGE OF REVIEWS

   Useful later if you build pagination:
   Previous / Next
   Load More
   infinite scrolling
   etc.
   ========================================================================== */

export async function getGoogleReviewsPage({
  pageSize = 20,

  pageToken = null,

  orderBy =
    "updateTime desc",
} = {}) {
  const safePageSize =
    Math.min(
      MAX_PAGE_SIZE,
      Math.max(
        1,
        Number(pageSize) || 20
      )
    );


  const baseUrl =
    getLocationBaseUrl();


  const params =
    new URLSearchParams({
      pageSize:
        String(
          safePageSize
        ),

      orderBy,
    });


  if (pageToken) {
    params.set(
      "pageToken",
      pageToken
    );
  }


  const data =
    await googleFetch(
      `${baseUrl}/reviews?${params.toString()}`
    );


  return {
    averageRating:
      Number(
        data.averageRating ??
        0
      ),

    totalReviewCount:
      Number(
        data.totalReviewCount ??
        0
      ),

    reviews:
      Array.isArray(
        data.reviews
      )
        ? data.reviews.map(
            (review) =>
              normalizeReview(
                review
              )
          )
        : [],

    nextPageToken:
      data.nextPageToken ??
      null,
  };
}


/* ==========================================================================
   GET REVIEWS

   Generic future-proof function.

   Examples:

   getGoogleReviews({ limit: 3 })

   getGoogleReviews({ limit: 6 })

   getGoogleReviews({ limit: 20 })

   getGoogleReviews({
     limit: Infinity
   })

   getGoogleReviews({
     limit: 10,
     orderBy: "rating desc"
   })
   ========================================================================== */

export async function getGoogleReviews({
  limit = Infinity,

  orderBy =
    "updateTime desc",
} = {}) {
  const reviews = [];

  let nextPageToken =
    null;

  let averageRating =
    0;

  let totalReviewCount =
    0;


  const numericLimit =
    limit === Infinity
      ? Infinity
      : Math.max(
          1,
          Number(limit) || 1
        );


  do {
    const remaining =
      numericLimit === Infinity
        ? MAX_PAGE_SIZE
        : numericLimit -
          reviews.length;


    if (remaining <= 0) {
      break;
    }


    const pageSize =
      Math.min(
        MAX_PAGE_SIZE,
        remaining
      );


    const page =
      await getGoogleReviewsPage({
        pageSize,

        pageToken:
          nextPageToken,

        orderBy,
      });


    averageRating =
      page.averageRating;

    totalReviewCount =
      page.totalReviewCount;


    reviews.push(
      ...page.reviews
    );


    nextPageToken =
      page.nextPageToken;


  } while (
    nextPageToken &&
    reviews.length <
      numericLimit
  );


  return {
    averageRating,

    totalReviewCount,

    reviews:
      numericLimit === Infinity
        ? reviews
        : reviews.slice(
            0,
            numericLimit
          ),
  };
}


/* ==========================================================================
   GET ALL GOOGLE REVIEWS

   Future use:

   const data =
     await getAllGoogleReviews();

   This follows Google's pagination until there are no more reviews.
   ========================================================================== */

export async function getAllGoogleReviews({
  orderBy =
    "updateTime desc",
} = {}) {
  return getGoogleReviews({
    limit: Infinity,

    orderBy,
  });
}


/* ==========================================================================
   GET LATEST GOOGLE REVIEWS

   Future use:

   getLatestGoogleReviews(3)
   getLatestGoogleReviews(6)
   getLatestGoogleReviews(12)
   ========================================================================== */

export async function getLatestGoogleReviews(
  limit = 3
) {
  return getGoogleReviews({
    limit,

    orderBy:
      "updateTime desc",
  });
}


/* ==========================================================================
   GET HIGHEST-RATED REVIEWS

   Future use:

   getHighestRatedGoogleReviews(6)
   ========================================================================== */

export async function getHighestRatedGoogleReviews(
  limit = 3
) {
  return getGoogleReviews({
    limit,

    orderBy:
      "rating desc",
  });
}


/* ==========================================================================
   GET SELECTED GOOGLE REVIEWS

   CURRENT LANDING PAGE USE.

   Supports:
   - your existing 3 IDs
   - any number of future IDs through
     GOOGLE_SELECTED_REVIEW_IDS
   ========================================================================== */

export async function getSelectedGoogleReviews() {
  const selectedConfig =
    getSelectedReviewConfig();


  if (
    selectedConfig.length === 0
  ) {
    throw new Error(
      "No selected Google review IDs are configured."
    );
  }


  /*
    Get selected reviews in parallel.
  */

  const reviews =
    await Promise.all(
      selectedConfig.map(
        ({
          reviewId,
          sourceUrl,
        }) =>
          getGoogleReview(
            reviewId,
            {
              sourceUrl,
            }
          )
      )
    );


  /*
    Fetch one review page to obtain Google's
    current average rating and total review count.

    Google's list response contains those values.
  */

  const summary =
    await getGoogleReviewsPage({
      pageSize: 1,
    });


  return {
    averageRating:
      summary.averageRating,

    totalReviewCount:
      summary.totalReviewCount,

    reviews,
  };
}


/* ==========================================================================
   GET REVIEW SUMMARY ONLY

   Useful later if you only need:

   5.0
   127 reviews

   without rendering cards.
   ========================================================================== */

export async function getGoogleReviewSummary() {
  const data =
    await getGoogleReviewsPage({
      pageSize: 1,
    });


  return {
    averageRating:
      data.averageRating,

    totalReviewCount:
      data.totalReviewCount,
  };
}
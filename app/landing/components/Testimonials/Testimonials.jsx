"use client";

import "./Testimonials.css";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  Pagination,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


/* ==========================================================================
   MAIN GOOGLE REVIEWS LINK
   ========================================================================== */

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Tekcorp+LLC/@24.9083912,67.0796901,799m/data=!3m1!1e3!4m8!3m7!1s0x2a276801db33749d:0x6c2072e77fe04f12!8m2!3d24.9083912!4d67.0796901!9m1!1b1!16s%2Fg%2F11wb4f33f3";


/* ==========================================================================
   TESTIMONIAL DATA
   ========================================================================== */

const reviews = [
  {
    id: 1,

    rating: 5,

    paragraphs: [
      "We partnered with Tekcorp for our website's SEO in October 2024, and since then, they have worked diligently to enhance our online presence.",

      "Their communication has been clear and transparent at every step. They provide professional reports and conduct end-of-month meetings to keep us informed about progress.",

      "Thanks to their efforts, our website's SEO has significantly improved, and we are highly satisfied with their services. We highly recommend them!",
    ],

    name: "Taara bysamiya",

    role: "Google Review",

    image:
      "/assets/landing/taara bysamiya.png",

    reviewUrl:
      "https://maps.app.goo.gl/GGbVReV1W7NJbV9N7",
  },

  {
    id: 2,

    rating: 5,

    paragraphs: [
      "I recently hired Tekcorp to develop a website and LMS portal for my business, and I couldn't be more satisfied with the results.",

      "Taha and his team were incredibly professional throughout the entire process, ensuring that every detail was handled with care. They delivered exactly what we asked for, meeting all of our requirements and completing the project within the agreed-upon deadline.",

      "The LMS portal they built has been a game-changer for us. I can now easily manage all my students, conduct online classes, and track student progress with the comprehensive admin portal they provided.",

      "Tekcorp truly solved our online presence problem, and I highly recommend them for any project. If you're looking for a reliable and skilled team, Tekcorp is the way to go!",
    ],

    name: "Moosa Khan",

    role: "Google Review",

    image:
      "/assets/landing/moosa khan.png",

    reviewUrl:
      "https://maps.app.goo.gl/jMtYwRgGvngzW3v9A",
  },

  {
    id: 3,

    rating: 5,

    paragraphs: [
      "I hired Tekcorp to develop my business website, which operates across Saudi Arabia. They delivered exactly what I needed within the agreed timelines.",

      "Taha from Tekcorp was an outstanding professional throughout the process, offering valuable insights both on the technical and business sides. His expertise helped me achieve my online presence goals seamlessly.",

      "The team's commitment to understanding my requirements and delivering a high-quality website was impressive. I highly recommend Tekcorp for anyone looking for reliable and expert web development services!",
    ],

    name: "Farooq Khan",

    role: "Google Review",

    image:
      "/assets/landing/Farooq Khan.png",

    reviewUrl:
      "https://maps.app.goo.gl/iHmCTAZ25VK9rjuT9",
  },

  {
    id: 4,

    rating: 5,

    paragraphs: [
      "As Salam o Alaikum",

      "We are currently utilizing Tekcorp's services to develop our global welfare website, and they have met our expectations perfectly.",

      "Taha Sheikh from Tekcorp has been exceptional throughout the process, offering valuable insights on both technical and business aspects. His availability and expertise have been instrumental in helping us achieve our goals.",

      "The team is dedicated to understanding our needs and delivering a high-quality solution. I highly recommend Tekcorp for anyone seeking reliable and expert web development services.",
    ],

    signoff: [
      "Mohsin - Raza Foundation",
    ],

    name: "Mohammad Mohsin",

    role: "Google Review",

    image:
      "/assets/landing/Mohsin Raza.png",

    reviewUrl:
      "https://maps.app.goo.gl/L4PqBBUiW4eCXFcHA",
  },

  {
    id: 5,

    rating: 5,

    paragraphs: [
      "I recently had finance/accounting (ERP) software developed by this company, and I’m thoroughly impressed.",

      "Taha, in particular, stands out with his deep technical expertise in ERP systems. The entire team is highly professional, responsive, and incredibly helpful throughout the process.",

      "I highly recommend their services!",
    ],

    name: "Muhammad Jamshaid",

    role: "Google Review",

    image:
      "/assets/landing/muhammad jamshaid.png",

    reviewUrl:
      "https://maps.app.goo.gl/k8zmJch7mFs4ZqFL6",
  },

  {
    id: 6,

    rating: 5,

    paragraphs: [
      "I needed a fashion website with a unique user experience, and Tekcorp's professional team, led by Taha, exceeded my expectations.",

      "They managed my project with great expertise and efficiency. Taha's professionalism and commitment were evident throughout the process.",

      "They promised to launch my website within one month and delivered it ahead of schedule. Additionally, they kept me well-informed with regular updates.",

      "I highly recommend working with Tekcorp.",
    ],

    name: "Sumayya Ahmer",

    role: "Google Review",

    image:
      "/assets/landing/Sumayya Ahmer.png",

    reviewUrl:
      "https://maps.app.goo.gl/8b8N2tfLYQjb643X8",
  },

  {
    id: 7,

    rating: 5,

    paragraphs: [
      "Tekcorp is a highly professional team.",

      "My website was struggling to go live, and after reaching out to several people who couldn’t help, Taha from Tekcorp took over and got it live within just one hour.",

      "The service was exceptional—they kept me updated throughout the process and delivered everything on time.",

      "I highly recommend Tekcorp for their efficiency and professionalism.",
    ],

    name: "Muhammad Haris Siddiqui",

    role: "Google Review",

    image:
      "/assets/landing/muhammad jamshaid.png",

    reviewUrl:
      "https://maps.app.goo.gl/JfT21BsnvQQ78MqM6",
  },

  {
    id: 8,

    rating: 5,

    paragraphs: [
      "We recently partnered with Tekcorp LLC to build the PeakCare platform, and we are extremely satisfied with the outcome.",

      "Taha and his team were professional, responsive, and detail-oriented from start to finish-consistently delivering on time and aligning every milestone with our exact requirements.",

      "They developed a fully tri-lingual system (German, Bulgarian, and English), implemented a complete e-commerce shop, and managed the technical deployment stack-including AWS for product data and Heroku deployment-to ensure a stable and scalable production setup.",

      "The standout for us was the high-tech Al chat system they built: our Al agent 'Nikolai'. Nikolai began as a simple idea, and Tekcorp brought it to life as a genuinely intelligent and dependable assistant.",

      "The system's responses were highly accurate, and the tips and techniques it provided to our customers were truly next-level-practical, detailed, and immediately actionable.",

      "This has had a measurable impact on our growth and helped us present confidently to German-, & Bulgarian-speaking investors.",

      "Tekcorp LLC is a highly qualified team with a strong work ethic and clear technical expertise. I highly recommend them as one of the best Al-focused agencies especially if you want a partner who can take a concept and turn it into a real, working product with quality and precision.",
    ],

    signoff: [
      "Best regards,",
      "Mathias Andreas Donner",
    ],

    name: "Mathias Andreas Donner",

    role: "Client Testimonial",

    image:
      "/assets/landing/muhammad jamshaid.png",

    reviewUrl: "",
  },
];


/* ==========================================================================
   EXTERNAL LINK ICON
   ========================================================================== */

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="testimonial-external-icon"
      aria-hidden="true"
    >
      <path d="M14 3h7v7" />

      <path d="M10 14 21 3" />

      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
    </svg>
  );
}


/* ==========================================================================
   STARS
   ========================================================================== */

function Stars({
  rating,
}) {
  return (
    <div
      className="testimonial-stars"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map(
        (star) => (
          <svg
            key={star}
            className={
              star <= rating
                ? "testimonial-star testimonial-star--active"
                : "testimonial-star"
            }
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      )}
    </div>
  );
}


/* ==========================================================================
   GOOGLE WORDMARK

   Used in BOTH:

   1. Main Google rating
   2. Individual testimonial cards

   This means both locations always use the same
   official Google-style color sequence.
   ========================================================================== */

function GoogleWord({
  compact = false,
}) {
  return (
    <span
      className={[
        "testimonials-google-word",

        compact
          ? "testimonials-google-word--mini"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Google"
    >
      <span className="google-blue">
        G
      </span>

      <span className="google-red">
        o
      </span>

      <span className="google-yellow">
        o
      </span>

      <span className="google-blue">
        g
      </span>

      <span className="google-green">
        l
      </span>

      <span className="google-red">
        e
      </span>
    </span>
  );
}


/* ==========================================================================
   GOOGLE HEADER RATING
   ========================================================================== */

function GoogleRating() {
  return (
    <a
      href={
        GOOGLE_REVIEWS_URL ||
        "#"
      }
      target={
        GOOGLE_REVIEWS_URL
          ? "_blank"
          : undefined
      }
      rel={
        GOOGLE_REVIEWS_URL
          ? "noopener noreferrer"
          : undefined
      }
      onClick={(event) => {
        if (
          !GOOGLE_REVIEWS_URL
        ) {
          event.preventDefault();
        }
      }}
      className="testimonials-google-rating"
      aria-label="View Tekcorp reviews on Google"
    >
      <div className="testimonials-google-top">

        <GoogleWord />

        <span className="testimonials-google-external">
          <ExternalLinkIcon />
        </span>

      </div>


      <span className="testimonials-google-label">
        Reviews
      </span>


      <div className="testimonials-google-score">

        <strong>
          5.0
        </strong>

        <span className="testimonials-google-stars">
          ★★★★★
        </span>

      </div>


      <span className="testimonials-google-action">
        View on Google
      </span>

    </a>
  );
}


/* ==========================================================================
   REVIEWER AVATAR
   ========================================================================== */

function ReviewerAvatar({
  review,
}) {
  if (
    review.image
  ) {
    return (
      <img
        src={
          review.image
        }
        alt={
          review.name
        }
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }


  return (
    <span className="testimonial-avatar-fallback">

      {review.name
        ?.charAt(0)
        ?.toUpperCase() ||
        "T"}

    </span>
  );
}


/* ==========================================================================
   OPEN REVIEW
   ========================================================================== */

function openReview(
  url
) {
  if (!url) {
    return;
  }


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* ==========================================================================
   REVIEW CARD
   ========================================================================== */

function ReviewCard({
  review,
  index,
}) {

  /*
   * A review is only clickable when
   * an actual Google review URL exists.
   */

  const clickable =
    Boolean(
      review.reviewUrl
    );


  const handleCardClick =
    () => {

      if (!clickable) {
        return;
      }


      openReview(
        review.reviewUrl
      );

    };


  const handleKeyDown =
    (event) => {

      if (!clickable) {
        return;
      }


      if (
        event.key ===
          "Enter" ||
        event.key ===
          " "
      ) {

        event.preventDefault();


        openReview(
          review.reviewUrl
        );

      }

    };


  return (
    <div className="testimonial-card-shell">

      {/* ================================================================
          DECORATIVE TOP SHINE
          ================================================================ */}

      <div
        className="testimonial-card-shine"
        aria-hidden="true"
      />


      {/* ================================================================
          REVIEW NUMBER
          ================================================================ */}

      <span
        className="testimonial-card-index"
        aria-hidden="true"
      >
        {String(
          index + 1
        ).padStart(
          2,
          "0"
        )}
      </span>


      <article
        className={
          clickable
            ? "testimonial-card testimonial-card--clickable"
            : "testimonial-card"
        }
        role={
          clickable
            ? "link"
            : undefined
        }
        tabIndex={
          clickable
            ? 0
            : undefined
        }
        onClick={
          clickable
            ? handleCardClick
            : undefined
        }
        onKeyDown={
          clickable
            ? handleKeyDown
            : undefined
        }
      >

        {/* ================================================================
            CARD BODY
            ================================================================ */}

        <div className="testimonial-card-content">


          {/* ==============================================================
              CARD TOP
              ============================================================== */}

          <div className="testimonial-card-top">

            <Stars
              rating={
                review.rating
              }
            />


            {/*
             * Google badge ONLY exists if
             * the testimonial has a real
             * Google review URL.
             *
             * Therefore Card #8 receives
             * no Google badge at all.
             */}

            {clickable && (
              <a
                href={
                  review.reviewUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={(
                  event
                ) => {
                  event.stopPropagation();
                }}
                className="testimonial-google-source"
                aria-label={`Open ${review.name}'s review on Google`}
              >

                <GoogleWord
                  compact
                />

                <ExternalLinkIcon />

              </a>
            )}

          </div>


          {/* ==============================================================
              REVIEW TEXT
              ============================================================== */}

          <div className="testimonial-text-scroll">

  <div className="testimonial-text">

    {review.paragraphs.map(
      (
        paragraph,
        paragraphIndex
      ) => (
        <p
          className="testimonial-text-paragraph"
          key={paragraphIndex}
        >
          {paragraph}
        </p>
      )
    )}


    {review.signoff?.length > 0 && (
      <div className="testimonial-signoff">

        {review.signoff.map(
          (
            line,
            lineIndex
          ) => (
            <span
              key={lineIndex}
              className={
                lineIndex ===
                review.signoff.length - 1
                  ? "testimonial-signoff__name"
                  : ""
              }
            >
              {line}
            </span>
          )
        )}

      </div>
    )}

  </div>

</div>

        </div>


        {/* ================================================================
            AUTHOR
            ================================================================ */}

        <div className="testimonial-author">

          <div className="testimonial-author-info">

            <p className="testimonial-name">
              {review.name}
            </p>

            <p className="testimonial-role">
              {review.role}
            </p>

          </div>


          <div className="testimonial-avatar">

            <ReviewerAvatar
              review={
                review
              }
            />

          </div>

        </div>


        {/* ================================================================
            CLICK HINT
            ================================================================ */}

        {clickable && (
          <div className="testimonial-open-hint">

            <span>
              Read on Google
            </span>

            <ExternalLinkIcon />

          </div>
        )}

      </article>

    </div>
  );
}


/* ==========================================================================
   TESTIMONIALS
   ========================================================================== */

export default function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="testimonials-container">


        {/* ================================================================
            HEADER
            ================================================================ */}

        <div className="testimonials-header sr">

          <div className="testimonials-heading-area">

            <h2 className="testimonials-heading">

              <span className="testimonials-heading-gradient">
                What Our Clients Say
              </span>

            </h2>


            <p className="testimonials-subheading">
              Experiences shared by clients who have worked with Tekcorp.
            </p>

          </div>


          <GoogleRating />

        </div>


        {/* ================================================================
            SLIDER
            ================================================================ */}

        <div className="testimonials-slider-stage sr">

          <div
            className="testimonials-slider-glow"
            aria-hidden="true"
          />


          <Swiper
            modules={[
              Autoplay,
              Pagination,
              A11y,
            ]}

            className="testimonials-swiper"


            /* ------------------------------------------------------------
               LAYOUT
               ------------------------------------------------------------ */

            centeredSlides={
              true
            }

            slidesPerView={
              3
            }

            spaceBetween={
              26
            }

            slideToClickedSlide={
              true
            }


            /* ------------------------------------------------------------
               MOVEMENT
               ------------------------------------------------------------ */

            loop={
              true
            }

            speed={
              900
            }

            grabCursor={
              true
            }


            /* ------------------------------------------------------------
               AUTOPLAY
               ------------------------------------------------------------ */

            autoplay={{
              delay:
                4200,

              disableOnInteraction:
                false,

              pauseOnMouseEnter:
                true,
            }}


            /* ------------------------------------------------------------
               PAGINATION
               ------------------------------------------------------------ */

            pagination={{
              clickable:
                true,
            }}


            /* ------------------------------------------------------------
               RESPONSIVE
               ------------------------------------------------------------ */

            breakpoints={{

              0: {
                slidesPerView:
                  1.08,

                spaceBetween:
                  12,
              },


              480: {
                slidesPerView:
                  1.28,

                spaceBetween:
                  15,
              },


              640: {
                slidesPerView:
                  2,

                spaceBetween:
                  20,
              },


              1024: {
                slidesPerView:
                  3,

                spaceBetween:
                  26,
              },

            }}
          >

            {reviews.map(
              (
                review,
                index
              ) => (

                <SwiperSlide
                  key={
                    review.id
                  }
                >

                  <ReviewCard
                    review={
                      review
                    }
                    index={
                      index
                    }
                  />

                </SwiperSlide>

              )
            )}

          </Swiper>

        </div>

      </div>

    </section>
  );
}
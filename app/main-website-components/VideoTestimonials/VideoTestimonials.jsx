"use client";

import "./VideoTestimonials.css";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";


/* ==========================================================================
   FALLBACK POSTER

   Physical file:
   public/assets/Home-assets/videofallback.png

   Browser URL:
   /assets/Home-assets/videofallback.png
   ========================================================================== */

const DEFAULT_POSTER =
  "/assets/Home-assets/videofallback.png";


/* ==========================================================================
   TESTIMONIAL DATA

   SINGLE SOURCE OF TRUTH
   --------------------------------------------------------------------------

   Future clients are added ONLY here.

   Home.jsx does not need to change.

   Example:

   {
     id: "future-client",
     name: "Future Client",
     role: "Founder",
     company: "Company Name",
     video: "https://your-cdn.com/future-client.mp4",
     poster: "https://your-cdn.com/future-client.webp",
     description: "Future client testimonial.",
     objectPosition: "50% 50%",
     defaultVolume: 0.75,
     uploadDate: "2026-09-02",
   }

   VIDEO BEHAVIOUR
   --------------------------------------------------------------------------

   - Direct S3 / CDN video only
   - No YouTube
   - Full video plays
   - No short preview
   - No seeking to previewStart
   - Native loop of complete video
   - Autoplay muted
   - Custom mute / volume control
   - No popup
   - No play button
   - No native video controls
   - Offscreen video pauses for performance
   - Full uncropped frame using object-fit: contain
   ========================================================================== */

export const TESTIMONIALS = [
  {
    id:
      "moosa-khan",

    name:
      "Moosa Khan",

    role:
      "Founder",

    company:
      "",

    video:
      "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/moosa-khan-testimonial-1.mp4",

    poster:
      DEFAULT_POSTER,

    description:
      "Moosa Khan shares his experience of working with TekCorp and the value created through the digital solution we delivered.",

    objectPosition:
      "50% 50%",

    defaultVolume:
      0.75,

    uploadDate:
      "",
  },


  {
    id:
      "haris-siddique",

    name:
      "Haris Siddique",

    role:
      "Founder & CEO",

    company:
      "",

    video:
      "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/haris-sid-testimonial-2.mp4",

    poster:
      DEFAULT_POSTER,

    description:
      "Haris Siddique shares his experience with TekCorp, including collaboration, delivery and the value created through the engagement.",

    objectPosition:
      "50% 50%",

    defaultVolume:
      0.75,

    uploadDate:
      "",
  },


  /* =========================================================================
     FUTURE CLIENT EXAMPLE

  {
    id:
      "future-client",

    name:
      "Future Client",

    role:
      "Founder",

    company:
      "Company Name",

    video:
      "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/future-client.mp4",

    poster:
      "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/future-client.webp",

    description:
      "Future client testimonial about working with TekCorp.",

    objectPosition:
      "50% 50%",

    defaultVolume:
      0.75,

    uploadDate:
      "2026-09-02",
  },

     ========================================================================= */
];


/* ==========================================================================
   BASIC HELPERS
   ========================================================================== */

function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


/* ==========================================================================
   NUMBER
   ========================================================================== */

function safeNumber(
  value,
  fallback,
) {
  const number =
    Number(
      value,
    );


  return Number.isFinite(
    number,
  )
    ? number
    : fallback;
}


/* ==========================================================================
   CLAMP
   ========================================================================== */

function clamp(
  value,
  min,
  max,
) {
  return Math.min(
    max,
    Math.max(
      min,
      value,
    ),
  );
}


/* ==========================================================================
   DIRECT MEDIA URL

   Supported:
   - /public assets
   - HTTPS direct media
   - HTTP direct media

   YouTube is intentionally rejected.
   ========================================================================== */

function mediaUrl(
  value,
  fallback = "",
) {
  const source =
    textValue(
      value,
    );


  if (!source) {
    return fallback;
  }


  /*
   * Next.js public asset.
   */
  if (
    source.startsWith(
      "/",
    )
  ) {
    return source;
  }


  try {
    const url =
      new URL(
        source,
      );


    if (
      url.protocol !== "https:" &&
      url.protocol !== "http:"
    ) {
      return fallback;
    }


    const hostname =
      url.hostname.toLowerCase();


    /*
     * Direct media files only.
     */
    if (
      hostname.includes(
        "youtube.com",
      ) ||
      hostname.includes(
        "youtu.be",
      )
    ) {
      return fallback;
    }


    return url.toString();
  } catch {
    return fallback;
  }
}


/* ==========================================================================
   NORMALIZE TESTIMONIAL
   ========================================================================== */

function normalizeTestimonial(
  testimonial,
  index,
) {
  if (
    !testimonial ||
    typeof testimonial !==
      "object"
  ) {
    return null;
  }


  const video =
    mediaUrl(
      testimonial.video,
    );


  /*
   * Don't create an unusable card without a direct video.
   */
  if (!video) {
    return null;
  }


  const name =
    textValue(
      testimonial.name,
    ) ||
    `Client ${index + 1}`;


  const poster =
    mediaUrl(
      testimonial.poster ||
      testimonial.image ||
      testimonial.thumbnail,
      DEFAULT_POSTER,
    );


  return {
    id:
      textValue(
        testimonial.id,
      ) ||
      `testimonial-${index + 1}`,

    name,

    role:
      textValue(
        testimonial.role,
      ),

    company:
      textValue(
        testimonial.company,
      ),

    video,

    poster,

    description:
      textValue(
        testimonial.description,
      ) ||
      `${name} shares their experience of working with TekCorp.`,

    objectPosition:
      textValue(
        testimonial.objectPosition,
      ) ||
      "50% 50%",

    defaultVolume:
      clamp(
        safeNumber(
          testimonial.defaultVolume,
          0.75,
        ),
        0,
        1,
      ),

    uploadDate:
      textValue(
        testimonial.uploadDate,
      ),
  };
}


/* ==========================================================================
   NORMALIZE LIST
   ========================================================================== */

function normalizeTestimonials(
  testimonials,
) {
  if (
    !Array.isArray(
      testimonials,
    )
  ) {
    return [];
  }


  return testimonials
    .map(
      normalizeTestimonial,
    )
    .filter(
      Boolean,
    );
}


/* ==========================================================================
   PERSON META

   Current clients render as:

   Moosa Khan
   Founder

   Haris Siddique
   Founder & CEO

   If a genuine company is added later:

   Founder · Company Name

   We never create:
   "Founder at Client"
   ========================================================================== */

function PersonMeta({
  testimonial,
}) {
  const role =
    textValue(
      testimonial.role,
    );


  const company =
    textValue(
      testimonial.company,
    );


  if (
    !role &&
    !company
  ) {
    return null;
  }


  return (
    <p className="video-testimonials__role">

      {role ? (
        <strong>
          {role}
        </strong>
      ) : null}


      {role &&
      company ? (
        <span
          aria-hidden="true"
        >
          ·
        </span>
      ) : null}


      {company ? (
        <em>
          {company}
        </em>
      ) : null}

    </p>
  );
}


/* ==========================================================================
   AUDIO ICON
   ========================================================================== */

function AudioIcon({
  muted,
  volume,
}) {
  if (
    muted ||
    volume === 0
  ) {
    return (
      <VolumeX
        size={17}
        strokeWidth={1.9}
      />
    );
  }


  if (
    volume <
    0.45
  ) {
    return (
      <Volume1
        size={17}
        strokeWidth={1.9}
      />
    );
  }


  return (
    <Volume2
      size={17}
      strokeWidth={1.9}
    />
  );
}


/* ==========================================================================
   TESTIMONIAL CARD

   FULL VIDEO — NO PREVIEW CONCEPT
   --------------------------------------------------------------------------

   The actual testimonial video:

   - starts at 0
   - plays normally
   - reaches the real end
   - loops naturally using <video loop>
   - is never manually shortened
   - is never reset after 5 seconds
   - never seeks to a preview position

   PERFORMANCE
   --------------------------------------------------------------------------

   Poster:
   Immediately available.

   Video:
   Source attaches shortly before the card reaches the viewport.

   Visible:
   Play.

   Offscreen:
   Pause.

   This allows future testimonial lists to grow without downloading and
   decoding every MP4 on the page simultaneously.
   ========================================================================== */

function TestimonialCard({
  testimonial,
  index,
  audible,
  onActivateAudio,
  onDeactivateAudio,
}) {
  const cardRef =
    useRef(null);


  const videoRef =
    useRef(null);


  const [
    shouldLoad,
    setShouldLoad,
  ] =
    useState(false);


  const [
    visible,
    setVisible,
  ] =
    useState(false);


  const [
    ready,
    setReady,
  ] =
    useState(false);


  const [
    failed,
    setFailed,
  ] =
    useState(false);


  const [
    volume,
    setVolume,
  ] =
    useState(
      testimonial.defaultVolume,
    );


  /* ==========================================================================
     RESET
     ========================================================================== */

  useEffect(
    () => {
      setReady(
        false,
      );


      setFailed(
        false,
      );


      setVolume(
        testimonial.defaultVolume,
      );
    },
    [
      testimonial.id,
      testimonial.video,
      testimonial.defaultVolume,
    ],
  );


  /* ==========================================================================
     PRELOAD BEFORE VIEWPORT

     We begin loading before the user reaches this section.

     This keeps playback feeling immediate while avoiding aggressive loading
     of testimonial videos that may be far below the fold.
     ========================================================================== */

  useEffect(
    () => {
      const card =
        cardRef.current;


      if (!card) {
        return undefined;
      }


      const observer =
        new IntersectionObserver(
          ([entry]) => {
            if (
              entry.isIntersecting
            ) {
              setShouldLoad(
                true,
              );


              observer.disconnect();
            }
          },
          {
            rootMargin:
              "1100px 0px 1100px 0px",

            threshold:
              0.01,
          },
        );


      observer.observe(
        card,
      );


      return () => {
        observer.disconnect();
      };
    },
    [],
  );


  /* ==========================================================================
     ACTUAL VISIBILITY
     ========================================================================== */

  useEffect(
    () => {
      const card =
        cardRef.current;


      if (!card) {
        return undefined;
      }


      const observer =
        new IntersectionObserver(
          ([entry]) => {
            setVisible(
              Boolean(
                entry.isIntersecting &&
                entry.intersectionRatio >=
                  0.12,
              ),
            );
          },
          {
            threshold: [
              0,
              0.12,
              0.35,
            ],

            rootMargin:
              "80px 0px 80px 0px",
          },
        );


      observer.observe(
        card,
      );


      return () => {
        observer.disconnect();
      };
    },
    [],
  );


  /* ==========================================================================
     PLAY / PAUSE

     Full video plays from wherever it naturally is.

     We do NOT:
     - modify currentTime
     - create preview ranges
     - restart every 5 seconds

     Native `loop` handles the complete-video loop.
     ========================================================================== */

  useEffect(
    () => {
      const video =
        videoRef.current;


      if (
        !video ||
        !shouldLoad ||
        failed
      ) {
        return;
      }


      if (!visible) {
        video.pause();

        return;
      }


      video
        .play()
        .catch(
          () => {},
        );
    },
    [
      shouldLoad,
      visible,
      failed,
    ],
  );


  /* ==========================================================================
     AUDIO STATE

     Parent controls which card is currently audible.

     Only one testimonial can output sound at a time.
     ========================================================================== */

  useEffect(
    () => {
      const video =
        videoRef.current;


      if (!video) {
        return;
      }


      video.volume =
        clamp(
          volume,
          0,
          1,
        );


      video.muted =
        !audible ||
        volume === 0;


      /*
       * defaultMuted remains true because the video must initially qualify
       * for reliable browser autoplay.
       */
      video.defaultMuted =
        true;
    },
    [
      audible,
      volume,
    ],
  );


  /* ==========================================================================
     DOCUMENT VISIBILITY

     Prevent videos continuing to decode when the browser tab is hidden.
     ========================================================================== */

  useEffect(
    () => {
      function handleVisibilityChange() {
        const video =
          videoRef.current;


        if (!video) {
          return;
        }


        if (
          document.hidden
        ) {
          video.pause();

          return;
        }


        if (
          visible &&
          shouldLoad &&
          !failed
        ) {
          video
            .play()
            .catch(
              () => {},
            );
        }
      }


      document.addEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );


      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    },
    [
      visible,
      shouldLoad,
      failed,
    ],
  );


  /* ==========================================================================
     TOGGLE AUDIO
     ========================================================================== */

  function toggleAudio() {
    const video =
      videoRef.current;


    if (!video) {
      return;
    }


    /*
     * Currently audible -> mute it.
     */
    if (
      audible &&
      volume >
        0
    ) {
      video.muted =
        true;


      onDeactivateAudio(
        testimonial.id,
      );


      return;
    }


    /*
     * If slider was previously set to zero, restore a useful listening
     * volume when the visitor taps the audio button.
     */
    let nextVolume =
      volume;


    if (
      nextVolume <=
      0
    ) {
      nextVolume =
        0.65;


      setVolume(
        nextVolume,
      );
    }


    /*
     * This occurs directly from a user interaction, so browsers allow
     * sound to be enabled here.
     */
    video.volume =
      nextVolume;


    video.muted =
      false;


    onActivateAudio(
      testimonial.id,
    );


    if (
      video.paused &&
      visible
    ) {
      video
        .play()
        .catch(
          () => {},
        );
    }
  }


  /* ==========================================================================
     VOLUME
     ========================================================================== */

  function handleVolumeChange(
    event,
  ) {
    const video =
      videoRef.current;


    if (!video) {
      return;
    }


    const nextVolume =
      clamp(
        Number(
          event.target.value,
        ),
        0,
        1,
      );


    setVolume(
      nextVolume,
    );


    video.volume =
      nextVolume;


    if (
      nextVolume ===
      0
    ) {
      video.muted =
        true;


      onDeactivateAudio(
        testimonial.id,
      );


      return;
    }


    /*
     * Moving the slider above 0 explicitly activates this video's audio.
     * Parent automatically mutes any other testimonial.
     */
    video.muted =
      false;


    onActivateAudio(
      testimonial.id,
    );


    if (
      video.paused &&
      visible
    ) {
      video
        .play()
        .catch(
          () => {},
        );
    }
  }


  /* ==========================================================================
     VIDEO READY
     ========================================================================== */

  function handleReady() {
    setReady(
      true,
    );
  }


  /* ==========================================================================
     VIDEO FAILURE
     ========================================================================== */

  function handleFailure() {
    setFailed(
      true,
    );


    setReady(
      false,
    );


    onDeactivateAudio(
      testimonial.id,
    );
  }


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <article
      ref={
        cardRef
      }
      className={[
        "video-testimonials__card",

        ready
          ? "is-ready"
          : "is-loading",

        failed
          ? "is-failed"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-reveal={
        index % 2 ===
        0
          ? "left"
          : "right"
      }
      itemScope
      itemType="https://schema.org/VideoObject"
    >

      {/* ====================================================================
          VIDEO SEO
          ==================================================================== */}

      <meta
        itemProp="contentUrl"
        content={
          testimonial.video
        }
      />


      <meta
        itemProp="name"
        content={`${testimonial.name} — TekCorp Client Story`}
      />


      <meta
        itemProp="description"
        content={
          testimonial.description
        }
      />


      <meta
        itemProp="thumbnailUrl"
        content={
          testimonial.poster
        }
      />


      {testimonial.uploadDate ? (
        <meta
          itemProp="uploadDate"
          content={
            testimonial.uploadDate
          }
        />
      ) : null}


      {/* ====================================================================
          MEDIA
          ==================================================================== */}

      <div className="video-testimonials__media">

        <div className="video-testimonials__stage">

          <video
            ref={
              videoRef
            }
            className="video-testimonials__video"

            /*
             * Don't attach remote MP4 until the card approaches viewport.
             */
            src={
              shouldLoad &&
              !failed
                ? testimonial.video
                : undefined
            }

            poster={
              testimonial.poster
            }

            /*
             * COMPLETE VIDEO AUTOPLAY.
             */
            autoPlay

            /*
             * Required for reliable initial autoplay.
             *
             * The custom audio control can then unmute it after user input.
             */
            muted={
              !audible
            }

            /*
             * Native loop = complete video reaches the end, then restarts.
             */
            loop

            playsInline

            /*
             * Once we're close to viewport, prioritise actual playback bytes.
             */
            preload={
              shouldLoad
                ? "auto"
                : "none"
            }

            disablePictureInPicture

            controlsList="nodownload"

            aria-label={`${testimonial.name} client testimonial`}

            style={{
              objectPosition:
                testimonial.objectPosition,
            }}

            onLoadedData={
              handleReady
            }

            onCanPlay={
              handleReady
            }

            onPlaying={
              handleReady
            }

            onError={
              handleFailure
            }
          />

        </div>


        {/* ==================================================================
            VERY LIGHT LOWER FADE
            ================================================================== */}

        <span
          className="video-testimonials__media-shade"
          aria-hidden="true"
        />


        <span
          className="video-testimonials__media-glow"
          aria-hidden="true"
        />


        {/* ==================================================================
            AUDIO CONTROL

            ONLY USER MEDIA CONTROL:
            - mute
            - unmute
            - volume up
            - volume down

            No:
            - popup
            - play
            - pause
            - seek bar
            - fullscreen control
            ================================================================== */}

        {!failed ? (
          <div
            className={[
              "video-testimonials__audio",

              audible &&
              volume >
                0
                ? "is-audible"
                : "is-muted",
            ]
              .filter(Boolean)
              .join(" ")}
          >

            <div className="video-testimonials__audio-slider-wrap">

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={
                  audible
                    ? volume
                    : 0
                }
                onChange={
                  handleVolumeChange
                }
                className="video-testimonials__audio-slider"
                aria-label={`${testimonial.name} testimonial volume`}
              />

            </div>


            <button
              type="button"
              className="video-testimonials__audio-button"
              onClick={
                toggleAudio
              }
              aria-label={
                audible &&
                volume > 0
                  ? `Mute ${testimonial.name} testimonial`
                  : `Unmute ${testimonial.name} testimonial`
              }
              aria-pressed={
                audible &&
                volume > 0
              }
            >
              <AudioIcon
                muted={
                  !audible ||
                  volume === 0
                }
                volume={
                  volume
                }
              />
            </button>

          </div>
        ) : null}

      </div>


      {/* ====================================================================
          CLIENT INFORMATION
          ==================================================================== */}

      <div className="video-testimonials__card-footer">

        <div>

          <h3>
            {testimonial.name}
          </h3>


          <PersonMeta
            testimonial={
              testimonial
            }
          />

        </div>

      </div>

    </article>
  );
}


/* ==========================================================================
   VIDEO TESTIMONIALS
   ========================================================================== */

export default function VideoTestimonials({
  testimonials,

  eyebrow =
    "Client Stories",

  title =
    "Watch What They’re Saying About Us",

  description =
    "Real experiences from the people and teams we work with. See how thoughtful technology, reliable delivery and close collaboration create lasting business value.",

  className =
    "",
}) {
  const generatedId =
    useId();


  const headingId =
    `video-testimonials-${generatedId.replace(
      /:/g,
      "",
    )}`;


  /* ==========================================================================
     TESTIMONIAL SOURCE

     If no testimonials prop is supplied, TESTIMONIALS[] above is used.

     Home.jsx deliberately supplies no testimonial data, making this file the
     single place where future clients are managed.
     ========================================================================== */

  const normalizedTestimonials =
    useMemo(
      () =>
        normalizeTestimonials(
          Array.isArray(
            testimonials,
          )
            ? testimonials
            : TESTIMONIALS,
        ),
      [
        testimonials,
      ],
    );


  /* ==========================================================================
     ACTIVE AUDIO

     Browser autoplay begins muted.

     Once a visitor enables one client's sound:

     Moosa audible
         ↓ user unmutes Haris
     Moosa automatically muted
         ↓
     Haris audible

     This prevents multiple testimonials speaking simultaneously.
     ========================================================================== */

  const [
    activeAudioId,
    setActiveAudioId,
  ] =
    useState(null);


  const activateAudio =
    useCallback(
      (
        testimonialId,
      ) => {
        setActiveAudioId(
          testimonialId,
        );
      },
      [],
    );


  const deactivateAudio =
    useCallback(
      (
        testimonialId,
      ) => {
        setActiveAudioId(
          (
            current,
          ) =>
            current ===
            testimonialId
              ? null
              : current,
        );
      },
      [],
    );


  if (
    !normalizedTestimonials.length
  ) {
    return null;
  }


  return (
    <section
      className={[
        "video-testimonials",

        normalizedTestimonials.length ===
          1
          ? "video-testimonials--single"
          : "video-testimonials--multiple",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={
        headingId
      }
    >

      <div className="video-testimonials__shell">


        {/* ==================================================================
            HEADER
            ================================================================== */}

        <header className="video-testimonials__header">

          <div
            className="video-testimonials__heading"
            data-reveal="left"
          >

            {eyebrow ? (
              <span className="video-testimonials__eyebrow">
                {eyebrow}
              </span>
            ) : null}


            <h2
              id={
                headingId
              }
            >
              {title}
            </h2>

          </div>


          <p
            className="video-testimonials__intro"
            data-reveal="right"
          >
            {description}
          </p>

        </header>


        {/* ==================================================================
            AUTOMATIC CLIENT GRID
            ================================================================== */}

        <div className="video-testimonials__grid">

          {normalizedTestimonials.map(
            (
              testimonial,
              index,
            ) => (
              <TestimonialCard
                key={
                  testimonial.id
                }
                testimonial={
                  testimonial
                }
                index={
                  index
                }
                audible={
                  activeAudioId ===
                  testimonial.id
                }
                onActivateAudio={
                  activateAudio
                }
                onDeactivateAudio={
                  deactivateAudio
                }
              />
            ),
          )}

        </div>

      </div>

    </section>
  );
}
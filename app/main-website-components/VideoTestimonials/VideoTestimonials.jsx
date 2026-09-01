"use client";

import "./VideoTestimonials.css";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Pause,
  Play,
  X,
} from "lucide-react";


/* ==========================================================================
   DEFAULT CONTENT

   This component intentionally displays a maximum of TWO testimonials.

   You can replace these URLs/content later without changing the component.

   Supported video sources:
   - YouTube
   - YouTube Shorts
   - Direct MP4/WebM/CDN video URLs

   ========================================================================== */

const DEFAULT_TESTIMONIALS = [
  {
    id:
      "john-smith",

    name:
      "John Smith",

    role:
      "Founder",

    company:
      "Client",

    video:
      "https://www.youtube.com/shorts/ImsFH9bjtCI",

    poster:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",

    previewStart:
      0,

    previewDuration:
      4.5,
  },

  {
    id:
      "michelle-jawing",

    name:
      "Michelle Jawing",

    role:
      "Marketing Manager",

    company:
      "GFO",

    video:
      "https://youtube.com/shorts/FQagzMsmJfo?si=_dv2jxEufndTxdaS",

    poster:
      "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1200",

    previewStart:
      2,

    previewDuration:
      4.5,
  },
];


/* ==========================================================================
   YOUTUBE HELPERS
   ========================================================================== */

function getYouTubeVideoId(
  videoUrl,
) {
  if (
    typeof videoUrl !==
    "string"
  ) {
    return null;
  }


  try {
    const normalizedUrl =
      /^https?:\/\//i.test(
        videoUrl,
      )
        ? videoUrl
        : `https://${videoUrl}`;


    const url =
      new URL(
        normalizedUrl,
      );


    const hostname =
      url.hostname
        .replace(
          /^www\./i,
          "",
        )
        .replace(
          /^m\./i,
          "",
        );


    let videoId =
      null;


    /* ----------------------------------------------------------------------
       YOUTU.BE
       ---------------------------------------------------------------------- */

    if (
      hostname ===
      "youtu.be"
    ) {
      videoId =
        url.pathname
          .split("/")
          .filter(Boolean)[0];
    }


    /* ----------------------------------------------------------------------
       YOUTUBE.COM
       ---------------------------------------------------------------------- */

    else if (
      hostname ===
        "youtube.com" ||
      hostname.endsWith(
        ".youtube.com",
      )
    ) {
      const pathParts =
        url.pathname
          .split("/")
          .filter(Boolean);


      if (
        [
          "shorts",
          "embed",
          "live",
        ].includes(
          pathParts[0],
        )
      ) {
        videoId =
          pathParts[1];
      }


      else if (
        pathParts[0] ===
        "watch"
      ) {
        videoId =
          url.searchParams.get(
            "v",
          );
      }
    }


    return /^[A-Za-z0-9_-]{11}$/.test(
      videoId ||
      "",
    )
      ? videoId
      : null;

  } catch {
    return null;
  }
}


/* ==========================================================================
   YOUTUBE EMBED URL
   ========================================================================== */

function getYouTubeEmbedUrl(
  videoUrl,
  {
    preview =
      false,

    start =
      0,
  } = {},
) {
  const videoId =
    getYouTubeVideoId(
      videoUrl,
    );


  if (
    !videoId
  ) {
    return null;
  }


  const parameters =
    new URLSearchParams({
      playsinline:
        "1",

      rel:
        "0",

      modestbranding:
        "1",
    });


  /* ------------------------------------------------------------------------
     MUTED CARD PREVIEW
     ------------------------------------------------------------------------ */

  if (
    preview
  ) {
    parameters.set(
      "autoplay",
      "1",
    );


    parameters.set(
      "mute",
      "1",
    );


    parameters.set(
      "controls",
      "0",
    );


    parameters.set(
      "loop",
      "1",
    );


    parameters.set(
      "playlist",
      videoId,
    );


    parameters.set(
      "start",
      String(
        Math.max(
          0,
          Number(
            start,
          ) ||
            0,
        ),
      ),
    );
  }


  /* ------------------------------------------------------------------------
     FULL MODAL VIDEO
     ------------------------------------------------------------------------ */

  else {
    parameters.set(
      "autoplay",
      "1",
    );


    parameters.set(
      "controls",
      "1",
    );


    /*
     * Every popup opening starts from the beginning.
     */

    parameters.set(
      "start",
      "0",
    );
  }


  return (
    `https://www.youtube-nocookie.com/embed/` +
    `${videoId}?${parameters.toString()}`
  );
}


/* ==========================================================================
   CARD PLAY BUTTON
   ========================================================================== */

function CardPlayButton() {
  return (
    <span
      className="video-testimonials__play"
      aria-hidden="true"
    >
      <Play
        size={19}
        strokeWidth={1.8}
        fill="currentColor"
      />
    </span>
  );
}


/* ==========================================================================
   VIDEO TESTIMONIALS
   ========================================================================== */

export default function VideoTestimonials({
  testimonials =
    DEFAULT_TESTIMONIALS,

  eyebrow =
    "Client Stories",

  title =
    "Watch What They’re Saying About Us",

  description =
    "Real experiences from the people and teams we work with. See how thoughtful technology, reliable delivery and close collaboration create lasting business value.",

  className =
    "",
}) {

  /* ==========================================================================
     ONLY TWO VIDEOS

     Even if somebody accidentally provides 3, 4 or 10 items later, this
     component intentionally displays the first two only.

     This protects the two-card design.
     ========================================================================== */

  const visibleTestimonials =
    useMemo(
      () => {
        if (
          !Array.isArray(
            testimonials,
          )
        ) {
          return [];
        }


        return testimonials.slice(
          0,
          2,
        );
      },
      [
        testimonials,
      ],
    );


  /* ==========================================================================
     STATE
     ========================================================================== */

  const [
    selectedVideo,
    setSelectedVideo,
  ] =
    useState(null);


  const [
    modalPlaying,
    setModalPlaying,
  ] =
    useState(false);


  /* ==========================================================================
     REFS
     ========================================================================== */

  const sectionRef =
    useRef(null);


  const previewRefs =
    useRef([]);


  const modalVideoRef =
    useRef(null);


  const closeButtonRef =
    useRef(null);


  /* ==========================================================================
     RESET NATIVE PREVIEW
     ========================================================================== */

  const resetPreview =
    useCallback(
      (
        video,
        testimonial,
      ) => {
        if (
          !video ||
          !testimonial
        ) {
          return;
        }


        video.pause();


        video.muted =
          true;


        try {
          video.currentTime =
            testimonial.previewStart ??
            0;
        } catch {
          /*
           * Metadata may not yet be available.
           */
        }
      },
      [],
    );


  /* ==========================================================================
     NATIVE VIDEO PREVIEWS

     Direct MP4/WebM videos:

     - play muted
     - only while the section is visible
     - stop when modal is opened
     - restart from previewStart when returning
     ========================================================================== */

  useEffect(
    () => {
      if (
        selectedVideo !==
        null
      ) {
        previewRefs.current.forEach(
          (
            video,
            index,
          ) => {
            resetPreview(
              video,
              visibleTestimonials[
                index
              ],
            );
          },
        );


        return undefined;
      }


      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;


      if (
        reducedMotion
      ) {
        return undefined;
      }


      const section =
        sectionRef.current;


      if (
        !section
      ) {
        return undefined;
      }


      let visible =
        false;


      /* ----------------------------------------------------------------------
         START
         ---------------------------------------------------------------------- */

      const startPreview =
        () => {
          previewRefs.current.forEach(
            (
              video,
              index,
            ) => {
              const testimonial =
                visibleTestimonials[
                  index
                ];


              if (
                !video ||
                !testimonial
              ) {
                return;
              }


              video.muted =
                true;


              video.volume =
                0;


              const startAt =
                testimonial.previewStart ??
                0;


              try {
                if (
                  Math.abs(
                    video.currentTime -
                    startAt,
                  ) >
                  .8
                ) {
                  video.currentTime =
                    startAt;
                }
              } catch {
                /*
                 * Metadata may not yet exist.
                 */
              }


              const playPromise =
                video.play();


              if (
                playPromise
                  ?.catch
              ) {
                playPromise.catch(
                  () => {},
                );
              }
            },
          );
        };


      /* ----------------------------------------------------------------------
         STOP
         ---------------------------------------------------------------------- */

      const stopPreview =
        () => {
          previewRefs.current.forEach(
            (
              video,
              index,
            ) => {
              resetPreview(
                video,
                visibleTestimonials[
                  index
                ],
              );
            },
          );
        };


      /* ----------------------------------------------------------------------
         OBSERVER
         ---------------------------------------------------------------------- */

      const observer =
        new IntersectionObserver(
          (
            entries,
          ) => {
            const entry =
              entries[0];


            visible =
              Boolean(
                entry?.isIntersecting,
              );


            if (
              visible
            ) {
              startPreview();
            } else {
              stopPreview();
            }
          },
          {
            threshold:
              .28,
          },
        );


      observer.observe(
        section,
      );


      return () => {
        observer.disconnect();


        if (
          !visible
        ) {
          stopPreview();
        }
      };
    },
    [
      resetPreview,
      selectedVideo,
      visibleTestimonials,
    ],
  );


  /* ==========================================================================
     LOOP SHORT NATIVE PREVIEW
     ========================================================================== */

  function handlePreviewTimeUpdate(
    event,
    testimonial,
  ) {
    const video =
      event.currentTarget;


    const start =
      testimonial.previewStart ??
      0;


    const duration =
      testimonial.previewDuration ??
      4.5;


    if (
      video.currentTime >=
      start +
        duration
    ) {
      video.currentTime =
        start;


      const playPromise =
        video.play();


      if (
        playPromise
          ?.catch
      ) {
        playPromise.catch(
          () => {},
        );
      }
    }
  }


  /* ==========================================================================
     OPEN VIDEO
     ========================================================================== */

  function openVideo(
    index,
  ) {
    const previewVideo =
      previewRefs.current[
        index
      ];


    if (
      previewVideo
    ) {
      previewVideo.pause();
    }


    setModalPlaying(
      false,
    );


    setSelectedVideo(
      index,
    );
  }


  /* ==========================================================================
     CLOSE VIDEO
     ========================================================================== */

  const closeVideo =
    useCallback(
      () => {
        const video =
          modalVideoRef.current;


        if (
          video
        ) {
          video.pause();


          video.muted =
            true;


          video.volume =
            0;


          try {
            video.currentTime =
              0;
          } catch {
            /*
             * Ignore if metadata isn't ready.
             */
          }
        }


        setModalPlaying(
          false,
        );


        setSelectedVideo(
          null,
        );
      },
      [],
    );


  /* ==========================================================================
     MODAL INITIALIZATION

     When opened:
     - lock body scroll
     - direct video starts from 0
     - direct video starts with audio
     - YouTube iframe starts from 0 through its fresh iframe URL

     When closed:
     - component unmounts modal
     - playback stops
     - reopening starts from beginning
     ========================================================================== */

  useEffect(
    () => {
      if (
        selectedVideo ===
        null
      ) {
        return undefined;
      }


      const previousOverflow =
        document.body.style
          .overflow;


      document.body.style.overflow =
        "hidden";


      const video =
        modalVideoRef.current;


      if (
        video
      ) {
        try {
          video.currentTime =
            0;
        } catch {
          /*
           * Metadata may still be loading.
           */
        }


        video.muted =
          false;


        video.volume =
          1;


        const playPromise =
          video.play();


        if (
          playPromise
            ?.then
        ) {
          playPromise
            .then(
              () => {
                setModalPlaying(
                  true,
                );
              },
            )
            .catch(
              () => {
                /*
                 * Browser autoplay restrictions can still apply.
                 * Native controls remain available.
                 */

                setModalPlaying(
                  false,
                );
              },
            );
        }
      }


      requestAnimationFrame(
        () => {
          closeButtonRef.current
            ?.focus();
        },
      );


      /* ----------------------------------------------------------------------
         ESCAPE
         ---------------------------------------------------------------------- */

      function handleKeyDown(
        event,
      ) {
        if (
          event.key ===
          "Escape"
        ) {
          closeVideo();
        }
      }


      document.addEventListener(
        "keydown",
        handleKeyDown,
      );


      return () => {
        document.body.style.overflow =
          previousOverflow;


        document.removeEventListener(
          "keydown",
          handleKeyDown,
        );
      };
    },
    [
      closeVideo,
      selectedVideo,
    ],
  );


  /* ==========================================================================
     NATIVE MODAL PLAY / PAUSE
     ========================================================================== */

  function toggleModalPlayback() {
    const video =
      modalVideoRef.current;


    if (
      !video
    ) {
      return;
    }


    if (
      video.paused
    ) {
      video.muted =
        false;


      video.volume =
        1;


      video
        .play()
        .then(
          () => {
            setModalPlaying(
              true,
            );
          },
        )
        .catch(
          () => {},
        );
    }


    else {
      video.pause();


      setModalPlaying(
        false,
      );
    }
  }


  /* ==========================================================================
     EMPTY STATE
     ========================================================================== */

  if (
    visibleTestimonials.length ===
    0
  ) {
    return null;
  }


  /* ==========================================================================
     SELECTED TESTIMONIAL
     ========================================================================== */

  const selectedTestimonial =
    selectedVideo ===
    null
      ? null
      : visibleTestimonials[
          selectedVideo
        ];


  const selectedYouTubeEmbedUrl =
    getYouTubeEmbedUrl(
      selectedTestimonial?.video,
      {
        start:
          0,
      },
    );


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <section
      ref={
        sectionRef
      }
      className={[
        "video-testimonials",

        visibleTestimonials.length ===
          1
          ? "video-testimonials--single"
          : "",

        visibleTestimonials.length ===
          2
          ? "video-testimonials--pair"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby="video-testimonials-title"
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


            <h2 id="video-testimonials-title">
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
            TWO VIDEO CARDS
            ================================================================== */}

        <div className="video-testimonials__grid">

          {visibleTestimonials.map(
            (
              testimonial,
              index,
            ) => {
              const youtubePreviewUrl =
                getYouTubeEmbedUrl(
                  testimonial.video,
                  {
                    preview:
                      true,

                    start:
                      testimonial.previewStart,
                  },
                );


              return (
                <article
                  key={
                    testimonial.id ||
                    `${testimonial.name}-${index}`
                  }
                  className="video-testimonials__card"
                  data-reveal={
                    index === 0
                      ? "left"
                      : "right"
                  }
                >

                  <button
                    type="button"
                    className="video-testimonials__card-button"
                    onClick={() =>
                      openVideo(
                        index,
                      )
                    }
                    aria-label={`Play testimonial from ${testimonial.name}`}
                  >

                    {/* ======================================================
                        VIDEO AREA
                        ====================================================== */}

                    <div className="video-testimonials__media">


                      {/* ----------------------------------------------------
                          YOUTUBE
                          ---------------------------------------------------- */}

                      {youtubePreviewUrl ? (

                        <iframe
                          className="video-testimonials__youtube"
                          src={
                            youtubePreviewUrl
                          }
                          title={`Muted preview of ${testimonial.name}'s testimonial`}
                          loading="lazy"
                          tabIndex={-1}
                          aria-hidden="true"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />

                      ) : (

                        /* --------------------------------------------------
                           DIRECT VIDEO
                           -------------------------------------------------- */

                        <video
                          ref={
                            (
                              element,
                            ) => {
                              previewRefs.current[
                                index
                              ] =
                                element;
                            }
                          }
                          className="video-testimonials__video"
                          src={
                            testimonial.video
                          }
                          poster={
                            testimonial.poster
                          }
                          muted
                          playsInline
                          preload="metadata"
                          disablePictureInPicture
                          onLoadedMetadata={
                            (
                              event,
                            ) => {
                              try {
                                event.currentTarget.currentTime =
                                  testimonial.previewStart ??
                                  0;
                              } catch {
                                /*
                                 * Ignore.
                                 */
                              }
                            }
                          }
                          onTimeUpdate={
                            (
                              event,
                            ) =>
                              handlePreviewTimeUpdate(
                                event,
                                testimonial,
                              )
                          }
                        />

                      )}


                      {/* ====================================================
                          OVERLAYS
                          ==================================================== */}

                      <span
                        className="video-testimonials__media-shade"
                        aria-hidden="true"
                      />


                      <span
                        className="video-testimonials__media-glow"
                        aria-hidden="true"
                      />


                      {/* ====================================================
                          PLAY BUTTON
                          ==================================================== */}

                      <CardPlayButton />

                    </div>


                    {/* ======================================================
                        PERSON INFORMATION
                        ====================================================== */}

                    <div className="video-testimonials__card-footer">

                      <div>

                        <h3>
                          {testimonial.name}
                        </h3>


                        <p>
                          {testimonial.role}


                          {testimonial.company ? (
                            <>
                              {" "}

                              <span>
                                at
                              </span>

                              {" "}

                              {testimonial.company}
                            </>
                          ) : null}
                        </p>

                      </div>


                      <span className="video-testimonials__card-arrow">
                        ↗
                      </span>

                    </div>

                  </button>

                </article>
              );
            },
          )}

        </div>

      </div>


      {/* ====================================================================
          MODAL
          ==================================================================== */}

      {selectedVideo !==
        null &&
      selectedTestimonial ? (

        <div
          className="video-testimonials-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial from ${selectedTestimonial.name}`}
          onMouseDown={
            (
              event,
            ) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closeVideo();
              }
            }
          }
        >

          <div className="video-testimonials-modal__dialog">


            {/* ==============================================================
                MODAL TOP
                ============================================================== */}

            <div className="video-testimonials-modal__top">

              <div className="video-testimonials-modal__person">

                <span>
                  Client Story
                </span>


                <strong>
                  {selectedTestimonial.name}
                </strong>

              </div>


              <button
                ref={
                  closeButtonRef
                }
                type="button"
                className="video-testimonials-modal__close"
                onClick={
                  closeVideo
                }
                aria-label="Close testimonial video"
              >
                <X
                  size={18}
                  strokeWidth={1.8}
                />
              </button>

            </div>


            {/* ==============================================================
                MODAL VIDEO
                ============================================================== */}

            <div className="video-testimonials-modal__media">


              {/* ------------------------------------------------------------
                  YOUTUBE
                  ------------------------------------------------------------ */}

              {selectedYouTubeEmbedUrl ? (

                <iframe
                  key={`modal-youtube-${selectedTestimonial.id || selectedVideo}`}
                  className="video-testimonials-modal__youtube"
                  src={
                    selectedYouTubeEmbedUrl
                  }
                  title={`Full testimonial from ${selectedTestimonial.name}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />

              ) : (

                /* ----------------------------------------------------------
                   DIRECT VIDEO
                   ---------------------------------------------------------- */

                <>
                  <video
                    key={`modal-video-${selectedTestimonial.id || selectedVideo}`}
                    ref={
                      modalVideoRef
                    }
                    className="video-testimonials-modal__video"
                    src={
                      selectedTestimonial.video
                    }
                    poster={
                      selectedTestimonial.poster
                    }
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    onLoadedMetadata={
                      (
                        event,
                      ) => {
                        try {
                          /*
                           * Always begin from zero when opened.
                           */

                          event.currentTarget.currentTime =
                            0;
                        } catch {
                          /*
                           * Metadata can briefly be unavailable.
                           */
                        }
                      }
                    }
                    onPlay={() =>
                      setModalPlaying(
                        true,
                      )
                    }
                    onPause={() =>
                      setModalPlaying(
                        false,
                      )
                    }
                    onEnded={() =>
                      setModalPlaying(
                        false,
                      )
                    }
                  />


                  <button
                    type="button"
                    className={[
                      "video-testimonials-modal__center-control",

                      modalPlaying
                        ? "is-playing"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={
                      toggleModalPlayback
                    }
                    aria-label={
                      modalPlaying
                        ? "Pause testimonial"
                        : "Play testimonial"
                    }
                  >

                    {modalPlaying ? (
                      <Pause
                        size={22}
                        strokeWidth={1.7}
                      />
                    ) : (
                      <Play
                        size={22}
                        strokeWidth={1.7}
                        fill="currentColor"
                      />
                    )}

                  </button>
                </>

              )}

            </div>


            {/* ==============================================================
                MODAL FOOTER
                ============================================================== */}

            <div className="video-testimonials-modal__footer">

              <div>

                <strong>
                  {selectedTestimonial.name}
                </strong>


                <span>
                  {selectedTestimonial.role}

                  {selectedTestimonial.company
                    ? ` · ${selectedTestimonial.company}`
                    : ""}
                </span>

              </div>


              <button
                type="button"
                onClick={
                  closeVideo
                }
              >
                Close Story
              </button>

            </div>

          </div>

        </div>

      ) : null}

    </section>
  );
}
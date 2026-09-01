"use client";

import "./VideoTestimonials.css";

import {
  useCallback,
  useEffect,
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

   You can remove this later and always pass testimonials as a prop.

   Recommended video format:
   - MP4 / H.264
   - optimized for web
   - poster JPG/WebP
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

  {
    id:
      "sarah-khan",

    name:
      "Sarah Khan",

    role:
      "Marketing Manager",

    company:
      "GFO",

    video:
      "https://www.youtube.com/shorts/txWzWgjN7pE",

    poster:
      "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1200",

    previewStart:
      4,

    previewDuration:
      4.5,
  },
];


/* ===========================================================================
   MEDIA URLS

   Native video elements play direct media files (for example, public S3,
   CloudFront, or CDN MP4/WebM URLs). YouTube links need an embed player.
   =========================================================================== */

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

    if (
      hostname ===
      "youtu.be"
    ) {
      videoId =
        url.pathname
          .split("/")
          .filter(Boolean)[0];
    } else if (
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
      } else if (
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


function getYouTubeEmbedUrl(
  videoUrl,
  {
    preview =
      false,

    start =
      0,
  } =
    {},
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
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
    });

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
          Number(start) ||
          0,
        ),
      ),
    );
  } else {
    parameters.set(
      "autoplay",
      "1",
    );
    parameters.set(
      "controls",
      "1",
    );
    parameters.set(
      "start",
      "0",
    );
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${parameters.toString()}`;
}


/* ==========================================================================
   PLAY ICON
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
   COMPONENT
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
     RESET PREVIEW VIDEO
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
          // Metadata may not yet be loaded.
        }

      },
      [],
    );


  /* ==========================================================================
     PLAY VIDEO EXCERPTS

     - muted
     - short preview only
     - every card plays while the section is visible
     ========================================================================== */

  useEffect(() => {

    if (
      selectedVideo !== null
    ) {
      previewRefs.current.forEach(
        (
          video,
          index,
        ) => {

          resetPreview(
            video,
            testimonials[
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


    const startPreview =
      () => {

        previewRefs.current.forEach(
          (
            video,
            index,
          ) => {

            const testimonial =
              testimonials[
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
              // Ignore until metadata is available.
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


    const stopPreview =
      () => {

        previewRefs.current.forEach(
          (
            video,
            index,
          ) => {

            resetPreview(
              video,
              testimonials[
                index
              ],
            );

          },
        );

      };


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

  }, [
    resetPreview,
    selectedVideo,
    testimonials,
  ]);


  /* ==========================================================================
     PREVIEW LOOP

     Each testimonial can have its own previewStart and previewDuration.
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
      start + duration
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
     OPEN MODAL
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
     CLOSE MODAL
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
            // Ignore.
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

     Because opening is caused by a genuine user click, playback can begin
     with audio enabled.

     When closed:
     - video resets
     - audio state resets
     - next opening begins from zero again
     ========================================================================== */

  useEffect(() => {

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
        // Metadata may still be loading.
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
               * Some browsers can still reject programmatic playback.
               * Native controls remain available so the user can play.
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

  }, [
    closeVideo,
    selectedVideo,
  ]);


  /* ==========================================================================
     MODAL PLAY / PAUSE
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

    } else {

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
    !Array.isArray(
      testimonials,
    ) ||
    testimonials.length ===
      0
  ) {
    return null;
  }


  const selectedTestimonial =
    selectedVideo ===
    null
      ? null
      : testimonials[
          selectedVideo
        ];

  const selectedYouTubeEmbedUrl =
    getYouTubeEmbedUrl(
      selectedTestimonial?.video,
      {
        start:
          selectedTestimonial?.previewStart,
      },
    );


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <section
      ref={sectionRef}
      className={[
        "video-testimonials",

        testimonials.length === 1
          ? "video-testimonials--single"
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

          <div className="video-testimonials__heading" data-reveal="left">

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
            CARDS
            ================================================================== */}

        <div className="video-testimonials__grid">

          {testimonials.map(
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
                  className={[
                    "video-testimonials__card",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >

                  <button
                    type="button"
                    className="video-testimonials__card-button"
                    onClick={() => {
                      openVideo(
                        index,
                      );
                    }}
                    aria-label={`Play testimonial from ${testimonial.name}`}
                  >

                    {/* ======================================================
                        VIDEO
                        ====================================================== */}

                    <div className="video-testimonials__media">

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
                        <video
                          ref={(element) => {
                            previewRefs.current[
                              index
                            ] =
                              element;
                          }}
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
                                // Ignore.
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
                          CINEMATIC OVERLAYS
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
                          PLAY
                          ==================================================== */}

                      <CardPlayButton />

                    </div>


                    {/* ======================================================
                        INFORMATION
                        ====================================================== */}

                    <div className="video-testimonials__card-footer">

                      <div>

                        <h3>
                          {testimonial.name}
                        </h3>


                        <p>
                          {testimonial.role}

                          {testimonial.company
                            ? (
                              <>
                                {" "}
                                <span>
                                  at
                                </span>
                                {" "}
                                {
                                  testimonial.company
                                }
                              </>
                            )
                            : null}
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
          VIDEO MODAL
          ==================================================================== */}

      {selectedVideo !==
        null && (

        <div
          className="video-testimonials-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial from ${testimonials[selectedVideo]?.name}`}
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
                TOP BAR
                ============================================================== */}

            <div className="video-testimonials-modal__top">

              <div className="video-testimonials-modal__person">

                <span>
                  Client Story
                </span>


                <strong>
                  {
                    testimonials[
                      selectedVideo
                    ]?.name
                  }
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
                VIDEO
                ============================================================== */}

            <div className="video-testimonials-modal__media">

              {selectedYouTubeEmbedUrl ? (
                <iframe
                  key={`modal-youtube-${selectedTestimonial?.id || selectedVideo}`}
                  className="video-testimonials-modal__youtube"
                  src={
                    selectedYouTubeEmbedUrl
                  }
                  title={`Full testimonial from ${selectedTestimonial?.name}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <>
                  <video
                    key={`modal-video-${selectedTestimonial?.id || selectedVideo}`}
                    ref={
                      modalVideoRef
                    }
                    className="video-testimonials-modal__video"
                    src={
                      selectedTestimonial?.video
                    }
                    poster={
                      selectedTestimonial?.poster
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
                          event.currentTarget.currentTime =
                            0;
                        } catch {
                          // Metadata can be unavailable briefly on slow networks.
                        }

                      }
                    }
                    onPlay={() => {
                      setModalPlaying(
                        true,
                      );
                    }}
                    onPause={() => {
                      setModalPlaying(
                        false,
                      );
                    }}
                    onEnded={() => {
                      setModalPlaying(
                        false,
                      );
                    }}
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
                FOOTER
                ============================================================== */}

            <div className="video-testimonials-modal__footer">

              <div>

                <strong>
                  {
                    testimonials[
                      selectedVideo
                    ]?.name
                  }
                </strong>


                <span>
                  {
                    testimonials[
                      selectedVideo
                    ]?.role
                  }

                  {
                    testimonials[
                      selectedVideo
                    ]?.company
                      ? ` · ${
                          testimonials[
                            selectedVideo
                          ].company
                        }`
                      : ""
                  }
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

      )}

    </section>
  );
}

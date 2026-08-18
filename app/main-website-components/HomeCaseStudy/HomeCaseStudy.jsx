"use client";

import "./HomeCaseStudy.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";


/* ==========================================================================
   VIDEO
   ========================================================================== */

const VIDEO_URL =
  "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/testimonial-moosa-khan.mp4";


/* ==========================================================================
   COMPONENT
   ========================================================================== */

export default function HomeCaseStudy() {
  const sectionRef =
    useRef(null);

  const videoRef =
    useRef(null);


  const [
    muted,
    setMuted,
  ] =
    useState(true);


  const [
    volume,
    setVolume,
  ] =
    useState(0.75);


  /* ==========================================================================
     AUTO PLAY / PAUSE WITH VIEWPORT
     ========================================================================== */

  useEffect(() => {
    const section =
      sectionRef.current;

    const video =
      videoRef.current;


    if (
      !section ||
      !video
    ) {
      return;
    }


    video.volume =
      volume;


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            video
              .play()
              .catch(() => {});

            return;
          }


          video.pause();
        },
        {
          threshold:
            0.35,
        },
      );


    observer.observe(
      section,
    );


    return () => {
      observer.disconnect();
    };
  }, []);


  /* ==========================================================================
     MUTE / UNMUTE
     ========================================================================== */

  const toggleMute =
    () => {
      const video =
        videoRef.current;


      if (!video) {
        return;
      }


      /*
       * If volume was previously dragged to zero,
       * restore a useful default volume.
       */

      if (
        video.muted &&
        volume === 0
      ) {
        const restoredVolume =
          0.65;


        video.volume =
          restoredVolume;

        video.muted =
          false;


        setVolume(
          restoredVolume,
        );

        setMuted(
          false,
        );
      } else {
        const nextMuted =
          !video.muted;


        video.muted =
          nextMuted;


        setMuted(
          nextMuted,
        );
      }


      /*
       * Sound interaction is a user action,
       * so resume video if required.
       */

      if (video.paused) {
        video
          .play()
          .catch(() => {});
      }
    };


  /* ==========================================================================
     VOLUME SLIDER
     ========================================================================== */

  const handleVolumeChange =
    (event) => {
      const video =
        videoRef.current;


      if (!video) {
        return;
      }


      const nextVolume =
        Number(
          event.target.value,
        );


      video.volume =
        nextVolume;


      setVolume(
        nextVolume,
      );


      if (
        nextVolume === 0
      ) {
        video.muted =
          true;

        setMuted(
          true,
        );
      } else {
        video.muted =
          false;

        setMuted(
          false,
        );
      }


      if (video.paused) {
        video
          .play()
          .catch(() => {});
      }
    };


  /* ==========================================================================
     SYNC NATIVE VIDEO VOLUME
     ========================================================================== */

  const handleNativeVolumeChange =
    () => {
      const video =
        videoRef.current;


      if (!video) {
        return;
      }


      setMuted(
        video.muted ||
        video.volume === 0,
      );


      setVolume(
        video.volume,
      );
    };


  /* ==========================================================================
     RENDER
     ========================================================================== */

  return (
    <section
      ref={sectionRef}
      className="tek-home-case"
      id="client-story"
    >
      <div className="tek-home-shell">

        <div
          className="tek-home-case__frame"
          data-reveal="up"
        >

          {/* ================================================================
              VIDEO
              ================================================================ */}

          <video
            ref={videoRef}
            className="tek-home-case__video"
            src={VIDEO_URL}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onVolumeChange={
              handleNativeVolumeChange
            }
          />


          {/* ================================================================
              VIDEO SHADE
              ================================================================ */}

          <span
            className="tek-home-case__shade"
            aria-hidden="true"
          />


          {/* ================================================================
              CENTERED ODOO CAPTION
              ================================================================ */}

          <div className="tek-home-case__caption">
            <strong>
              See how we helped Odoo to grow 11x faster
            </strong>
          </div>


          {/* ================================================================
              VOLUME CONTROL
              ================================================================ */}

          <div
            className="tek-home-case__volume"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >

            {/* VOLUME SLIDER */}

            <div className="tek-home-case__volume-slider-wrap">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={
                  muted
                    ? 0
                    : volume
                }
                onChange={
                  handleVolumeChange
                }
                className="tek-home-case__volume-slider"
                aria-label="Client story video volume"
              />
            </div>


            {/* MUTE / UNMUTE */}

            <button
              type="button"
              className="tek-home-case__mute"
              aria-label={
                muted
                  ? "Unmute client story video"
                  : "Mute client story video"
              }
              aria-pressed={
                !muted
              }
              onClick={(event) => {
                event.stopPropagation();

                toggleMute();
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon
                  points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                  fill="currentColor"
                  stroke="none"
                />

                {muted ? (
                  <>
                    <line
                      x1="23"
                      y1="9"
                      x2="17"
                      y2="15"
                    />

                    <line
                      x1="17"
                      y1="9"
                      x2="23"
                      y2="15"
                    />
                  </>
                ) : volume < 0.45 ? (
                  <path
                    d="M15.5 9.5a3.5 3.5 0 0 1 0 5"
                  />
                ) : (
                  <>
                    <path
                      d="M15.54 8.46a5 5 0 0 1 0 7.07"
                    />

                    <path
                      d="M18.36 5.64a9 9 0 0 1 0 12.72"
                    />
                  </>
                )}
              </svg>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import "./VideoPreview.css";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://tekcorp-prod.s3.ap-south-1.amazonaws.com/testimonial-moosa-khan.mp4";

export default function VideoPreview() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.75);

  /* ==========================================================================
     PLAY / PAUSE WHEN SECTION ENTERS VIEWPORT
     ========================================================================== */

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    video.volume = volume;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay may be blocked by the browser.
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);


  /* ==========================================================================
     MUTE / UNMUTE
     ========================================================================== */

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    /*
      If the stored volume is zero and the user clicks unmute,
      restore a useful default volume.
    */
    if (video.muted && volume === 0) {
      const restoredVolume = 0.65;

      video.volume = restoredVolume;
      video.muted = false;

      setVolume(restoredVolume);
      setMuted(false);
    } else {
      const nextMuted = !video.muted;

      video.muted = nextMuted;

      setMuted(nextMuted);
    }

    /*
      User interaction allows playback to continue even if
      autoplay had previously been restricted.
    */
    if (video.paused) {
      video.play().catch(() => {});
    }
  };


  /* ==========================================================================
     VOLUME SLIDER
     ========================================================================== */

  const handleVolumeChange = (event) => {
    const video = videoRef.current;

    if (!video) return;

    const nextVolume = Number(event.target.value);

    video.volume = nextVolume;

    setVolume(nextVolume);

    /*
      Volume 0 = muted.
      Anything above 0 = automatically unmute.
    */
    if (nextVolume === 0) {
      video.muted = true;
      setMuted(true);
    } else {
      video.muted = false;
      setMuted(false);
    }

    if (video.paused) {
      video.play().catch(() => {});
    }
  };


  /* ==========================================================================
     VIDEO VOLUME SYNC
     ========================================================================== */

  const handleNativeVolumeChange = () => {
    const video = videoRef.current;

    if (!video) return;

    setMuted(video.muted || video.volume === 0);
    setVolume(video.volume);
  };


  return (
    <section
      ref={sectionRef}
      className="video-section"
    >
      {/* ====================================================================
          SECTION HEADER
          ==================================================================== */}

      <div className="video-header sr">
        <h2 className="video-heading">
          <span className="video-heading-gradient">
            Meet Our Beloved Client
          </span>
        </h2>

        <p className="video-description">
          Hear directly from our client about their experience working with
          TekCorp and the impact of the digital solutions we delivered.
        </p>
      </div>


      {/* ====================================================================
          VIDEO
          ==================================================================== */}

      <div className="video-wrapper">
        <div className="video-inner">
          <video
            ref={videoRef}
            className="video-element"
            src={VIDEO_URL}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onVolumeChange={handleNativeVolumeChange}
          />


          {/* ================================================================
              SOUND CONTROLS
              ================================================================ */}

          <div className="video-volume-control">
            {/* VOLUME SLIDER */}

            <div className="video-volume-slider-wrap">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={muted ? 0 : volume}
                onChange={handleVolumeChange}
                className="video-volume-slider"
                aria-label="Video volume"
              />
            </div>


            {/* MUTE / UNMUTE */}

            <button
              type="button"
              className="video-mute-btn"
              aria-label={muted ? "Unmute video" : "Mute video"}
              aria-pressed={!muted}
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
                  <path d="M15.5 9.5a3.5 3.5 0 0 1 0 5" />
                ) : (
                  <>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />

                    <path d="M18.36 5.64a9 9 0 0 1 0 12.72" />
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
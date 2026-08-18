"use client";

import "./HomeTeam.css";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const DEFAULT_MEMBER_ID = "jenny";
const RESPONSIVE_QUERY = "(max-width: 900px)";
const REDUCED_MOTION_QUERY =
  "(prefers-reduced-motion: reduce)";

const team = [
  {
    id: "maya",
    name: "Maya Anderson",
    role: "Strategy",
    image: "/assets/About-assets/3.png",
    imageScale: 1.04,
    imageX: 0,
    imageY: 4,
  },
  {
    id: "ethan",
    name: "Ethan Miller",
    role: "Engineering",
    image: "/assets/About-assets/2.png",
    imageScale: 1.02,
    imageX: 0,
    imageY: 2,
  },
  {
    id: "jenny",
    name: "Jenny Wilson",
    role: "Co-Founder, CEO",
    image: "/assets/About-assets/1.png",
    imageScale: 1,
    imageX: 0,
    imageY: 0,
  },
  {
    id: "daniel",
    name: "Daniel Evans",
    role: "Product",
    image: "/assets/About-assets/4.png",
    imageScale: 1.03,
    imageX: 0,
    imageY: 3,
  },
  {
    id: "sophie",
    name: "Sophie Clark",
    role: "Design",
    image: "/assets/About-assets/5.png",
    imageScale: 1.02,
    imageX: 0,
    imageY: 2,
  },
];

export default function HomeTeam() {
  const [selectedMemberId, setSelectedMemberId] =
    useState(DEFAULT_MEMBER_ID);

  const [previewMemberId, setPreviewMemberId] =
    useState(null);

  const stageWrapRef = useRef(null);

  const memberRefs = useRef(new Map());

  const initialCenterRef = useRef(true);

  const featuredMemberId =
    previewMemberId ?? selectedMemberId;

  /*
   * Store actual member elements instead of searching
   * the DOM with querySelector.
   */
  const registerMember = useCallback(
    (memberId, element) => {
      if (element) {
        memberRefs.current.set(memberId, element);
        return;
      }

      memberRefs.current.delete(memberId);
    },
    []
  );

  /*
   * Keep the selected member centered on tablet/mobile.
   *
   * Desktop layout remains completely untouched.
   */
  const centerMember = useCallback(
    (memberId, requestedBehavior = "smooth") => {
      if (typeof window === "undefined") return;

      const isResponsive =
        window.matchMedia(RESPONSIVE_QUERY).matches;

      if (!isResponsive) return;

      const stageWrap = stageWrapRef.current;

      const member =
        memberRefs.current.get(memberId);

      if (!stageWrap || !member) return;

      const prefersReducedMotion =
        window.matchMedia(
          REDUCED_MOTION_QUERY
        ).matches;

      const targetLeft =
        member.offsetLeft +
        member.offsetWidth / 2 -
        stageWrap.clientWidth / 2;

      const maxScrollLeft = Math.max(
        0,
        stageWrap.scrollWidth -
          stageWrap.clientWidth
      );

      const safeTargetLeft = Math.min(
        maxScrollLeft,
        Math.max(0, targetLeft)
      );

      stageWrap.scrollTo({
        left: safeTargetLeft,
        behavior: prefersReducedMotion
          ? "auto"
          : requestedBehavior,
      });
    },
    []
  );

  /*
   * Selection is the persistent state.
   * Hover/focus is only temporary preview state.
   */
  const selectMember = useCallback((memberId) => {
    setSelectedMemberId(memberId);
    setPreviewMemberId(null);
  }, []);

  /*
   * Center selected member.
   *
   * Initial render uses "auto" so the page doesn't visibly
   * slide to Jenny when it first loads.
   */
  useEffect(() => {
    const behavior =
      initialCenterRef.current
        ? "auto"
        : "smooth";

    centerMember(
      selectedMemberId,
      behavior
    );

    initialCenterRef.current = false;
  }, [
    selectedMemberId,
    centerMember,
  ]);

  /*
   * Re-center after:
   * - orientation changes
   * - responsive breakpoint changes
   * - browser resizing
   * - container resizing
   */
  useEffect(() => {
    const stageWrap = stageWrapRef.current;

    if (
      !stageWrap ||
      typeof ResizeObserver === "undefined"
    ) {
      return;
    }

    const observer = new ResizeObserver(() => {
      centerMember(
        selectedMemberId,
        "auto"
      );
    });

    observer.observe(stageWrap);

    return () => {
      observer.disconnect();
    };
  }, [
    selectedMemberId,
    centerMember,
  ]);

  /*
   * Desktop-style keyboard navigation.
   *
   * ArrowLeft / ArrowRight
   * Home / End
   */
  const handleMemberKeyDown = useCallback(
    (event, currentIndex) => {
      let nextIndex = currentIndex;

      switch (event.key) {
        case "ArrowLeft":
          nextIndex = Math.max(
            0,
            currentIndex - 1
          );
          break;

        case "ArrowRight":
          nextIndex = Math.min(
            team.length - 1,
            currentIndex + 1
          );
          break;

        case "Home":
          nextIndex = 0;
          break;

        case "End":
          nextIndex =
            team.length - 1;
          break;

        default:
          return;
      }

      event.preventDefault();

      const nextMember =
        team[nextIndex];

      if (!nextMember) return;

      selectMember(nextMember.id);

      requestAnimationFrame(() => {
        const memberElement =
          memberRefs.current.get(
            nextMember.id
          );

        memberElement
          ?.querySelector("button")
          ?.focus();
      });
    },
    [selectMember]
  );

  return (
    <section
      className="tek-home-team"
      id="team"
      aria-labelledby="tek-home-team-title"
    >
      <div className="tek-home-shell">
        <header
          className="tek-home-team__header"
          data-reveal="up"
        >
          <h2 id="tek-home-team-title">
            Meet our team
          </h2>

          <p>
            Meet the people behind TekCorp —
            combining strategy, technology,
            product thinking and design to build
            digital experiences that create real
            business impact.
          </p>
        </header>
      </div>

      <div
        ref={stageWrapRef}
        className="tek-home-team__stage-wrap"
      >
        <div
          className="tek-home-team__stage"
          role="list"
          aria-label="TekCorp team members"
        >
          {team.map(
            (member, index) => {
              const isFeatured =
                featuredMemberId ===
                member.id;

              const isSelected =
                selectedMemberId ===
                member.id;

              return (
                <article
                  key={member.id}
                  ref={(element) =>
                    registerMember(
                      member.id,
                      element
                    )
                  }
                  role="listitem"
                  className={[
                    "tek-home-team-member",
                    isFeatured
                      ? "tek-home-team-member--featured"
                      : "",
                    isSelected
                      ? "tek-home-team-member--selected"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    "--tek-team-delay": `${
                      index * 70
                    }ms`,
                    "--person-scale":
                      member.imageScale,
                    "--person-x": `${member.imageX}px`,
                    "--person-y": `${member.imageY}px`,
                  }}
                  onPointerEnter={(event) => {
                    /*
                     * Only preview on a real mouse.
                     * Touch users shouldn't inherit
                     * sticky hover states.
                     */
                    if (
                      event.pointerType ===
                      "mouse"
                    ) {
                      setPreviewMemberId(
                        member.id
                      );
                    }
                  }}
                  onPointerLeave={(event) => {
                    if (
                      event.pointerType ===
                      "mouse"
                    ) {
                      setPreviewMemberId(
                        null
                      );
                    }
                  }}
                >
                  <div
                    className="tek-home-team-member__label"
                    aria-hidden={
                      !isFeatured
                    }
                  >
                    <strong>
                      {member.name}
                    </strong>

                    <span>
                      {member.role}
                    </span>
                  </div>

                  <button
                    className="tek-home-team-member__visual"
                    type="button"
                    aria-label={`View ${member.name}, ${member.role}`}
                    aria-pressed={
                      isSelected
                    }
                    onClick={() =>
                      selectMember(
                        member.id
                      )
                    }
                    onFocus={() =>
                      setPreviewMemberId(
                        member.id
                      )
                    }
                    onBlur={() =>
                      setPreviewMemberId(
                        null
                      )
                    }
                    onKeyDown={(event) =>
                      handleMemberKeyDown(
                        event,
                        index
                      )
                    }
                  >
                    <span
                      className="tek-home-team-member__circle"
                      aria-hidden="true"
                    >
                      <span className="tek-home-team-member__circle-light" />

                      <span className="tek-home-team-member__circle-ring" />
                    </span>

                    <img
                      className="tek-home-team-member__person"
                      src={member.image}
                      alt=""
                      width="350"
                      height="350"
                      loading={
                        member.id ===
                        DEFAULT_MEMBER_ID
                          ? "eager"
                          : "lazy"
                      }
                      decoding="async"
                      fetchPriority={
                        member.id ===
                        DEFAULT_MEMBER_ID
                          ? "high"
                          : "auto"
                      }
                      draggable="false"
                    />

                    <span
                      className="tek-home-team-member__shine"
                      aria-hidden="true"
                    />
                  </button>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
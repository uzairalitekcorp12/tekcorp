"use client";

import "./ContentRouteState.css";

import Link from "next/link";
import Button from "@/app/_shared/Button/Button";

import {
  ArrowLeft,
  RefreshCw,
} from "lucide-react";


export default function ContentRouteState({
  eyebrow = "TekCorp",
  title,
  description,
  backHref = "/home",
  backLabel = "Back to Home",
  reset,
}) {
  return (
    <section className="tek-content-state">
      <div className="tek-content-state__inner">
        <p>
          {eyebrow}
        </p>

        <h1>
          {title}
        </h1>

        <span>
          {description}
        </span>

        <div className="tek-content-state__actions">
          {typeof reset === "function" ? (
            <Button
              type="button"
              appearance="primary"
              onClick={reset}
            >
              <RefreshCw
                size={15}
                strokeWidth={1.8}
              />

              <span>
                Try again
              </span>
            </Button>
          ) : null}

          <Button href={backHref} appearance="secondary">
            <ArrowLeft
              size={15}
              strokeWidth={1.8}
            />

            <span>
              {backLabel}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Check,
  ChevronDown,
  LoaderCircle,
  Search,
} from "lucide-react";

import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import "./ContentFilter.css";


function textValue(value) {
  return typeof value === "string"
    ? value.trim()
    : "";
}


function uniqueOptions(values) {
  const seen = new Set();

  return values.filter((value) => {
    const normalized =
      textValue(value);

    if (!normalized) {
      return false;
    }

    const key =
      normalized.toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}


export default function ContentFilter({
  label = "Filter content",
  options = [],
  value = "All",
  allValue = "All",
  allOptionLabel = "All content",
  onChange,
  isPending = false,
}) {
  const [open, setOpen] =
    useState(false);
  const pickerRef =
    useRef(null);
  const id =
    useId();

  const safeOptions =
    uniqueOptions(
      Array.isArray(options)
        ? options
        : [],
    );

  const selectedOption =
    safeOptions.find(
      (option) =>
        option.toLowerCase() ===
        textValue(value).toLowerCase(),
    ) || allValue;

  const selectedLabel =
    selectedOption.toLowerCase() ===
    allValue.toLowerCase()
      ? allOptionLabel
      : selectedOption;

  useEffect(() => {
    function closeOnOutsidePointer(event) {
      if (
        !pickerRef.current?.contains(
          event.target,
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "pointerdown",
      closeOnOutsidePointer,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        closeOnOutsidePointer,
      );
    };
  }, []);

  function chooseOption(nextOption) {
    setOpen(false);

    if (
      nextOption.toLowerCase() ===
      selectedOption.toLowerCase()
    ) {
      return;
    }

    onChange?.(nextOption);
  }

  return (
    <div
      className="content-filter"
      ref={pickerRef}
    >
      <span
        className="tek-sr-only"
        id={`${id}-label`}
      >
        {label}
      </span>

      <button
        type="button"
        className="content-filter__trigger"
        aria-labelledby={`${id}-label ${id}-value`}
        aria-controls={`${id}-options`}
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={isPending}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
          }
        }}
      >
        <Search
          size={18}
          strokeWidth={1.7}
          aria-hidden="true"
        />

        <span className="content-filter__value">
          <small>{label}</small>
          <strong id={`${id}-value`}>
            {selectedLabel}
          </strong>
        </span>

        {isPending ? (
          <LoaderCircle
            className="content-filter__loading"
            size={17}
            aria-label="Updating results"
          />
        ) : (
          <ChevronDown
            className="content-filter__chevron"
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        )}
      </button>

      {open ? (
        <div
          className="content-filter__menu"
          id={`${id}-options`}
          role="listbox"
          aria-label={label}
        >
          <div className="content-filter__menu-heading">
            <span>Choose an option</span>
            <small>{safeOptions.length} available</small>
          </div>

          <div className="content-filter__options">
            {safeOptions.map((option) => {
              const active =
                option.toLowerCase() ===
                selectedOption.toLowerCase();

              return (
                <button
                  type="button"
                  className={active ? "is-active" : ""}
                  key={option}
                  role="option"
                  aria-selected={active}
                  onClick={() => chooseOption(option)}
                >
                  <span>
                    {option.toLowerCase() ===
                    allValue.toLowerCase()
                      ? allOptionLabel
                      : option}
                  </span>

                  {active ? (
                    <Check
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

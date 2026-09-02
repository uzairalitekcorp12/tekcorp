import "./ContentRouteLoading.css";


export default function ContentRouteLoading({
  label = "Loading Tekcorp content",
}) {
  return (
    <div
      className="tek-content-loading"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span
        className="tek-content-loading__mark"
        aria-hidden="true"
      />

      <span>
        {label}
      </span>
    </div>
  );
}

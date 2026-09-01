import "./CapabilityMedia.css";

import Image from "next/image";

export default function CapabilityMedia({
  src,
  alt = "",
  className = "",
  label = "",
  children,
  position = "center",
  priority = false,
  sizes = "(max-width: 900px) calc(100vw - 30px), 50vw",
  ...rest
}) {
  const style = {
    "--cap-media-position": position,
  };

  return (
    <div
      className={["cap-media", className].filter(Boolean).join(" ")}
      style={style}
      role={!src && alt ? "img" : undefined}
      aria-label={!src ? alt || undefined : undefined}
      {...rest}
    >
      {src ? (
        <Image
          className="cap-media__image"
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
        />
      ) : null}
      <span className="cap-media__shade" aria-hidden="true" />
      {label ? <span className="cap-media__label">{label}</span> : null}
      {children}
    </div>
  );
}

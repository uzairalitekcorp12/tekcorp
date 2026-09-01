import Action from "@/app/_shared/Action/Action";
import ArrowUpRightIcon from "@/app/_shared/Icons/ArrowUpRightIcon";
import "./Button.css";

const APPEARANCE_CLASSES = {
  primary: "site-button site-button--primary",
  secondary: "site-button site-button--secondary",
  text: "site-button site-button--text",
  danger: "site-button site-button--danger",
  box: "site-button site-button--box",
  outlineAction: "site-button site-button--outline-action",
  inherit: "",
};

const SIZE_CLASSES = {
  small: "site-button--small",
  medium: "site-button--medium",
  large: "site-button--large",
};

export default function Button({
  children,
  className = "",
  appearance = "primary",
  size = "medium",
  fullWidth = false,
  icon,
  iconPosition = "end",
  iconWrapperClassName,
  ...props
}) {
  const appearanceClass = APPEARANCE_CLASSES[appearance] ?? APPEARANCE_CLASSES.primary;
  const sizeClass =
    appearance === "inherit"
      ? ""
      : SIZE_CLASSES[size] ?? SIZE_CLASSES.medium;
  const classes = [
    appearanceClass,
    sizeClass,
    fullWidth ? "site-button--full" : "",
    className,
  ].filter(Boolean).join(" ");
  const resolvedIcon = icon === true ? <ArrowUpRightIcon /> : icon;
  const iconNode = resolvedIcon ? (
    iconWrapperClassName ? (
      <span className={`site-button__icon ${iconWrapperClassName}`}>{resolvedIcon}</span>
    ) : <span className="site-button__icon">{resolvedIcon}</span>
  ) : null;

  return (
    <Action className={classes || undefined} {...props}>
      {iconPosition === "start" ? iconNode : null}
      {children}
      {iconPosition === "end" ? iconNode : null}
    </Action>
  );
}

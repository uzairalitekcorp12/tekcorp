export default function SectionHeading({
  as: Component = "header",
  className,
  kicker,
  kickerClassName,
  title,
  titleAs: Title = "h2",
  titleId,
  description,
  descriptionClassName,
  reveal,
  children,
  ...props
}) {
  return (
    <Component className={className} data-reveal={reveal} {...props}>
      {kicker ? <span className={kickerClassName}>{kicker}</span> : null}
      <Title id={titleId}>{title}</Title>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      {children}
    </Component>
  );
}

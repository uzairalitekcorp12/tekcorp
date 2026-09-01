export default function SplitContent({
  as: Component = "div",
  className,
  copy,
  copyClassName,
  copyReveal = "left",
  media,
  mediaClassName,
  mediaReveal = "right",
  mediaFirst = false,
  ...props
}) {
  const copyNode = (
    <div className={copyClassName} data-reveal={copyReveal || undefined}>
      {copy}
    </div>
  );
  const mediaNode = (
    <div className={mediaClassName} data-reveal={mediaReveal || undefined}>
      {media}
    </div>
  );

  return (
    <Component className={className} {...props}>
      {mediaFirst ? mediaNode : copyNode}
      {mediaFirst ? copyNode : mediaNode}
    </Component>
  );
}

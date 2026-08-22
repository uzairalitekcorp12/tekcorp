# Shared UI components

These components are the preferred building blocks for new website pages.
They are intentionally independent of individual page styles.

## Button

`Button` renders the correct element automatically:

- internal `href`: Next.js `Link`
- external `href`: anchor
- no `href`: native button

```jsx
<Button href="/Contact" icon>
  Get started
</Button>

<Button href="/case-studies" appearance="secondary">
  View all projects
</Button>

<Button href="/contact" appearance="box" icon>
  Start now
</Button>

<Button href="/contact" appearance="outlineAction" icon>
  Learn more
</Button>

<Button type="submit" disabled={pending}>
  Submit
</Button>
```

Use `box` for rectangular primary CTAs and `outlineAction` for the compact
outlined service/case-study action. Sizes are `small`, `medium`, and `large`;
`fullWidth` is available for forms. Reserve `appearance="inherit"` for
composite links such as an entire clickable card.

## SectionHeading

Use for the common kicker, heading, and description pattern.

```jsx
<SectionHeading
  kicker="How we work"
  title="A reliable delivery process"
  titleId="delivery-title"
  description="From discovery through launch."
  reveal="up"
/>
```

## SplitContent

Use for text/media rows. `mediaFirst` changes the DOM order and the copy/media
class props preserve page-specific responsive layouts.

```jsx
<SplitContent
  as="article"
  className="feature-row"
  copyClassName="feature-row__copy"
  mediaClassName="feature-row__media"
  copy={<FeatureCopy />}
  media={<FeatureImage />}
  mediaFirst
/>
```

## ServicePageLayout and ServiceBreadcrumb

Service pages should use `ServicePageLayout` for shared navigation, contact,
and footer composition. Use `showContact={false}` only when the design does not
include the shared contact section. `ServiceBreadcrumb` keeps service hierarchy
and internal navigation consistent.

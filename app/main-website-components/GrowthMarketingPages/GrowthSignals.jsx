import "./GrowthMarketingPages.css";

export default function GrowthSignals({ label, items }) {
  return (
    <ul className="growth-signals" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

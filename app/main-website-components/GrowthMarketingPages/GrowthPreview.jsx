import "./GrowthMarketingPages.css";

const previewBars = ["bar-a", "bar-b", "bar-c", "bar-d", "bar-e"];

export default function GrowthPreview({ eyebrow, footer, items, title, variant }) {
  return (
    <div className={`growth-preview growth-preview--${variant}`} aria-hidden="true">
      <div className="growth-preview__chrome">
        <span />
        <span />
        <span />
        <small>{eyebrow}</small>
      </div>

      <div className="growth-preview__heading">
        <span>Live workspace</span>
        <strong>{title}</strong>
      </div>

      <div className="growth-preview__body">
        {items.map((item, index) => (
          <div className="growth-preview__item" key={item}>
            <span>0{index + 1}</span>
            <strong>{item}</strong>
            <i />
          </div>
        ))}
      </div>

      <div className="growth-preview__chart">
        {previewBars.map((bar) => <i className={bar} key={bar} />)}
      </div>

      <div className="growth-preview__footer">
        <span>{footer}</span>
        <div><i /><i /><i /></div>
      </div>
    </div>
  );
}

import ScrollReveal from './ScrollReveal';
import './PageEnrichment.css';

export default function HighlightList({ title, items }) {
  return (
    <ScrollReveal className="highlight-list-wrap" delay={120}>
      {title && <h2 className="section-heading">{title}</h2>}
      <ul className="highlight-list">
        {items.map((item) => (
          <li key={item}>
            <span className="highlight-dot" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}

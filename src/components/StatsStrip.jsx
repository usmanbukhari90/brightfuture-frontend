import ScrollReveal from './ScrollReveal';
import './PageEnrichment.css';

export default function StatsStrip({ items }) {
  return (
    <ScrollReveal>
      <div className="stats-strip">
        {items.map((item) => (
          <div key={item.label} className="stat-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

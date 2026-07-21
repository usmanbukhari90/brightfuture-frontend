import ScrollReveal from './ScrollReveal';
import './PageEnrichment.css';

export default function FeatureGallery({ title, subtitle, items }) {
  return (
    <ScrollReveal className="feature-gallery-wrap" delay={80}>
      {title && <h2 className="section-heading">{title}</h2>}
      {subtitle && <p className="section-subheading">{subtitle}</p>}
      <div className="feature-gallery">
        {items.map((item) => (
          <article key={item.title} className="feature-gallery-item">
            <div
              className="feature-gallery-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="feature-gallery-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}

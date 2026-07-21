import ScrollReveal from './ScrollReveal';
import './PageEnrichment.css';

export default function SplitSection({ title, text, image, imageLeft = false, quote }) {
  return (
    <ScrollReveal className={`split-section ${imageLeft ? 'split-section--reverse' : ''}`} delay={100}>
      <div className="split-section-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="split-section-content">
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        {quote && <p className="prose-quote">{quote}</p>}
      </div>
    </ScrollReveal>
  );
}

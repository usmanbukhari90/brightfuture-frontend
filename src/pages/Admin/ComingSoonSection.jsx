export default function ComingSoonSection({ title, description, bullets, ctaLabel, onCta }) {
  return (
    <section className="card admin-empty-card">
      <span className="admin-empty-badge">In progress</span>
      <h2 className="card-title">{title}</h2>
      <p className="admin-empty-desc">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="admin-guide">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {ctaLabel && (
        <div className="admin-form-actions">
          <button type="button" className="btn btn-primary" onClick={onCta}>
            {ctaLabel}
          </button>
        </div>
      )}
    </section>
  );
}

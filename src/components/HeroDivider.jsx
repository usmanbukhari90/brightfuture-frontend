export default function HeroDivider({ double = false }) {
  if (double) {
    return (
      <div className="hero-divider-lines" aria-hidden="true">
        <span className="hero-faint-line" />
        <span className="hero-faint-line" />
      </div>
    );
  }

  return <span className="hero-faint-line hero-faint-line--single" aria-hidden="true" />;
}

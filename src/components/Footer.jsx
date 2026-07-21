import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-copy">© 2026 Bright Future School</span>
      <nav className="footer-links">
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <span className="footer-divider">•</span>
        <Link to="/terms-conditions" className="footer-link">Terms &amp; Conditions</Link>
      </nav>
      <span className="footer-credit">
        Website by
        <Link to="/gate" className="gate-link">
          <span className="gate-footer-logo-box">
            <img src="/images/gate_logo.png" alt="Gate Developers" className="gate-footer-logo" />
          </span>
        </Link>
      </span>
    </footer>
  );
}
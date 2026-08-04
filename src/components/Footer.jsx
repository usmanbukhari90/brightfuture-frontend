import { Link } from 'react-router-dom';
import SchoolLogo from './SchoolLogo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">

        <div className="footer-brand-col">
          <div className="footer-logo-wrap">
            <SchoolLogo variant="light" />
          </div>
          <p className="footer-school-name">Bright Future School</p>
          <p className="footer-tagline">
            Education with excellence — nurturing minds with discipline,
            dignity, and a dedication to lifelong learning.
          </p>
        </div>

        <div>
          <p className="footer-col-title">Quick links</p>
          <Link className="footer-link" to="/">Announcements</Link>
          <Link className="footer-link" to="/about">About us</Link>
          <Link className="footer-link" to="/admissions">Admissions</Link>
          <Link className="footer-link" to="/academics">Academics</Link>
          <Link className="footer-link" to="/professional-development">Professional development</Link>
          <Link className="footer-link" to="/results">Student results</Link>
          <Link className="footer-link" to="/toppers">Top performers</Link>
        </div>

        <div>
          <p className="footer-col-title">Support</p>
          <Link className="footer-link" to="/contact">Contact us</Link>
          <Link className="footer-link" to="/about">About us</Link>
          <Link className="footer-link" to="/privacy-policy">Privacy policy</Link>
<Link className="footer-link" to="/terms-conditions">Terms and conditions</Link>
        </div>

        <div>
          <p className="footer-col-title">Contact</p>
          <div className="footer-contact-row">
            <i className="ti ti-map-pin footer-contact-icon" aria-hidden="true" />
            <span className="footer-contact-text">
              Muslim Town, Manka Canal Road<br />
              near Lodhi Graveyard, D.G. Khan
            </span>
          </div>
          <div className="footer-contact-row">
            <i className="ti ti-phone footer-contact-icon" aria-hidden="true" />
            <span className="footer-contact-text">0333-7253940</span>
          </div>
          <div className="footer-contact-row">
            <i className="ti ti-phone footer-contact-icon" aria-hidden="true" />
            <span className="footer-contact-text">0313-7254087</span>
          </div>
          <div className="footer-contact-row">
            <i className="ti ti-mail footer-contact-icon" aria-hidden="true" />
            <span className="footer-contact-text">info@brightfutureschool.edu.pk</span>
          </div>
          <div className="footer-contact-row">
            <i className="ti ti-clock footer-contact-icon" aria-hidden="true" />
            <span className="footer-contact-text">Monday – Friday, 8:00 AM – 3:00 PM</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Bright Future School. All rights reserved.</span>
        <span className="footer-dev">Website by <Link to="/gate" className="footer-gate-link">Gate Developers</Link></span>
      </div>
    </footer>
  );
}
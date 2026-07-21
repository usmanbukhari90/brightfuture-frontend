import { useNavigate } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import './GateDevelopers.css';

const services = [
  { icon: 'ti-world', title: 'Web development', desc: 'Responsive websites, portals, dashboards, and e-commerce platforms' },
  { icon: 'ti-device-mobile', title: 'Mobile apps', desc: 'Android and iOS apps built with modern cross-platform frameworks' },
  { icon: 'ti-device-desktop', title: 'Desktop software', desc: 'Custom desktop applications for Windows, macOS, and Linux' },
  { icon: 'ti-server', title: 'Ai Automation', desc: 'Well Trained Ai models for business automations' },
];

export default function GateDevelopers() {
  const navigate = useNavigate();

  return (
    <div className="gate-page">
      <div className="gate-hero">
        <img src="/images/gate_logo.png" alt="Gate Developers" className="gate-logo-circle" />
        <h1 className="gate-brand">Gate Developers</h1>
        <p className="gate-tagline">Your Gateway to Digital Innovation</p>
        <div className="gate-badges">
          <span className="badge">Web Development</span>
          <span className="badge">Mobile Apps</span>
          <span className="badge">Desktop Software</span>
          <span className="badge">UI / UX Design</span>
          <span className="badge">Ai Automation</span>
        </div>
      </div>

      <div className="gate-section">
        <p className="section-label">About Gate</p>
        <h2 className="section-title">A full-spectrum development platform</h2>
        <p className="section-body">
          Gate Developers is a software development platform based in Pakistan, offering
          end-to-end digital solutions for businesses, schools, and organizations. From
          responsive websites and e-commerce platforms to cross platform mobile apps and
          powerful desktop software with AI Automation. Gate builds it all with precision,
          performance, and clean design at the core.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <i className={`ti ${s.icon}`} aria-hidden="true" />
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="gate-divider" />

      <div className="gate-section">
        <p className="section-label">Developer</p>
        <h2 className="section-title">Built by</h2>
        <div className="dev-card">
        <img src="/images/usman.jpeg" alt="Syed Muhammad Usman Shah" className="dev-avatar" />
          <div>
            <p className="dev-name">Syed Muhammad Usman Shah</p>
            <p className="dev-role">Software Engineer — NUST, Islamabad, Pakistan</p>
            <p className="dev-desc">
              A software engineer at NUST, Islamabad, building production grade web platforms
              for clients across education, business, and services. With multiple full stack
              projects delivered, from custom admin systems to cloud integrated applications 
              the focus stays on writing clean, scalable code and shipping solutions that
              clients can rely on long after launch. Currently leading development at Gate
              Developers.
            </p>
          </div>
        </div>
      </div>

      <div className="gate-divider" />

      <div className="gate-section">
        <p className="section-label">Connect</p>
        <h2 className="section-title">Get in touch</h2>
        <div className="social-grid">
          <a className="social-link" href="https://www.instagram.com/iusmanbukhari_/?hl=en" target="_blank" rel="noreferrer">
            <div className="social-icon icon-instagram"><FaInstagram /></div>
            <div><p className="social-name">Instagram</p></div>
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/usman-bukhari-17b1443a7" target="_blank" rel="noreferrer">
            <div className="social-icon icon-linkedin"><FaLinkedinIn /></div>
            <div><p className="social-name">LinkedIn</p></div>
          </a>
          <a className="social-link" href="https://github.com/usmanbukhari90" target="_blank" rel="noreferrer">
            <div className="social-icon icon-github"><FaGithub /></div>
            <div><p className="social-name">GitHub</p></div>
          </a>
          <a className="social-link" href="mailto:gatedevelopers.pk@gmail.com">
            <div className="social-icon icon-email"><FaEnvelope /></div>
            <div><p className="social-name">Email</p></div>
          </a>
          <a className="social-link" href="https://www.facebook.com/syed.usman.bukhari.595612?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
            <div className="social-icon icon-facebook"><FaFacebookF /></div>
            <div><p className="social-name">Facebook</p></div>
          </a>
          <a className="social-link" href="https://wa.me/923325161324" target="_blank" rel="noreferrer">
            <div className="social-icon icon-whatsapp"><FaWhatsapp /></div>
            <div><p className="social-name">WhatsApp</p></div>
          </a>
          <a className="social-link" href="https://x.com/iusmanbukhari_" target="_blank" rel="noreferrer">
            <div className="social-icon icon-twitter"><FaXTwitter /></div>
            <div><p className="social-name">Twitter / X</p></div>
          </a>
        </div>
      </div>

      <div className="gate-section" style={{ paddingTop: '2rem' }}>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <i className="ti ti-arrow-left" aria-hidden="true" /> Back to website
        </button>
      </div>
    </div>
  );
}
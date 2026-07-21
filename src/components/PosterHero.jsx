import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MainNavLinks from './MainNavLinks';
import HeroDivider from './HeroDivider';
import SchoolLogo from './SchoolLogo';
import './PosterHero.css';

export default function PosterHero({
  title,
  quote,
  image,
  kicker,
  showPageContent = true,
  variant = 'default',
  imagePosition,
}) {
  const { user, logout, isAdmin } = useAuth();

  const posterClass = [
    'hero-poster',
    'fade-up',
    variant === 'building' ? 'hero-poster--building' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    backgroundImage: `url(${image})`,
    ...(imagePosition ? { backgroundPosition: imagePosition } : {}),
  };

  return (
    <section className={posterClass} style={style}>

      {/* Desktop floating navbar — hidden on mobile */}
      <nav className="desktop-nav">
        <div className="desktop-nav-left">
          <div className="desktop-nav-logo">
            <SchoolLogo variant="light" />
          </div>
          <span className="desktop-nav-name">Bright Future School</span>
        </div>
        <div className="desktop-nav-links">
          <MainNavLinks />
        </div>
        <div className="desktop-nav-right">
          {user ? (
            <>
              {isAdmin && <Link to="/admin" className="desktop-nav-action">Admin</Link>}
              <button className="desktop-nav-action" onClick={logout}>Sign Out</button>
            </>
          ) : (
            <Link to="/login" className="desktop-nav-action">Sign In</Link>
          )}
        </div>
      </nav>

      {/* Mobile: school name centered below logo — only on home */}
      <div className="hero-top-bar">
        <HeroDivider />
      </div>

      {showPageContent && (title || quote || kicker) && (
        <div className="hero-content">
          {kicker && <span className="hero-kicker">{kicker}</span>}
          {title && <h2 className="hero-title">{title}</h2>}
          {quote && <p className="hero-quote">{quote}</p>}
        </div>
      )}

      {variant === 'building' && !showPageContent && (
        <div className="hero-content hero-content--tagline">
           <h2 className="hero-title">Announcements</h2>
           <p className="hero-quote">
            {'Nurturing minds with discipline,\ndignity, and a dedication\nto excellence.'}
          </p>
        </div>
      )}
    </section>
  );
}
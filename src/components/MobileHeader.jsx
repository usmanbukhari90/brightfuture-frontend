import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SchoolLogo from './SchoolLogo';
import './MobileHeader.css';

export default function MobileHeader({ onMenuToggle, sidebarOpen, transparent }) {
  const { user, logout, isAdmin } = useAuth();

  return (
    <header className={`mobile-header ${transparent ? 'mobile-header--transparent' : 'mobile-header--solid'}`}>
            <Link to="/" className="mobile-header-logo">
        <SchoolLogo variant="dark" />
      </Link>
      <button
        className={`mobile-menu-btn ${sidebarOpen ? 'open' : ''}`}
        onClick={onMenuToggle}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
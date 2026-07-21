import { Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SchoolLogo from './SchoolLogo';
import './Header.css';

export default function Header({ onMenuToggle, sidebarOpen }) {
  const { user, logout, isAdmin } = useAuth();

  return (
    <header className="header">
      <div className="header-brand">
        <div className="logo-shell">
          <SchoolLogo variant="dark" />
        </div>
        <h1 className="school-name">Bright Future School</h1>
      </div>

      <button
        className={`menu-btn ${sidebarOpen ? 'open' : ''}`}
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

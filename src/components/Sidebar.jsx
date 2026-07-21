import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SchoolLogo from './SchoolLogo';
import './Sidebar.css';

const navItems = [
  { to: '/', label: 'Announcements', icon: '◆' },
  { to: '/about', label: 'About Us', icon: '◆' },
  { to: '/admissions', label: 'Admissions', icon: '◆' },
  {
    label: 'Academics',
    to: '/academics',
    icon: '◆',
    children: [
      { to: '/results', label: 'Results' },
      { to: '/fee-status', label: 'Dues & Balance' },
      { to: '/attendance', label: 'Attendance' },
      { to: '/toppers', label: 'Toppers' },
    ],
  },
  { to: '/professional-development', label: 'Professional Development', icon: '◆' },
  { to: '/contact', label: 'Contact Us', icon: '◆' },
];

export default function Sidebar({ open, onClose }) {
  const { user, logout, isAdmin } = useAuth();
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <div
        className={`sidebar-overlay ${open ? 'visible' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-wrap">
            <SchoolLogo variant="sidebar" className="sidebar-logo" />
          </div>
          <h2>Bright Future School</h2>
          <p>Navigate</p>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) =>
            item.children ? (
              <div className="nav-item-group" key={item.label}>
                <span className={`nav-item nav-item-toggle${openDropdown ? ' active' : ''}`}>
                  <NavLink
                    to={item.to}
                    className="nav-item-toggle-label"
                    onClick={onClose}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </NavLink>
                  <button
                    type="button"
                    className="nav-toggle-arrow-btn"
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    aria-label="Toggle Academics submenu"
                  >
                    <span className="nav-toggle-arrow">▾</span>
                  </button>
                </span>
                {openDropdown && (
                  <div className="nav-subitems">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) => `nav-subitem ${isActive ? 'active' : ''}`}
                        onClick={onClose}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="sidebar-auth">
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin" className="sidebar-auth-btn sidebar-auth-btn--admin" onClick={onClose}>
                  Admin Panel
                </Link>
              )}
              <button className="sidebar-auth-btn sidebar-auth-btn--signout" onClick={() => { logout(); onClose(); }}>
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="sidebar-auth-btn sidebar-auth-btn--signin" onClick={onClose}>
              Sign In
            </Link>
          )}
        </div>

        <div className="sidebar-footer">Established with excellence</div>
      </aside>
    </>
  );
}
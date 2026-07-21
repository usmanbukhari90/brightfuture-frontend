import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './MainNavLinks.css';

export const mainNavLinks = [
  { to: '/', label: 'Announcements', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/admissions', label: 'Admissions' },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { to: '/results', label: 'Results' },
      { to: '/fee-status', label: 'Dues & Balance' },
      { to: '/attendance', label: 'Attendance' },
      { to: '/toppers', label: 'Toppers' },
    ],
  },
  { to: '/professional-development', label: 'Professional Development' },
  { to: '/contact', label: 'Contact Us' },
];

export default function MainNavLinks({ className = '' }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`hero-main-nav ${className}`.trim()} aria-label="Main sections" ref={navRef}>
      {mainNavLinks.map((item) =>
       item.children ? (
        <div className="hero-nav-dropdown" key={item.label}>
          <span className={`hero-main-nav-link hero-nav-dropdown-trigger${openDropdown ? ' active' : ''}`}>
            <NavLink
              to={item.to}
              className={({ isActive }) => `hero-nav-dropdown-label${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
            <button
              type="button"
              className="hero-nav-dropdown-arrow-btn"
              onClick={() => setOpenDropdown((prev) => !prev)}
              aria-label="Toggle Academics submenu"
            >
              <span className="hero-nav-dropdown-arrow">▾</span>
            </button>
          </span>
          {openDropdown && (
              <div className="hero-nav-dropdown-menu">
                {item.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) =>
                      `hero-nav-dropdown-item${isActive ? ' active' : ''}`
                    }
                    onClick={() => setOpenDropdown(false)}
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
            end={item.end}
            className={({ isActive }) =>
              `hero-main-nav-link${isActive ? ' active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        )
      )}
    </nav>
  );
}
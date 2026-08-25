import { NAV_ITEMS } from './icons';

export default function Sidebar({ activeSection, onSelect, open, onClose }) {
  return (
    <>
      {open && <div className="admin-sidebar-backdrop" onClick={onClose} />}

      <aside className={`admin-sidebar ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
          <p>Manage school operations</p>
        </div>
        <nav className="admin-nav">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={`admin-nav-btn ${activeSection === id ? 'is-active' : ''}`}
              onClick={() => onSelect(id)}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

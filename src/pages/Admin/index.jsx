import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import { IconMenu, NAV_ITEMS } from './icons';
import PublishAnnouncements from './sections/PublishAnnouncements';
import ManageResults from './sections/ManageResults';
import ManageDues from './sections/ManageDues';
import ManageAttendance from './sections/ManageAttendance';
import ManageToppers from './sections/ManageToppers';
import ManageHeroBanners from './sections/ManageHeroBanners';
import './Admin.css';

export default function Admin() {
  const { isAdmin, loading } = useAuth();

  const [activeSection, setActiveSection] = useState('publish');
  // One toggle drives both: the desktop collapse and the mobile drawer.
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (loading) return <div className="loading-state">Loading…</div>;
  if (!isAdmin) return <Navigate to="/login" replace />;

  const goTo = (id) => {
    setActiveSection(id);
    // On small screens, picking a section should close the drawer.
    if (window.matchMedia('(max-width: 900px)').matches) {
      setSidebarOpen(false);
    }
  };

  const activeLabel = NAV_ITEMS.find((n) => n.id === activeSection)?.label ?? '';

  return (
    <div className="admin-shell">
      <Sidebar
        activeSection={activeSection}
        onSelect={goTo}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className={`admin-main ${sidebarOpen ? '' : 'admin-main-full'}`}>
        <div className="admin-topbar">
          <button
            type="button"
            className="admin-menu-toggle"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label={sidebarOpen ? 'Hide menu' : 'Show menu'}
            aria-expanded={sidebarOpen}
          >
            <IconMenu />
          </button>
          <span className="admin-topbar-title">{activeLabel}</span>
        </div>

        <main className="admin-content">
          {activeSection === 'publish' && <PublishAnnouncements />}
          {activeSection === 'results' && <ManageResults />}
          {activeSection === 'dues' && <ManageDues />}
          {activeSection === 'attendance' && <ManageAttendance />}
          {activeSection === 'toppers' && (
            <ManageToppers onGoToPublish={() => goTo('publish')} />
          )}
          {activeSection === 'banners' && <ManageHeroBanners />}
        </main>
      </div>
    </div>
  );
}

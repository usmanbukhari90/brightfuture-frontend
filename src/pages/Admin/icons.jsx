// --- Small inline icons (no external icon library required) ---

export const IconMenu = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const IconClose = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

export const IconMegaphone = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V4l-3 5H5a2 2 0 0 0-2 2z" />
    <path d="M13 8a5 5 0 0 1 0 8" />
    <path d="M17 5a9 9 0 0 1 0 14" />
  </svg>
);

export const IconChart = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20V10" /><path d="M12 20V4" /><path d="M20 20v-6" />
  </svg>
);

export const IconWallet = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="6" width="19" height="13" rx="2" />
    <path d="M2.5 10h19" />
    <circle cx="17" cy="14" r="1" />
  </svg>
);

export const IconCalendar = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" />
  </svg>
);

export const IconTrophy = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
    <path d="M5 4h3v3a3 3 0 0 1-3-3z" /><path d="M19 4h-3v3a3 3 0 0 0 3-3z" />
    <path d="M12 13v4" /><path d="M9 21h6" /><path d="M10 17h4l1 4H9l1-4z" />
  </svg>
);

export const NAV_ITEMS = [
  { id: 'publish', label: 'Publish Announcements', icon: IconMegaphone },
  { id: 'results', label: 'Manage Results', icon: IconChart },
  { id: 'dues', label: 'Manage Dues', icon: IconWallet },
  { id: 'attendance', label: 'Manage Attendance', icon: IconCalendar },
  { id: 'toppers', label: 'Manage Toppers', icon: IconTrophy },
];

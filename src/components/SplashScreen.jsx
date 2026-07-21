import { useEffect, useState } from 'react';
import SchoolLogo from './SchoolLogo';
import './SplashScreen.css';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('bfs-splash-seen');
    if (seen) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem('bfs-splash-seen', '1');
    const fadeTimer = setTimeout(() => setHide(true), 1600);
    const removeTimer = setTimeout(() => setVisible(false), 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-screen ${hide ? 'splash-screen--hide' : ''}`}>
      <div className="splash-inner">
        <div className="splash-logo-wrap">
          <SchoolLogo variant="light" className="splash-logo" />
        </div>
        <h2>Bright Future School</h2>
        <p>Excellence in Education</p>
      </div>
    </div>
  );
}

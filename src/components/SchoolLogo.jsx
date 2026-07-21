import { useState } from 'react';
import './SchoolLogo.css';

export default function SchoolLogo({ variant = 'light', className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className={`logo-fallback logo-fallback--${variant} ${className}`}>BF</span>;
  }

  return (
    <img
      src="/school-logo.png"
      alt="Bright Future School"
      className={`school-logo school-logo--${variant} ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

import { useState, useEffect } from 'react';
import { api } from '../services/api';
import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import SplitSection from '../components/SplitSection';
import './Toppers.css';

export default function Toppers() {
  const [toppers, setToppers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getToppers()
      .then(setToppers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PosterHero
        title="Academic Toppers"
        kicker="Honouring Excellence"
        quote="Achievement is earned when effort and consistency meet opportunity."
        image="/images/hero-boy-writing-notebook.jpg"
      />

      <SplitSection
        title="Recognising Outstanding Performance"
        text="Our academic toppers represent discipline, focus, and the pursuit of excellence. We celebrate their achievement as an inspiration for the wider school community."
        image="/images/hero-graduation-kids.jpg"
      />

      <ScrollReveal className="prose-section">
        <h2>Top Achievers</h2>
        <p>Students who have excelled in their examinations and earned recognition for their performance.</p>
      </ScrollReveal>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading-state">Loading toppers…</div>
      ) : toppers.length === 0 ? (
        <div className="empty-state">No topper records published yet. Honours will be displayed here after results are announced.</div>
      ) : (
        <div className="toppers-grid">
          {toppers.map((t) => (
            <div key={t.id} className="topper-card">
              <div className="topper-rank">#{t.rank}</div>
              <div className="topper-photo">
                {t.photo_url ? (
                  <img src={t.photo_url} alt={t.student_name} />
                ) : (
                  <div className="topper-photo-placeholder">
                    {t.student_name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="topper-name">{t.student_name}</h3>
              <p className="topper-class">{t.class_name}</p>
              <p className="topper-exam">{t.exam_name}</p>
              <p className="topper-score">{t.percentage}%</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

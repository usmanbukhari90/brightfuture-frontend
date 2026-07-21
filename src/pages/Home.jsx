import { useState, useEffect } from 'react';
import { api } from '../services/api';
import AnnouncementCard from '../components/AnnouncementCard';
import PosterHero from '../components/PosterHero';
import StatsStrip from '../components/StatsStrip';
import FeatureGallery from '../components/FeatureGallery';
import ScrollReveal from '../components/ScrollReveal';
import { schoolStats, homeFeatures } from '../data/pageContent';
import './Home.css';

const SCHOOL_BUILDING = '/images/hero-school-building-render.jpg';

export default function Home() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getAnnouncements()
      .then(setAnnouncements)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <>
    <PosterHero
        image={SCHOOL_BUILDING}
        variant="building"
        showPageContent={false}
      />

      <div className="page-header">
        <h2 className="announcements-heading">Announcements</h2>
        <p>Latest news, notices, and updates from Bright Future School</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading-state">Loading announcements...</div>
      ) : announcements.length === 0 ? (
        <div className="empty-state">No announcements yet. Check back soon.</div>
      ) : (
        <div className="announcements-feed">
          <p className="feed-label">Recent Updates</p>
          {announcements.map((a, index) => (
            <AnnouncementCard
              key={a.id}
              announcement={a}
              onDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      )}

      <StatsStrip items={schoolStats} />

      <FeatureGallery
        title="Why Bright Future School"
        subtitle="A campus where learning feels purposeful, structured, and warmly supported."
        items={homeFeatures}
      />

      <ScrollReveal>
        <div className="motto-banner">
          <p>
            &ldquo;Every child deserves a school that believes in their ability to grow, achieve, and lead
            with character.&rdquo;
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import './AnnouncementCard.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function AnnouncementCard({ announcement, onDelete, index = 0 }) {
  const { isAdmin } = useAuth();

  const handleDelete = async () => {
    if (!window.confirm('Remove this announcement?')) return;
    try {
      await api.deleteAnnouncement(announcement.id);
      onDelete(announcement.id);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <article
      className="announcement-card fade-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="announcement-header">
        <h2 className="announcement-title">{announcement.title}</h2>
        <div className="announcement-meta">
          <span>{formatDate(announcement.created_at)}</span>
        </div>
      </div>

      {announcement.content && (
        <div className="announcement-body">
          <p>{announcement.content}</p>
        </div>
      )}

      {announcement.media_type === 'image' && announcement.media_url && (
        <div className="announcement-media">
          <img src={announcement.media_url} alt={announcement.title} />
        </div>
      )}

      {announcement.media_type === 'video' && announcement.media_url && (
        <div className="announcement-media">
          <video src={announcement.media_url} controls preload="metadata" />
        </div>
      )}

      {isAdmin && (
        <div className="announcement-actions">
          <button className="btn btn-danger" onClick={handleDelete}>Remove</button>
        </div>
      )}
    </article>
  );
}

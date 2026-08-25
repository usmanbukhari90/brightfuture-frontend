import { useState } from 'react';
import { api } from '../../../services/api';

export default function PublishAnnouncements() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setSubmitting(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (media) formData.append('media', media);

    try {
      await api.createAnnouncement(formData);
      setMessage('Announcement published successfully.');
      setTitle('');
      setContent('');
      setMedia(null);
      e.target.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-section-grid">
      <section className="card admin-form-section admin-card-lg">
        <h2 className="card-title">New Announcement</h2>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Announcement title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="admin-textarea-lg"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the announcement details…"
            />
          </div>

          <div className="form-group">
            <label htmlFor="media">Image or Video (optional)</label>
            <input
              id="media"
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setMedia(e.target.files[0] || null)}
            />
            {media && <p className="file-name">{media.name}</p>}
          </div>

          <div className="admin-form-actions">
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Publishing…' : 'Publish Announcement'}
            </button>
          </div>
        </form>
      </section>

      <section className="card admin-info-section">
        <h2 className="card-title">Admin Guide</h2>
        <ul className="admin-guide">
          <li>Published announcements appear on the home page immediately.</li>
          <li>Supported media: JPEG, PNG, GIF, WebP, MP4, WebM.</li>
          <li>Maximum file size: 50 MB.</li>
          <li>You can remove announcements from the home page feed.</li>
          <li>Toppers are managed through Announcements for now.</li>
        </ul>
      </section>
    </div>
  );
}

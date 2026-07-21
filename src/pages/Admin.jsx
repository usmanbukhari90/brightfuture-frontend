import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import './Admin.css';

export default function Admin() {
  const { isAdmin, loading } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Results upload state
  const [resultsFile, setResultsFile] = useState(null);
  const [examName, setExamName] = useState('');
  const [className, setClassName] = useState('');
  const [year, setYear] = useState('');
  const [uploadingResults, setUploadingResults] = useState(false);
  const [resultsMessage, setResultsMessage] = useState('');
  const [resultsError, setResultsError] = useState('');

  // Delete-by-exam state
  const [deleteExamName, setDeleteExamName] = useState('');
  const [deleteClassName, setDeleteClassName] = useState('');
  const [deleteYear, setDeleteYear] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [deleteConfirming, setDeleteConfirming] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [deleteError, setDeleteError] = useState('');

  // Exam batch list state
  const [examBatches, setExamBatches] = useState([]);
  const [batchesLoading, setBatchesLoading] = useState(true);
  const [confirmingBatchKey, setConfirmingBatchKey] = useState(null);

  const loadExamBatches = () => {
    setBatchesLoading(true);
    api.getExamBatches()
      .then(setExamBatches)
      .catch(() => setExamBatches([]))
      .finally(() => setBatchesLoading(false));
  };

  useEffect(() => {
    if (isAdmin) loadExamBatches();
  }, [isAdmin]);

  if (loading) return <div className="loading-state">Loading…</div>;
  if (!isAdmin) return <Navigate to="/login" replace />;

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

  const handleResultsUpload = async (e) => {
    e.preventDefault();
    setResultsError('');
    setResultsMessage('');

    if (!resultsFile) {
      setResultsError('Please choose a CSV file.');
      return;
    }
    if (!examName || !className || !year) {
      setResultsError('Exam name, class, and year are all required.');
      return;
    }

    setUploadingResults(true);
    const formData = new FormData();
    formData.append('file', resultsFile);
    formData.append('examName', examName);
    formData.append('className', className);
    formData.append('year', year);

    try {
      const res = await api.uploadResultsCSV(formData);
      setResultsMessage(`Successfully uploaded ${res.inserted} result rows.`);
      setResultsFile(null);
      setExamName('');
      setClassName('');
      setYear('');
      e.target.reset();
      loadExamBatches();
    } catch (err) {
      setResultsError(err.message);
    } finally {
      setUploadingResults(false);
    }
  };

  const handleDeleteExam = async () => {
    setDeleteError('');
    setDeleteMessage('');

    if (!deleteExamName) {
      setDeleteError('Exam name is required to delete results.');
      return;
    }

    if (!deleteConfirming) {
      setDeleteConfirming(true);
      return;
    }

    setDeleting(true);
    try {
      const res = await api.deleteResultsByExam(deleteExamName, deleteClassName, deleteYear);
      setDeleteMessage(`Deleted ${res.deletedCount} result rows.`);
      setDeleteExamName('');
      setDeleteClassName('');
      setDeleteYear('');
      loadExamBatches();
    } catch (err) {
      setDeleteError(err.message);
    } finally {
      setDeleting(false);
      setDeleteConfirming(false);
    }
  };

  const handleDeleteBatch = async (batch) => {
    const key = `${batch.examName}__${batch.className}__${batch.year}`;

    if (confirmingBatchKey !== key) {
      setConfirmingBatchKey(key);
      return;
    }

    setDeleteError('');
    setDeleteMessage('');
    setDeleting(true);
    try {
      const res = await api.deleteResultsByExam(batch.examName, batch.className, batch.year);
      setDeleteMessage(`Deleted ${res.deletedCount} result rows from "${batch.examName}".`);
      loadExamBatches();
    } catch (err) {
      setDeleteError(err.message);
    } finally {
      setDeleting(false);
      setConfirmingBatchKey(null);
    }
  };

  return (
    <>
      <div className="page-header">
        <h1>Admin Panel</h1>
        <p>Publish announcements with images or videos</p>
      </div>

      <div className="admin-grid">
        <section className="card admin-form-section">
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

            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Publishing…' : 'Publish Announcement'}
            </button>
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

        <section className="card admin-form-section">
          <h2 className="card-title">Upload Examination Results (CSV)</h2>

          {resultsError && <div className="error-message">{resultsError}</div>}
          {resultsMessage && <div className="success-message">{resultsMessage}</div>}

          <form onSubmit={handleResultsUpload}>
            <div className="form-group">
              <label htmlFor="examName">Exam Name</label>
              <input
                id="examName"
                type="text"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                placeholder="e.g. Annual Examination"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="className">Class</label>
              <input
                id="className"
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="e.g. Grade 8"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                id="year"
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g. 2026"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="resultsFile">CSV File</label>
              <input
                id="resultsFile"
                type="file"
                accept=".csv"
                onChange={(e) => setResultsFile(e.target.files[0] || null)}
                required
              />
              {resultsFile && <p className="file-name">{resultsFile.name}</p>}
            </div>

            <button type="submit" className="btn btn-primary" disabled={uploadingResults}>
              {uploadingResults ? 'Uploading…' : 'Upload Results'}
            </button>
          </form>
        </section>

        <section className="card admin-info-section">
          <h2 className="card-title">Delete Results by Exam</h2>
          <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            This permanently removes all result rows matching the exam name (and class/year if given). Use this to clear out an exam before re-uploading corrected data.
          </p>

          {deleteError && <div className="error-message">{deleteError}</div>}
          {deleteMessage && <div className="success-message">{deleteMessage}</div>}

          <div className="form-group">
            <label htmlFor="deleteExamName">Exam Name</label>
            <input
              id="deleteExamName"
              type="text"
              value={deleteExamName}
              onChange={(e) => { setDeleteExamName(e.target.value); setDeleteConfirming(false); }}
              placeholder="e.g. Annual Examination"
            />
          </div>

          <div className="form-group">
            <label htmlFor="deleteClassName">Class (optional)</label>
            <input
              id="deleteClassName"
              type="text"
              value={deleteClassName}
              onChange={(e) => { setDeleteClassName(e.target.value); setDeleteConfirming(false); }}
              placeholder="e.g. Grade 8"
            />
          </div>

          <div className="form-group">
            <label htmlFor="deleteYear">Year (optional)</label>
            <input
              id="deleteYear"
              type="number"
              value={deleteYear}
              onChange={(e) => { setDeleteYear(e.target.value); setDeleteConfirming(false); }}
              placeholder="e.g. 2026"
            />
          </div>

          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteExam}
            disabled={deleting}
          >
            {deleting
              ? 'Deleting…'
              : deleteConfirming
              ? 'Click again to confirm delete'
              : 'Delete Results'}
          </button>

          <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid var(--border)' }} />

          <h3 className="mini-title">Uploaded Result Batches</h3>

          {batchesLoading ? (
            <div className="loading-state">Loading batches…</div>
          ) : examBatches.length === 0 ? (
            <div className="empty-state">No results uploaded yet.</div>
          ) : (
            <div className="table-wrap batches-table-wrap">
              <table className="data-table batches-table">
                <thead>
                  <tr>
                    <th>Exam</th>
                    <th>Class</th>
                    <th>Year</th>
                    <th>Rows</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {examBatches.map((batch) => {
                    const key = `${batch.examName}__${batch.className}__${batch.year}`;
                    return (
                      <tr key={key}>
                        <td data-label="Exam">{batch.examName}</td>
                        <td data-label="Class">{batch.className}</td>
                        <td data-label="Year">{batch.year}</td>
                        <td data-label="Rows">{batch.rowCount}</td>
                        <td data-label="" className="batches-table-action">
                          <button
                            type="button"
                            className="btn btn-danger"
                            style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}
                            onClick={() => handleDeleteBatch(batch)}
                            disabled={deleting}
                          >
                            {confirmingBatchKey === key ? 'Confirm?' : 'Delete'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

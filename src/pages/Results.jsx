import { useState } from 'react';
import { api } from '../services/api';
import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import SplitSection from '../components/SplitSection';

export default function Results() {
  const [rollNo, setRollNo] = useState('');
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState('');
  const [studentResult, setStudentResult] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setStudentResult(null);

    if (!/^\d{4}$/.test(rollNo)) {
      setError('Please enter a valid 4-digit roll number.');
      return;
    }

    setSearching(true);
    try {
      const rows = await api.searchResults(rollNo);
      if (!rows || rows.length === 0) {
        setError('No result found for this roll number.');
        return;
      }
      setStudentResult(rows);
    } catch (err) {
      setError(err.message || 'Failed to fetch result');
    } finally {
      setSearching(false);
    }
  };

  const summary = studentResult?.[0];

  return (
    <>
      <PosterHero
        title="Examination Results"
        kicker="Academic Records"
        quote="Every result tells a story of effort, discipline, and growth."
        image="/images/hero-group-laptops-laughing.jpg"
      />

<SplitSection
        title="Celebrating Student Achievement"
        text="Examination results reflect preparation, consistency, and the guidance students receive throughout the term. Enter a roll number below to view a published result."
        image="/images/hero-holding-books.jpg"
        imageLeft
      />

      <ScrollReveal className="prose-section">
        <h2>Check Your Result</h2>
        <p>Insert your roll number to view your published examination result.</p>
      </ScrollReveal>

      <div className="card fade-up" style={{ maxWidth: 420, margin: '0 auto 2rem' }}>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="rollNo">Roll Number</label>
            <input
              id="rollNo"
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value.replace(/\D/g, ''))}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={searching}>
            {searching ? 'Searching…' : 'Search Result'}
          </button>
        </form>
      </div>

      {error && <div className="error-message" style={{ maxWidth: 420, margin: '0 auto 2rem' }}>{error}</div>}

      {studentResult && summary && (
        <div className="card fade-up" style={{ maxWidth: 560, margin: '0 auto 2rem' }}>
          <div className="card-title">{summary.student_name}</div>
          <p style={{ marginBottom: '1rem' }}>
            Roll No: <strong>{summary.roll_no}</strong> &nbsp;|&nbsp; Class: <strong>{summary.class_name}</strong> &nbsp;|&nbsp; Exam: <strong>{summary.exam_name}</strong>
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks Obtained</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                {studentResult.map((row) => (
                  <tr key={row.id}>
                    <td>{row.subject}</td>
                    <td>{row.marks_obtained ?? '—'}</td>
                    <td>{row.total_marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <strong>Total:</strong> {summary.overall_total_obtained}/{summary.overall_total_max}
            </div>
            <div>
              <strong>Percentage:</strong> {summary.percentage}%
            </div>
            <div>
              <strong>Grade:</strong> {summary.grade}
            </div>
            <div>
              <span className={`badge ${summary.result_status === 'PASS' ? 'badge-paid' : 'badge-overdue'}`}>
                {summary.result_status}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
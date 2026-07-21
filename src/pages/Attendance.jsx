import { useState, useEffect } from 'react';
import { api } from '../services/api';
import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import SplitSection from '../components/SplitSection';

export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getAttendance()
      .then(setRecords)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PosterHero
        title="Attendance"
        kicker="Student Presence"
        quote="Regular attendance builds strong habits and stronger futures."
        image="/images/hero-person-laptop-thinking.jpg"
        />
      <SplitSection
        title="Consistency Matters"
        text="Regular attendance supports learning continuity, classroom participation, and long-term academic confidence. Monthly summaries help parents stay informed about their child's presence at school."
        image="/images/hero-attendance-student-alone.jpg"
      />

      <ScrollReveal className="prose-section">
        <h2>Attendance Records</h2>
        <p>Monthly attendance summary for students across all classes.</p>
      </ScrollReveal>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading-state">Loading attendance…</div>
      ) : records.length === 0 ? (
        <div className="empty-state">No attendance records available yet. Updated records will appear here.</div>
      ) : (
        <div className="table-section fade-up">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Class</th>
                <th>Month</th>
                <th>Present</th>
                <th>Total Days</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id}>
                  <td>{r.student_name}</td>
                  <td>{r.class_name}</td>
                  <td>{r.month}</td>
                  <td>{r.present_days}</td>
                  <td>{r.total_days}</td>
                  <td>{Math.round((r.present_days / r.total_days) * 100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

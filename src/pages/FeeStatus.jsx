import { useState, useEffect } from 'react';
import { api } from '../services/api';
import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import SplitSection from '../components/SplitSection';

function statusBadge(status) {
  const map = {
    paid: 'badge-paid',
    pending: 'badge-pending',
    overdue: 'badge-overdue',
  };
  return map[status] || 'badge-pending';
}

export default function FeeStatus() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getFees()
      .then(setFees)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PosterHero
        title="Fee Status"
        kicker="Fee Records"
        quote="Clear communication creates trust between school and families."
        image="/images/hero-tax-documents.jpg"
      />

      <SplitSection
        title="Transparent Fee Information"
        text="Fee records are maintained with clarity so parents can review amounts due, payments made, and outstanding balances. Our office remains available for any billing questions during school hours."
        image="/images/hero-fees-tax-documents.jpg"
        imageLeft
      />

      <ScrollReveal className="prose-section">
        <h2>Fee Payment Records</h2>
        <p>Fee payment records and outstanding balances for enrolled students.</p>
      </ScrollReveal>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading-state">Loading fee records…</div>
      ) : fees.length === 0 ? (
        <div className="empty-state">No fee records available yet. Updated records will appear here.</div>
      ) : (
        <div className="table-section fade-up">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Class</th>
                <th>Amount Due</th>
                <th>Amount Paid</th>
                <th>Balance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((f) => (
                <tr key={f.id}>
                  <td>{f.student_name}</td>
                  <td>{f.class_name}</td>
                  <td>Rs. {f.amount_due.toLocaleString()}</td>
                  <td>Rs. {f.amount_paid.toLocaleString()}</td>
                  <td>Rs. {(f.amount_due - f.amount_paid).toLocaleString()}</td>
                  <td>
                    <span className={`badge ${statusBadge(f.status)}`}>{f.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

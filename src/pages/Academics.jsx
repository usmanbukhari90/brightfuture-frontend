import { Link } from 'react-router-dom';
import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import SplitSection from '../components/SplitSection';
import { academicPrograms, schoolStats } from '../data/pageContent';

const academicLinks = [
  { to: '/attendance', title: 'Attendance', copy: 'Monthly presence and participation records.' },
  { to: '/results', title: 'Results', copy: 'Published examination performance summaries.' },
  { to: '/fee-status', title: 'Fee Status', copy: 'Fee dues, payments, and balances.' },
  { to: '/toppers', title: 'Toppers', copy: 'Students who excelled in examinations.' },
];

export default function Academics() {
  return (
    <>
      <PosterHero
        title="Academics"
        kicker="Academic Excellence"
        quote={'Striving for Excellence through\nContinuous Improvement'}
        image="/images/hero-graduation-kids.jpg"
        />
      

      <div className="prose-page">
      <SplitSection
          title="A Structured Path to Achievement"
          text="Our academic framework supports routine, clarity, and measurable progress. From early years to middle school, students benefit from consistent teaching standards, regular assessment, and meaningful feedback."
          image="/images/hero-graduate-cap-profile.jpg"
        />

        <ScrollReveal className="prose-section" delay={80}>
          <h2>Academic Structure</h2>
          <div className="program-grid">
            {academicPrograms.map((program) => (
              <div key={program.name} className="program-chip">
                <strong>{program.name}</strong>
                <span>{program.detail}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="section-heading">Student Records &amp; Reports</h2>
          <p className="section-subheading">
            Access attendance, results, fee status, and academic toppers through the sections below.
          </p>
          <div className="academic-links">
            {academicLinks.map((item) => (
              <Link key={item.to} to={item.to} className="academic-link-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}

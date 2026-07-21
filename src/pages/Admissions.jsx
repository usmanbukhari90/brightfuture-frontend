import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import SplitSection from '../components/SplitSection';
import HighlightList from '../components/HighlightList';
import { Fragment } from 'react';
import { admissionHighlights, schoolStats } from '../data/pageContent';

const classLevels = [
  ['Playgroup', '2.5+'],
  ['Nursery', '3+'],
  ['Kindergarten', '4+'],
  ['Class 1', '5+'],
  ['Class 2', '6+'],
  ['Class 3', '7+'],
  ['Class 4', '8+'],
  ['Class 5', '9+'],
  ['Class 6', '10+'],
  ['Class 7', '11+'],
  ['Class 8', '12+'],
];

const steps = [
  {
    title: 'Registration',
    image: '/images/hero-registration-signing.jpg',
  },
  {
    title: 'Admission Test',
    image: '/images/hero-admission-test-writing.jpg',
  },
  {
    title: 'Documentation',
    image: '/images/hero-documentation-files.jpg',
  },
];

export default function Admissions() {
  return (
    <>
      <PosterHero
        title="Admissions"
        kicker="Join Bright Future School"
        quote={'Begin your journey\nwith the first step\nin the right direction'}
        image="/images/about-library-students.jpg"
      />


      

      <div className="prose-page">
      <SplitSection
          title="Welcome to Our Admission Process"
          text="We understand that choosing a school is an important decision. Our team guides parents through registration, assessment, and enrollment with clarity, respect, and timely communication at every stage."
          image="/images/hero-admission-meeting-table.jpg"
          imageLeft
        />
        <HighlightList title="What Parents Can Expect" items={admissionHighlights} />

        <ScrollReveal className="prose-section">
          <h2>Procedure</h2>
          <p>
            Our admission procedure is designed to be simple, transparent, and supportive for parents.
            From registration to test scheduling and final confirmation, each step is communicated clearly
            so families can plan with confidence and clarity.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={80}>
          <h2>Enroll now in three easy steps</h2>
          <div className="enroll-steps">
            {steps.map((step, i) => (
              <Fragment key={step.title}>
                <div className="enroll-step">
                  <div
                    className="enroll-step-image"
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                  <h4>{step.title}</h4>
                </div>
                {i < steps.length - 1 && (
                  <span className="enroll-arrow" aria-hidden="true">›</span>
                )}
              </Fragment>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={120}>
          <h2>Requirements</h2>
          <ol>
            <li>
              Parents complete the admission form and pay the registration fees, after which they will receive:
              <ul>
                <li>Relevant Fee structure slip</li>
                <li>Appointment card with date &amp; time for the test</li>
                <li>Registration receipt</li>
                <li>Admission and fee payment information</li>
                <li>Prospectus &amp; Newsletter</li>
              </ul>
            </li>
            <li>
              The documents to be attached with the Admission Form includes:
              <ul>
                <li>2 recent passport-size photographs</li>
                <li>Attested photocopy of Birth Certificate</li>
              </ul>
              In case of transfer:
              <ul>
                <li>Report card from last school</li>
                <li>A photocopy of the Provisional Certificate and Character Certificate from the last institution attended</li>
              </ul>
            </li>
            <li>Admission test and interviews with both parents are scheduled.</li>
            <li>
              Result will be finalised within a week of the test and will be shared with parents on their
              registered contact information.
            </li>
            <li>
              Parents are given the admission fee challan/bill along with the guidelines of payment.
            </li>
          </ol>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={160}>
          <h2>Class Levels</h2>
          <div className="table-section">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Class Levels</th>
                  <th>Age(Years)</th>
                </tr>
              </thead>
              <tbody>
                {classLevels.map(([level, age]) => (
                  <tr key={level}>
                    <td>{level}</td>
                    <td>{age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}

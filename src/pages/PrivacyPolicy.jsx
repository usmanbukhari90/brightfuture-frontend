import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';

export default function PrivacyPolicy() {
  return (
    <>
      <PosterHero
        title="Privacy Policy"
        kicker="Your Data, Protected"
        quote="We respect your privacy and are committed to protecting it."
        image="/images/hero-classroom-periodic-table.jpg"
      />

      <div className="prose-page">
        <ScrollReveal className="prose-section">
          <h2>Overview</h2>
          <p>
            Bright Future School collects and uses information solely to support school
            operations — including admissions, academic records, attendance, fee management,
            and communication with parents and students. This policy explains what
            information we collect, how it is used, and how it is protected.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={80}>
          <h2>Information We Collect</h2>
          <ul>
            <li>Student information: name, roll number, class, academic records, attendance, and fee status.</li>
            <li>Parent/guardian contact details submitted through admission or contact forms.</li>
            <li>Account information for administrative and staff logins.</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={100}>
          <h2>How We Use Information</h2>
          <p>
            Information collected is used exclusively for academic administration, publishing
            examination results to the relevant student or parent, maintaining attendance and
            fee records, and responding to inquiries submitted through the school website.
            We do not sell or share personal information with third parties for marketing
            purposes.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={120}>
          <h2>Data Security</h2>
          <p>
            Student and parent data is stored using secure, access-controlled systems.
            Administrative access is restricted to authorized school staff. While we take
            reasonable measures to protect information, no system can guarantee absolute
            security.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={140}>
          <h2>Contact</h2>
          <p>
            For questions regarding this privacy policy or your data, please reach out
            through the Contact Us page.
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}
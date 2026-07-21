import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';

export default function TermsConditions() {
  return (
    <>
      <PosterHero
        title="Terms & Conditions"
        kicker="Website Usage"
        quote="Please read these terms carefully before using our website."
       image="/images/hero-sticky-notes-planning.jpg"
      />

      <div className="prose-page">
        <ScrollReveal className="prose-section">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Bright Future School website, you agree to be bound
            by these Terms &amp; Conditions. If you do not agree with any part of these
            terms, please discontinue use of this website.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={80}>
          <h2>Use of Information</h2>
          <p>
            Examination results, attendance, and fee status displayed on this website are
            intended solely for the relevant student and their parents or guardians.
            Attempting to access another student's records without authorization is
            prohibited.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={100}>
          <h2>Accuracy of Information</h2>
          <p>
            While we strive to keep academic records, announcements, and school information
            accurate and up to date, Bright Future School does not guarantee that all content
            on this site is free of errors. For any discrepancies, please contact the school
            office directly.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={120}>
          <h2>Account Responsibility</h2>
          <p>
            Administrative accounts are provided to authorized school staff only. Users are
            responsible for maintaining the confidentiality of their login credentials and
            for all activity under their account.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={140}>
          <h2>Changes to These Terms</h2>
          <p>
            Bright Future School may update these Terms &amp; Conditions from time to time.
            Continued use of the website after changes are posted constitutes acceptance of
            the revised terms.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={160}>
          <h2>Contact</h2>
          <p>
            For questions regarding these terms, please reach out through the Contact Us page.
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}
import ScrollReveal from '../components/ScrollReveal';
import PosterHero from '../components/PosterHero';
import SplitSection from '../components/SplitSection';
import FeatureGallery from '../components/FeatureGallery';

const journey = [
  {
    year: '2020',
    text: 'Bright Future School began strengthening classroom systems, building trust with parents, and laying foundations for disciplined learning.',
  },
  {
    year: '2022',
    text: 'Academic support expanded with improved activity planning, student development goals, and a stronger school community culture.',
  },
  {
    year: '2026',
    text: 'A modern school experience with digital communication, stronger administration, and a connected platform for parents and students.',
  },
];

const campusLife = [
  {
    title: 'Active Classrooms',
    image: '/images/hero-girls-writing-classroom.jpg',
    text: 'Engaged teaching, thoughtful questioning, and a calm learning atmosphere.',
  },
  {
    title: 'Student Activities',
    image: '/images/hero-mentor-girl-blocks.jpg',
    text: 'Events and activities that build confidence beyond the examination hall.',
  },
  {
    title: 'School Community',
    image: '/images/hero-teacher-student-question.jpg',
    text: 'A place where students feel seen, supported, and encouraged to improve.',
  },
];

export default function About() {
  return (
    <>
      <PosterHero
        title="About Us"
        kicker="Our Story"
        quote="Education with character 
        creates the confidence 
        to lead with purpose."
        image="/images/hero-library-aisle.jpg"
      />

      <div className="prose-page">
        <ScrollReveal className="prose-section">
          <p className="section-label">Contact Details</p>
          <div className="contact-lines">
            <p><strong>Address:</strong> Muslim Town, Manka Canal Road near Lodhi Qabristan, D.G.Khan</p>
            <p><strong>Contact Number:</strong> 0333-7253940</p>
            <p><strong>Contact Number:</strong> 0313-7254087</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div
            className="inline-poster"
            style={{
              backgroundImage: "url('/images/hero-empty-classroom-tworows.jpg')",
            }}
          >
            <blockquote>
              &ldquo;Where discipline meets ambition, and every child discovers a brighter tomorrow.&rdquo;
            </blockquote>
          </div>
        </ScrollReveal>

        <SplitSection
          title="Our Commitment to Every Learner"
          text="Bright Future School is committed to providing quality education that nurtures intellectual curiosity, moral integrity, and lifelong learning. We create a respectful environment where every child is encouraged to participate, think independently, and grow into a capable young leader."
          image="/images/hero-classroom-supplies-empty.jpg"
          quote="&ldquo;A school is not only a place to study, but a place to build identity, discipline, and dreams.&rdquo;"
        />

        <ScrollReveal className="prose-section" delay={100}>
          <h2>Overview</h2>
          <p>
            From the earliest years in Playgroup to the confidence-building stage of Class 8, our school
            focuses on strong foundations, regular assessment, and meaningful teacher guidance. We believe
            education should feel structured, caring, and forward-looking.
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={120}>
          <h2>Our Values</h2>
          <ul>
            <li>Integrity in conduct, honesty in learning, and respect in every relationship.</li>
            <li>Consistency in effort so students understand the value of steady improvement.</li>
            <li>Compassion for classmates, teachers, parents, and the wider community.</li>
            <li>Excellence through preparation, practice, reflection, and responsibility.</li>
          </ul>
        </ScrollReveal>

        <FeatureGallery
          title="Life at Bright Future School"
          subtitle="Learning, activity, and community come together on our campus."
          items={campusLife}
        />

        <ScrollReveal className="prose-section" delay={140}>
          <h2>Curriculum &amp; Academics Philosophy</h2>
          <p>
            Our academic philosophy is rooted in conceptual understanding, regular assessment, teacher
            mentoring, and student confidence. We believe children perform best when they understand not
            only what to learn, but why it matters.
          </p>
          <p className="prose-quote">
            &ldquo;When learning becomes meaningful, achievement follows naturally.&rdquo;
          </p>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={160}>
          <h2>Our Journey</h2>
          <div className="timeline">
            {journey.map((item) => (
              <div key={item.year} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={180}>
          <h2>Safety and Security</h2>
          <p>
            Student safety remains central to our school operations. We maintain supervised entry and exit
            routines, strong classroom discipline, responsible communication, and a culture where students
            feel secure asking for help.
          </p>
          <p className="prose-quote prose-quote--bold">
            &ldquo;Safe schools create confident learners.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}

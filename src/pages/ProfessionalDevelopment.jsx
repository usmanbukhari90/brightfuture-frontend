import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import FeatureGallery from '../components/FeatureGallery';
import HighlightList from '../components/HighlightList';
import SplitSection from '../components/SplitSection';

import { facultyHighlights, schoolStats } from '../data/pageContent';

const workshops = [
  {
    title: 'Instructional Workshops',
    image: '/images/hero-workshop-child-writing.jpg',
    text: 'Focused sessions on teaching methods, classroom routines, and student engagement.',
  },
  {
    title: 'Peer Learning',
    image: '/images/hero-teacher-student-group.jpg',
    text: 'Teachers observe, reflect, and share practical strategies with one another.',
  },
  {
    title: 'Continuous Growth',
    image: '/images/hero-growth-boy-smiling.jpg',
    text: 'Professional development treated as an ongoing culture, not a one-time event.',
  },
];

export default function ProfessionalDevelopment() {
  return (
    <>
      <PosterHero
        title="Professional Development"
        kicker="Teacher Growth"
        quote={'“An investment in knowledge pays the best interest”'}
        image="/images/hero-laptop-pointing.jpg"
      />

     

      <div className="prose-page">
      <SplitSection
          title="Growing Educators, Stronger Classrooms"
          text="Professional development at Bright Future School focuses on helping teachers strengthen classroom practice, student engagement, and modern teaching methods. When educators continue to grow, students benefit immediately."
          image="/images/hero-teacher-pc-screens.jpg"
          imageLeft
        />

        <HighlightList title="Faculty Development Focus" items={facultyHighlights} />

        <FeatureGallery
          title="How We Train & Support Teachers"
          subtitle="Workshops, collaboration, and reflective practice keep our teaching standards high."
          items={workshops}
        />

        <ScrollReveal className="prose-section" delay={120}>
          <h2>Core Focus Areas</h2>
          <ul>
            <li>Lesson planning and effective classroom management</li>
            <li>Assessment design, feedback quality, and student progress tracking</li>
            <li>Use of digital tools and parent communication systems</li>
            <li>Student wellbeing, inclusion, and respectful learning environments</li>
          </ul>
          <p className="prose-quote">
            &ldquo;Professional growth in a school is not an event; it is a culture.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </>
  );
}

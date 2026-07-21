import { useMemo, useState } from 'react';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import PosterHero from '../components/PosterHero';
import ScrollReveal from '../components/ScrollReveal';
import SplitSection from '../components/SplitSection';


const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/923337253940', icon: FaWhatsapp },
  { label: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  { label: 'Facebook', href: '#', icon: FaFacebookF },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'Email', href: 'mailto:info@brightfutureschool.edu', icon: FaEnvelope },
];

const faqs = [
  {
    q: 'How can parents contact the school quickly?',
    a: 'Call the school numbers directly or send a message using the WhatsApp query form below.',
  },
  {
    q: 'Can admission questions be asked online?',
    a: 'Yes. Submit your question through the form and it will open directly in WhatsApp for quick follow-up.',
  },
  {
    q: 'When should parents visit the campus?',
    a: 'Visits are best during school office hours so staff can guide you on admissions and academic matters.',
  },
  {
    q: 'How do I check fee or academic updates?',
    a: 'Use the Academics section from the side menu to access Attendance, Results, and Fee Status.',
  },
  {
    q: 'Where is the school located?',
    a: 'Bright Future School is located at Muslim Town, Manka Canal Road near Lodhi Qabristan, D.G.Khan.',
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', phone: '', question: '' });

  const whatsappMessage = useMemo(() => {
    return encodeURIComponent(
      `Assalam o Alaikum, I have a query for Bright Future School.\n\nName: ${form.name || '-'}\nPhone: ${form.phone || '-'}\nQuestion: ${form.question || '-'}`
    );
  }, [form]);

  return (
    <>
      <PosterHero
        title="Contact Us"
        kicker="Get In Touch"
        quote="Connecting, Caring and Resolving!"
        image="/images/hero-office-phone-call.jpg"
      />


     

      <div className="prose-page">
      <SplitSection
          title="We Are Here to Listen"
          text="Whether your question is about admissions, academics, fee information, or a general school matter, our team is ready to guide you with courtesy and clarity."
          image="/images/hero-office-team-desks-spare.jpg"
          imageLeft
        />
        <ScrollReveal className="prose-section">
          <h2>School Information</h2>
          <div className="contact-lines">
            <p><strong>Address:</strong> Muslim Town, Manka Canal Road near Lodhi Qabristan, D.G.Khan</p>
            <p><strong>Phone:</strong> 0333-7253940</p>
            <p><strong>Phone:</strong> 0313-7254087</p>
            <p><strong>Email:</strong> info@brightfutureschool.edu.pk</p>
            <p><strong>Office Hours:</strong> Monday – Friday, 8:00 AM – 3:00 PM</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="prose-section" delay={80}>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq) => (
            <div key={faq.q} className="faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <p className="section-label">Connect With Us</p>
          <div className="social-row">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  className="social-icon-link"
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon />
                  {social.label}
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal className="query-form" delay={160}>
          <h2>Send a Query</h2>
          <p>Ask us anything — your message will open in WhatsApp for a direct reply.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(`https://wa.me/923337253940?text=${whatsappMessage}`, '_blank');
            }}
          >
            <div className="content-grid">
              <div className="form-group">
                <label htmlFor="query-name">Your Name</label>
                <input
                  id="query-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="query-phone">Phone Number</label>
                <input
                  id="query-phone"
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="query-text">Your Question</label>
              <textarea
                id="query-text"
                value={form.question}
                onChange={(e) => setForm((prev) => ({ ...prev, question: e.target.value }))}
                placeholder="Write your question here..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Query
            </button>
          </form>
        </ScrollReveal>
      </div>
    </>
  );
}

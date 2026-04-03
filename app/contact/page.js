
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us - Zamin Abbas',
  description: 'Contact Zamin Abbas, a top-ranked SEO specialist in Pakistan. Get expert guidance on SEO, web development, and digital marketing.',
};

export default function Contact() {
  return (
    <main>
      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let's grow your business with SEO, Web Development, and Digital Marketing.</p>
        </div>
      </section>

      <section className="contact">
        <div className="contact-wrap">
          <div className="contact-left sr">
            <span className="section-tag">Ready to Grow? Contact Me</span>
            <h2 className="section-title">
              Get In Touch
            </h2>
            <p>I'm here to help you grow your business online. Reach out for a free strategy discussion.</p>

            <div style={{ marginTop: '30px' }}>
              <h4 style={{ marginBottom: '10px' }}>📞 Phone</h4>
              <p><a href="tel:+923042828068">+92 304 282 8068</a></p>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>📧 Email</h4>
              <p><a href="mailto:digitalmarketingskills46@gmail.com">digitalmarketingskills46@gmail.com</a></p>
            </div>

            <div style={{ marginTop: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>💬 WhatsApp</h4>
              <p><a href="https://wa.me/923042828068" target="_blank">Chat now on WhatsApp</a></p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="cta" style={{ background: '#0f172a', color: '#ffffff', padding: '80px 5%', textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Get a free quote and action plan in 24 hours.</p>
          <a href="tel:+923042828068" className="cta-btn">
            Call Now →
          </a>
        </div>
      </section>
    </main>
  );
}


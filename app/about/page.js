
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Zamin Abbas',
  description: 'Helping Businesses Grow with SEO, Web Development & Digital Marketing',
};

export default function About() {
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <div className="subtitle">Helping Businesses Grow with SEO, Web Development & Digital Marketing</div>
          <p>
            I'm Zamin Abbas, a results-driven digital specialist focused on helping businesses grow online through powerful Local SEO strategies, high-performance websites, and data-driven marketing. My approach is simple — increase visibility, drive targeted traffic, and convert visitors into paying customers.
          </p>
          <Link href="/contact" className="cta-btn">
            Work With Me →
          </Link>
        </div>
      </section>

      <section className="container">
        <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '30px' }}>Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Local SEO</h3>
            <p>Dominate local search results and Google Maps with optimized listings, local keyword strategies, and citation building.</p>
          </div>
          <div className="expertise-card">
            <h3>Web Development</h3>
            <p>I design fast, responsive, and modern websites optimized for performance, user experience, and conversions.</p>
          </div>
          <div className="expertise-card">
            <h3>Social Media Marketing</h3>
            <p>Grow your brand and engage your audience through targeted campaigns, content strategy, and performance tracking.</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '20px' }}>Why Choose Me</h2>
        <ul className="choose-list">
          <li>✔ Data-driven strategies</li>
          <li>✔ 10+ successful projects</li>
          <li>✔ Conversion-focused design</li>
          <li>✔ SEO + Development combined</li>
          <li>✔ Long-term growth focus</li>
        </ul>
      </section>

      <section className="container" style={{ paddingTop: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '20px' }}>My Approach</h2>
        <p style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto', color: '#475569', lineHeight: '1.8' }}>
          I believe in combining strategy, design, and performance. Every project starts with research, followed by implementation, optimization, and continuous improvement. My goal is not just to build websites or rank keywords — but to create systems that generate real business results.
        </p>
        <div className="approach-grid">
          <div className="step-item">1. Research & Analysis</div>
          <div className="step-item">2. Strategy Planning</div>
          <div className="step-item">3. Execution</div>
          <div className="step-item">4. Optimization</div>
          <div className="step-item">5. Growth Tracking</div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Let's build a strong online presence that drives real results.</p>
          <Link href="/contact" className="btn">
            Get Started →
          </Link>
        </div>
      </section>
    </main>
  );
}


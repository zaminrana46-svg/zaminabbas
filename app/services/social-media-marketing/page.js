
import Link from 'next/link';

export default function SocialMediaMarketing() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Social Media Marketing Services</h1>
          <p>Build your brand presence and engage your audience on social platforms.</p>
        </div>
      </section>
      <section className="service-content">
        <div className="container">
          <h2>Grow Your Social Media Impact</h2>
          <p>
            I create strategic social media campaigns that build brand awareness, increase engagement, and drive conversions. From content creation to community management and performance tracking, I help you succeed on every platform.
          </p>
          <ul>
            <li>✓ Social Media Strategy</li>
            <li>✓ Content Creation & Scheduling</li>
            <li>✓ Community Management</li>
            <li>✓ Paid Social Campaigns</li>
            <li>✓ Analytics & Reporting</li>
          </ul>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>Ready to start your project?</h2>
          <Link href="/contact" className="btn">
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}


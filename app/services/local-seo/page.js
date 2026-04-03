
import Link from 'next/link';

export default function LocalSEO() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Local SEO Services</h1>
          <p>Rank higher on Google Maps and attract local customers.</p>
        </div>
      </section>
      <section className="service-content">
        <div className="container">
          <h2>Grow Your Business Locally</h2>
          <p>
            I help businesses dominate local search results through powerful Local SEO strategies. From optimizing your Google Business Profile to building high-quality local citations, I ensure your business appears where your customers are searching.
          </p>
          <ul>
            <li>✓ Google Business Profile Optimization</li>
            <li>✓ Local Keyword Targeting</li>
            <li>✓ Citation Building</li>
            <li>✓ Map Ranking Strategies</li>
            <li>✓ Competitor Analysis</li>
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


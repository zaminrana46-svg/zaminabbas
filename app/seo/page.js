
import Link from 'next/link';

export const metadata = {
  title: 'SEO Services | zamin abbas',
  description: 'Complete SEO services to boost your search rankings and organic traffic.',
};

export default function SEO() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg-shape"></div>
        <div className="hero-left">
          <div className="hero-eyebrow">SEO Services</div>
          <h1>
            Boost Your<br />
            <span>Search Rankings</span>
            <br />
            Today
          </h1>
          <p>
            Improve your website&apos;s visibility in search engines with our comprehensive SEO services. Drive more organic traffic and increase conversions with proven strategies.
          </p>
          <Link href="#contact" className="btn-orange">
            Get SEO Audit â†’
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">
            Complete <span>SEO</span> Solutions
          </h2>

          <p>
            Search Engine Optimization (SEO) is essential for any business wanting to increase online visibility and attract more customers. Our SEO services cover all aspects of optimization to help your website rank higher in search results.
          </p>

          <h3>Our SEO Services Include:</h3>
          <ul>
            <li>Keyword research and analysis</li>
            <li>On-page optimization</li>
            <li>Technical SEO audits</li>
            <li>Content creation and optimization</li>
            <li>Link building strategies</li>
            <li>Local SEO optimization</li>
            <li>SEO reporting and analytics</li>
            <li>Competitor analysis</li>
          </ul>

          <h3>Why Choose Our SEO Services?</h3>
          <ul>
            <li>Increased organic search traffic</li>
            <li>Higher search engine rankings</li>
            <li>Improved user experience</li>
            <li>Long-term sustainable results</li>
            <li>Data-driven approach</li>
          </ul>

          <p>Ready to improve your search rankings? Let&apos;s work together to create an SEO strategy that drives real results for your business.</p>

          <Link href="/contact" className="btn-orange">
            Start SEO Campaign â†’
          </Link>
        </div>
      </section>
    </>
  );
}




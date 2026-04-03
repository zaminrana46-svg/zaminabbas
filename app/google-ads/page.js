
import Link from 'next/link';

export const metadata = {
  title: 'Google Ads Services | zamin abbas',
  description: 'Drive qualified traffic and boost sales with expert Google Ads campaigns.',
};

export default function GoogleAds() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg-shape"></div>
        <div className="hero-left">
          <div className="hero-eyebrow">Google Ads Services</div>
          <h1>
            Get Qualified Traffic<br />
            <span>Instantly</span>
          </h1>
          <p>
            Accelerate your business growth with strategic Google Ads campaigns. Drive targeted traffic, increase conversions, and maximize your ROI with expert management and optimization.
          </p>
          <Link href="/contact" className="btn-orange">
            Get Started →
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <span className="section-tag">Google Ads Expertise</span>
          <h2 className="section-title">
            Drive Sales With <span>Google Ads</span>
          </h2>

          <p>
            Google Ads is one of the fastest ways to get your business in front of potential customers. I create, manage, and optimize campaigns across Search, Display, Shopping, and YouTube to maximize your ROI.
          </p>

          <h3>Google Ads Services Include:</h3>
          <ul>
            <li>Search Ads Campaign Management</li>
            <li>Display Network Advertising</li>
            <li>Google Shopping Campaigns</li>
            <li>YouTube Ads Strategy</li>
            <li>Remarketing Campaigns</li>
            <li>Keyword Research & Targeting</li>
            <li>Ad Copy Optimization</li>
            <li>Bid Strategy Management</li>
            <li>Performance Tracking & Reporting</li>
          </ul>

          <h3>Why Choose Our Google Ads Services?</h3>
          <ul>
            <li>Immediate visibility and traffic</li>
            <li>Highly targeted campaigns</li>
            <li>Optimized for conversions</li>
            <li>Transparent reporting</li>
            <li>Continuous optimization</li>
            <li>Budget efficiency</li>
          </ul>

          <p>Ready to drive more qualified traffic and boost sales? Let's create a Google Ads strategy that delivers real results.</p>

          <Link href="/contact" className="btn-orange">
            Start Google Ads Campaign →
          </Link>
        </div>
      </section>
    </>
  );
}


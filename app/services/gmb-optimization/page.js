
import Link from 'next/link';

export default function GMBOptimization() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>GMB Optimization Services</h1>
          <p>Maximize your Google Business Profile visibility and local rankings.</p>
        </div>
      </section>
      <section className="service-content">
        <div className="container">
          <h2>Dominate Google Maps & Local Search</h2>
          <p>
            Google Business Profile optimization is essential for local visibility. I optimize your business listing, manage reviews, enhance posts, and implement strategies to boost your rankings on Google Maps and local search results.
          </p>
          <ul>
            <li>✔ Profile Optimization</li>
            <li>✔ Review Management</li>
            <li>✔ Photo & Video Optimization</li>
            <li>✔ Posts Strategy</li>
            <li>✔&A Management</li>
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




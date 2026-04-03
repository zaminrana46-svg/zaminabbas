
import Link from 'next/link';

export default function WebDevelopment() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Web Development Services</h1>
          <p>Build fast, modern, and conversion-focused websites.</p>
        </div>
      </section>
      <section className="service-content">
        <div className="container">
          <h2>Custom Web Development That Converts</h2>
          <p>
            I design and develop responsive, high-performance websites that deliver exceptional user experiences. Every website is optimized for speed, SEO, and conversions to ensure your business achieves its goals online.
          </p>
          <ul>
            <li>✓ Responsive Web Design</li>
            <li>✓ WordPress Development</li>
            <li>✓ Custom Web Applications</li>
            <li>✓ E-commerce Solutions</li>
            <li>✓ Performance Optimization</li>
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


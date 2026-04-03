
import Link from 'next/link';

export default function TechnicalSEO() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>Technical SEO Services</h1>
          <p>Optimize your website&apos;s technical foundation for search engines.</p>
        </div>
      </section>
      <section className="service-content">
        <div className="container">
          <h2>Fix Technical Issues, Boost Rankings</h2>
          <p>
            Technical SEO ensures your website is optimized for search engine crawling and indexing. I conduct comprehensive audits, fix crawl errors, optimize site speed, improve mobile responsiveness, and implement structured data to enhance your search visibility.
          </p>
          <ul>
            <li>✔ Website Speed Optimization</li>
            <li>✔ Mobile-Friendly Testing</li>
            <li>✔ XML Sitemaps & Robots.txt</li>
            <li>✔ Schema Markup Implementation</li>
            <li>✔ Core Web Vitals Optimization</li>
          </ul>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <h2>Ready to start your project?</h2>
          <Link href="/contact" className="btn">
            Get Started â†’
          </Link>
        </div>
      </section>
    </>
  );
}




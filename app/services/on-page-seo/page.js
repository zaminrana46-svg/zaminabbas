
import Link from 'next/link';

export default function OnPageSEO() {
  return (
    <>
      <section className="service-hero">
        <div className="container">
          <h1>On-Page SEO Services</h1>
          <p>Optimize every page element for search engine visibility.</p>
        </div>
      </section>
      <section className="service-content">
        <div className="container">
          <h2>Optimize Your Pages for Rankings</h2>
          <p>
            On-page SEO ensures each page is fully optimized for target keywords and search engines. I optimize meta tags, headings, content structure, internal links, and user experience signals to improve your rankings and click-through rates.
          </p>
          <ul>
            <li>✔ Keyword Research & Targeting</li>
            <li>✔ Meta Tags Optimization</li>
            <li>✔ Content Optimization</li>
            <li>✔ Internal Linking Strategy</li>
            <li>✔ User Experience Optimization</li>
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




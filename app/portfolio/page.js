
export const metadata = {
  title: 'Portfolio | Zamin Abbas - SEO Specialist',
  description: 'Real websites designed and optimized for performance and growth.',
};

export default function Portfolio() {
  const portfolioItems = [
    {
      link: 'https://maps.app.goo.gl/wtqznxrT44FBifxQ6',
      tag: 'Web + SEO',
      date: 'October 2024',
      title: 'City Dental Care – Conversion-focused Website',
      description: 'Custom design, speed optimization, local SEO, and 80% more calls in 60 days.',
    },
    {
      link: 'https://sparksails.com/pk/',
      tag: 'WEB PROJECT',
      date: 'July 2025',
      title: 'Sparksails Pakistan – Digital Marketing Agency',
      description: 'Modern agency website showcasing services, portfolio, and client success stories with strong conversion focus.',
    },
    {
      link: 'https://kaprikidsdaycare.pk/',
      tag: 'WEB PROJECT',
      date: 'June 2025',
      title: 'Kapri Kids Daycare – Child-friendly Conversion Experience',
      description: 'Colorful parent-focused site with service detail pages, trust-building testimonials, and playful visual patterns.',
    },
  ];

  return (
    <section className="portfolio" id="projects">
      <div className="portfolio-hdr">
        <div>
          <span className="section-tag">PROJECT PORTFOLIO</span>
          <h2 className="section-title">
            Selected<br />
            <span>Case Studies</span>
          </h2>
          <p>Real websites designed and optimized for performance and growth.</p>
        </div>
      </div>

      <div className="port-grid">
        {portfolioItems.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer" className="port-card sr">
            <div className="port-overlay">
              <span className="port-ob">Visit Website →</span>
            </div>
            <div className="port-meta">
              <span className="port-tag">{item.tag}</span>
              <span className="port-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="port-cta">Visit Website →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}




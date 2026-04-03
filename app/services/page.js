
import Link from 'next/link';

export const metadata = {
  title: 'All Services | zamin abbas',
  description: 'Comprehensive SEO, web development, and digital marketing services.',
};

export default function Services() {
  const services = [
    {
      number: '01',
      icon: '📍',
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers with targeted local SEO strategies.',
      link: '/services/local-seo/',
    },
    {
      number: '02',
      icon: '📣',
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience with strategic social media campaigns.',
      link: '/services/social-media-marketing/',
    },
    {
      number: '03',
      icon: '⚙️',
      title: 'Technical SEO',
      description: 'Fix technical issues that hinder your site\'s performance and ensure optimal crawling and indexing.',
      link: '/services/technical-seo/',
    },
    {
      number: '04',
      icon: '🌐',
      title: 'Web Development',
      description: 'Build modern, fast, and responsive websites that deliver exceptional user experiences and conversions.',
      link: '/services/web-development/',
    },
    {
      number: '05',
      icon: '🧩',
      title: 'On-Page SEO',
      description: 'Optimize every page for search engines with keyword research, meta tags, and content structure improvements.',
      link: '/services/on-page-seo/',
    },
    {
      number: '06',
      icon: '⭐',
      title: 'GMB Optimization',
      description: 'Maximize local visibility with Google Business Profile optimization and reputation management.',
      link: '/services/gmb-optimization/',
    },
    {
      number: '07',
      icon: '🔎',
      title: 'SEO Strategy',
      description: 'Implement a full SEO plan, from technical audits to content and link building, for long-term growth.',
      link: '/seo',
    },
    {
      number: '08',
      icon: '💼',
      title: 'Google Ads',
      description: 'Drive qualified traffic fast with data-driven Google Ads campaigns and budget-optimized ROI.',
      link: '/google-ads',
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-title">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">All <span>Services</span></h2>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-num">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.link} className="service-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


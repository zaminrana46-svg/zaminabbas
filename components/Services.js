'use client';

import Link from 'next/link';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      number: '01',
      icon: '/images/local-seo.svg',
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers with targeted local SEO strategies.',
      link: '/services/local-seo/',
    },
    {
      number: '02',
      icon: '/images/social-media.svg',
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience with strategic social media marketing campaigns.',
      link: '/services/social-media-marketing/',
    },
    {
      number: '03',
      icon: '/images/technical-seo.svg',
      title: 'Technical SEO',
      description: 'Fix technical issues that hinder your site\'s performance and ensure optimal crawling and indexing.',
      link: '/services/technical-seo/',
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-hdr">
        <span className="section-tag" style={{ justifyContent: 'center' }}>Services That Drive Results</span>
        <h2 className="section-title" style={{ marginTop: '.5rem' }}>Services That <span>Drive Results</span></h2>
      </div>
      <div className="services-grid sr">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
}




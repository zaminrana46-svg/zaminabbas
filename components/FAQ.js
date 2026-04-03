'use client';

import Link from 'next/link';

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq-wrap">
        <div className="faq-left-col sr">
          <span className="section-tag">Want to Learn More?</span>
          <h2 className="section-title">Frequently<br />Asked <span>Questions</span></h2>
          <div className="faq-photo">
            <img src="/images/11.png" alt="Photo" className="faq-img" />
          </div>
        </div>
        <div className="faq-accordion sr d1">
          <div className="faq-item open">
            <button className="faq-q" onClick={(e) => window.faqToggle(e.target.closest('.faq-q'))}>
              What services do you offer as an SEO specialist?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">I offer complete SEO solutions including technical audits, on-page and off-page optimization, keyword research, content strategy, and performance tracking to drive sustainable organic growth.</div>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" onClick={(e) => window.faqToggle(e.target.closest('.faq-q'))}>
              How long does it take to see results from SEO?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">Most clients start seeing noticeable improvements within 3 to 6 months, depending on competition, current site health, and the strategy implemented.</div>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" onClick={(e) => window.faqToggle(e.target.closest('.faq-q'))}>
              Do you offer custom SEO packages?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">Yes. Every business has unique needs, so I offer tailored packages based on your industry, goals, and budget. Contact me to discuss your specific requirements.</div>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" onClick={(e) => window.faqToggle(e.target.closest('.faq-q'))}>
              Who is the best SEO expert in Pakistan?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">Ranking among the top 1% of SEO experts in Pakistan, backed by over a decade of hands-on experience and 500+ global verified reviews with consistently measurable organic growth results.</div>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-q" onClick={(e) => window.faqToggle(e.target.closest('.faq-q'))}>
              Do you provide after-project support?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">Absolutely. I provide ongoing monitoring and monthly reporting for all SEO projects to ensure continued improvement and ROI tracking over time.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


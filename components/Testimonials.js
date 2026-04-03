'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Feroz',
      initials: 'AF',
      text: '"Learning SEO was a great experience. The teaching style is very clear and easy to follow, even for beginners. Real-life examples and practical assignments really help. Highly recommend!"',
    },
    {
      name: 'Qazi Emad',
      initials: 'QE',
      text: '"Professional, responsive, and showed deep understanding of business needs. Focus on keyword strategy and technical SEO was critical in driving long-term organic growth. Highly recommended!"',
    },
    {
      name: 'Aun Abbas',
      initials: 'AA',
      text: '"Outstanding mentorship in my SEO learning journey. Deep knowledge, clear explanations, and hands-on approach made complex concepts easy to understand. Projects were incredibly insightful!"',
    },
    {
      name: 'Jhanzaib Moiz',
      initials: 'JM',
      text: '"Exceptional SEO agency in Karachi. Expertise has significantly improved our online visibility and traffic. The team is professional, responsive, and delivers results. Highly recommend!"',
    },
    {
      name: 'Sarah Mitchell',
      initials: 'SM',
      text: '"Remarkable SEO expertise paired with excellent communication. Delivered measurable results that transformed our search rankings. Highly professional and trustworthy. 5 stars!"',
    },
    {
      name: 'Rizwan Hassan',
      initials: 'RH',
      text: '"Best decision for our digital growth. The strategic approach and hands-on support made a real difference. Results exceeded expectations. Highly endorse his services!"',
    },
  ];

  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="testimonial-heading">Proven Results, <span>Happy Clients</span></h2>
      <div className="testimonial-container">
        <div className="testimonial-left">
          <p className="stars">★★★★★</p>
          <p className="google">Based on 55 reviews on Google</p>
        </div>

        <div className="carousel">
          <div className="carousel-track">
            {testimonials.map((t, i) => (
              <div key={i} className="testi-card sr">
                <div className="tc-top">
                  <span className="tc-platform">Google</span>
                  <span className="tc-stars">★★★★★</span>
                </div>
                <p>{t.text}</p>
                <div className="tc-author">
                  <div className="tc-av">{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>Verified Google Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testi-controls">
          <button id="prevTestimonial" aria-label="Previous testimonial">‹</button>
          <button id="nextTestimonial" aria-label="Next testimonial">›</button>
        </div>
      </div>
    </section>
  );
}


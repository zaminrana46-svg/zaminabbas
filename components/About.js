'use client';

import Link from 'next/link';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-row">
          <div className="about-img-col">
            <img src="/images/13.png" alt="Zamin Abbas" className="about-profile-img" />
          </div>

          <div className="about-content">
            <span className="about-tag">ABOUT ME</span>
            <h2>Driving Growth With Smart SEO & Web Solutions</h2>

            <p className="about-desc">
              I'm Zamin Abbas, an SEO specialist and web developer helping businesses grow online through data-driven strategies and high-performance websites.
            </p>

            <ul className="about-points">
              <li>✔ 10+ Years SEO Experience</li>
              <li>✔ 500+ Websites Ranked</li>
              <li>✔ Top Rated Freelancer</li>
              <li>✔ Expertise in Local & Technical SEO</li>
            </ul>

            <Link href="#contact" className="btn-hire">
              Hire Me →
            </Link>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Websites Ranked</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-card">
            <h3>5★</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import Image from 'next/image';

export default function Hero({ subtitle, title, titleSpan, bullets, image, imageSrc, showCTA = false }) {
  return (
    <section className="hero">
      <div className="hero-text">
        {subtitle && <div className="hero-eyebrow">{subtitle}</div>}
        <h1>
          {title}
          {titleSpan && <span> {titleSpan}</span>}
        </h1>
        {bullets && (
          <ul className="hero-bullets">
            {bullets.map((bullet, i) => (
              <li key={i}>
                <span className="bullet-check">✔</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {showCTA && (
          <a href="#contact" className="btn-hire">
            Hire Me →
          </a>
        )}
      </div>
      {imageSrc && (
        <div className="hero-image">
          <div className="hero-photo">
            <Image src={imageSrc} alt={image} className="hero-photo-inner" width={720} height={650} />
          </div>
        </div>
      )}
    </section>
  );
}




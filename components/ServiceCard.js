'use client';

import Link from 'next/link';

export default function ServiceCard({ number, icon, title, description, link }) {
  return (
    <div className="svc-card">
      <div className="svc-num">{number}</div>
      <div className="svc-icon">
        <img src={icon} alt={title} className="svc-img" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} className="svc-link">
        Learn More →
      </Link>
    </div>
  );
}


'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ServiceCard({ number, icon, title, description, link }) {
  return (
    <div className="svc-card">
      <div className="svc-num">{number}</div>
      <div className="svc-icon">
        <Image src={icon} alt={title} className="svc-img" width={50} height={50} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} className="svc-link">
        Learn More →
      </Link>
    </div>
  );
}




'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ThanksyouBand() {
  return (
    <div className="ty-band">
      <div className="ty-left sr">
        <span className="section-tag">Thank You for Visiting</span>
        <h2 className="section-title">I&apos;m Here to Help<br />You <span>Grow Smarter</span></h2>
        <p>Thank you for visiting. I&apos;m here to help you grow smarter, rank higher, and achieve lasting digital success. Let&apos;s build something impactful together.</p>
        <div className="ty-sig">
          <div className="ty-av">🤝</div>
          <div>
            <strong>zamin abbas</strong>
          </div>
        </div>
        <Link href="#contact" className="btn-orange" style={{ marginTop: '2rem' }}>
          Start a Project →
        </Link>
      </div>
      <div className="ty-right sr d1">
        <div className="ty-photo">
          <Image src="/images/14.png" alt="Photo" className="ty-img" width={500} height={500} />
        </div>
        <div className="ty-badge">
          <strong>500+</strong>
          <span>Happy Clients</span>
        </div>
      </div>
    </div>
  );
}




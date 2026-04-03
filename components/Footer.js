'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.fTop}>
        <div style={footerStyles.fCol}>
          <Link href="/" style={footerStyles.fLogo}>zamin abbas</Link>
          <p style={footerStyles.fDesc}>A growth-focused specialist helping businesses establish powerful online presences and achieve measurable results through data-driven digital strategies.</p>
          <div style={footerStyles.fSocials}>
            <a href="#" style={footerStyles.fSoc}>f</a>
            <a href="#" style={footerStyles.fSoc}>in</a>
            <a href="#" style={footerStyles.fSoc}>tw</a>
            <a href="#" style={footerStyles.fSoc}>ig</a>
          </div>
        </div>
        <div style={footerStyles.fCol}>
          <h4>Quick Links</h4>
          <ul style={footerStyles.fLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div style={footerStyles.fCol}>
          <h4>Services</h4>
          <ul style={footerStyles.fLinks}>
            <li><Link href="/services/local-seo">Local SEO</Link></li>
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/technical-seo">Technical SEO</Link></li>
            <li><Link href="/services/social-media-marketing">Social Media</Link></li>
          </ul>
        </div>
        <div style={footerStyles.fCol}>
          <h4>Contact</h4>
          <div style={footerStyles.fCi}>
            <div>📍 Matro Station, Pracha Street, Multan, Pakistan</div>
            <div>📧 <a href="mailto:digitalmarketingskills46@gmail.com" style={footerStyles.fCiLink}>digitalmarketingskills46@gmail.com</a></div>
            <div>📱 <a href="tel:+923042828068" style={footerStyles.fCiLink}>+92 304 282 8068</a></div>
            <div>💬 <a href="https://wa.me/923042828068" target="_blank" style={footerStyles.fCiLink}>WhatsApp</a></div>
          </div>
        </div>
      </div>
      <div style={footerStyles.fBottom}>
        <span>Copyright © 2026 – <Link href="/">zamin abbas</Link>. All Rights Reserved.</span>
        <span><Link href="/privacy">Privacy</Link> – <Link href="/terms">Terms</Link></span>
      </div>
    </footer>
  );
}

const footerStyles = {
  footer: {
    background: '#0b1220',
    color: '#ffffff',
    padding: '60px 5%',
  },
  fTop: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '30px',
    rowGap: '40px',
    marginBottom: '40px',
  },
  fCol: {
    paddingRight: '10px',
  },
  fLogo: {
    display: 'inline-block',
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#ff6a00',
    marginBottom: '12px',
    textDecoration: 'none',
  },
  fDesc: {
    color: '#d1d5db',
    lineHeight: '1.7',
    fontSize: '14px',
    marginBottom: '16px',
  },
  fSocials: {
    display: 'flex',
    gap: '10px',
  },
  fSoc: {
    width: '34px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.12)',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 700,
  },
  fLinks: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  fCi: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    color: '#d1d5db',
    fontSize: '14px',
    lineHeight: '1.8',
  },
  fCiLink: {
    color: '#ff6a00',
    textDecoration: 'none',
  },
  fBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    paddingTop: '20px',
    textAlign: 'center',
    color: '#a1a6b3',
    fontSize: '13px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
};




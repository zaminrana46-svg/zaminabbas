'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={navStyles.nav}>
      <Link href="/" style={navStyles.logo}>zamin abbas</Link>
      <ul style={navStyles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li style={navStyles.liDropdown}>
          <Link href="/services">Services</Link>
          <div style={navStyles.dropdownMenu}>
            <Link href="/services/local-seo">Local SEO</Link>
            <Link href="/services/gmb-optimization">GMB Optimization</Link>
            <Link href="/services/on-page-seo">On-Page SEO</Link>
            <Link href="/services/technical-seo">Technical SEO</Link>
            <Link href="/services/social-media-marketing">Social Media Marketing</Link>
            <Link href="/services/web-development">Web Development</Link>
          </div>
        </li>
        <li><Link href="/portfolio">Projects</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Link href="/contact" style={navStyles.navBtn}>Let&apos;s Talk</Link>
    </nav>
  );
}

const navStyles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 9999,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #dbe2ec',
    padding: '0 5%',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: '1.55rem',
    fontWeight: 900,
    letterSpacing: '1px',
    color: '#ff6a00',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  liDropdown: {
    position: 'relative',
  },
  dropdownMenu: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    background: '#ffffff',
    border: '1px solid #dbe2ec',
    borderRadius: '8px',
    minWidth: '220px',
    flexDirection: 'column',
    padding: '0.5rem 0',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    zIndex: 999,
  },
  navBtn: {
    background: '#ff6a00',
    color: '#fff',
    padding: '0.48rem 1.4rem',
    borderRadius: '8px',
    fontSize: '0.84rem',
    fontWeight: 700,
    letterSpacing: '0.5px',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};




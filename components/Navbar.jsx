'use client';

import { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';

const servicesLinks = [
  { href: '/services/local-seo', label: 'Local SEO' },
  { href: '/services/gmb-optimization', label: 'GMB Optimization' },
  { href: '/services/on-page-seo', label: 'On-Page SEO' },
  { href: '/services/technical-seo', label: 'Technical SEO' },
  { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
  { href: '/services/web-development', label: 'Web Development' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href="/" className="logo" aria-label="Home" onClick={() => setMobileOpen(false)}>
            zamin abbas
          </Link>
          <button className="mobile-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open Menu">
            ☰
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li
            className="nav-item-services"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <Link href="/services">Services</Link>
            <Dropdown open={desktopDropdownOpen} links={servicesLinks} onLinkClick={() => setMobileOpen(false)} />
          </li>
          <li>
            <Link href="/portfolio">Projects</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <Link href="/contact" className="nav-button">
          Let's Talk
        </Link>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} servicesOpen={servicesOpen} setServicesOpen={setServicesOpen} />
    </header>
  );
}

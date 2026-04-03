'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link href="/" className="logo" aria-label="Home" onClick={() => setMobileOpen(false)}>
            zamin abbas
          </Link>
        </div>

        <button className="mobile-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open Menu">
          ☰
        </button>

        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
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
          Let&apos;s Talk
        </Link>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}


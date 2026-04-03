'use client';

import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose }) {
  const mobileLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!isOpen}>
      <div className="mobile-menu-overlay" onClick={onClose} />
      <div className="mobile-menu-content">
        <div className="mobile-menu-header">
          <Link href="/" className="logo" onClick={onClose}>
            zamin abbas
          </Link>
          <button className="close-btn" onClick={onClose} aria-label="Close Menu">
            ✕
          </button>
        </div>

        <nav className="mobile-nav-list">
          {mobileLinks.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-link" onClick={onClose}>
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="mobile-cta" onClick={onClose}>
            Send Request
          </Link>
        </nav>
      </div>
    </div>
  );
}



'use client';

import Link from 'next/link';

export default function MobileMenu({ isOpen, onClose, servicesOpen, setServicesOpen }) {
  const mobileLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const servicesLinks = [
    { href: '/services/local-seo', label: 'Local SEO' },
    { href: '/services/gmb-optimization', label: 'GMB Optimization' },
    { href: '/services/on-page-seo', label: 'On-Page SEO' },
    { href: '/services/technical-seo', label: 'Technical SEO' },
    { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
    { href: '/services/web-development', label: 'Web Development' },
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

          <button className="mobile-accordion-btn" onClick={() => setServicesOpen((value) => !value)}>
            Services <span>{servicesOpen ? '−' : '+'}</span>
          </button>
          <div className={`mobile-accordion-panel ${servicesOpen ? 'expanded' : ''}`}>
            {servicesLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={() => {
                  onClose();
                  setServicesOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="mobile-cta" onClick={onClose}>
            Send Request
          </Link>
        </nav>
      </div>
    </div>
  );
}

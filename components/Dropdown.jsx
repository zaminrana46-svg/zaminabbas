'use client';

import Link from 'next/link';

export default function Dropdown({ open, links, onLinkClick }) {
  return (
    <div className={`desktop-dropdown ${open ? 'open' : ''}`}> 
      {links.map((link) => (
        <Link key={link.href} href={link.href} onClick={onLinkClick}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

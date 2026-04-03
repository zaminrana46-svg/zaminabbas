'use client';

import Link from 'next/link';

export default function Dropdown({ open, links, onLinkClick }) {
  return (
    <ul className={`dropdown ${open ? 'open' : ''}`}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} onClick={onLinkClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}



'use client';

import { useEffect } from 'react';

export default function LayoutClient({ children }) {
  useEffect(() => {
    // Initialize scroll reveal animation
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.sr').forEach(el => obs.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // FAQ toggle
    window.faqToggle = function (btn) {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        const faqA = i.querySelector('.faq-a');
        if (faqA) faqA.style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        const faqA = item.querySelector('.faq-a');
        if (faqA) faqA.style.maxHeight = faqA.scrollHeight + 'px';
      }
    };

    // Initialize open FAQ items
    document.querySelectorAll('.faq-item.open').forEach(i => {
      const faqA = i.querySelector('.faq-a');
      if (faqA) faqA.style.maxHeight = faqA.scrollHeight + 'px';
    });

    return () => {
      obs.disconnect();
    };
  }, []);

  return <>{children}</>;
}


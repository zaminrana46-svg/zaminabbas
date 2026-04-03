import Link from 'next/link';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Zamin Abbas | Top Ranked SEO Specialist Pakistan',
  description: 'Top-ranked SEO specialist in Pakistan with 10+ years experience. Offering local SEO, web development, and digital marketing to help businesses grow online.',
  keywords: 'SEO specialist, Local SEO, Web Development, Digital Marketing, Pakistan, Technical SEO',
  authors: [{ name: 'Zamin Abbas' }],
  openGraph: {
    title: 'Zamin Abbas | Top Ranked SEO Specialist Pakistan',
    description: 'Boost your business with expert SEO, web development, and digital marketing strategies. 10+ years experience, 500+ websites ranked.',
    type: 'website',
    url: 'https://zaminabbas.com/',
    images: [{ url: 'https://zaminabbas.com/13.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zamin Abbas | Top Ranked SEO Specialist',
    description: 'Expert SEO and web development services. Ranked top 1% in Pakistan.',
  },
};

function Footer() {
  return (
    <footer className="footer">
      <div className="f-top">
        <div className="f-col">
          <Link href="/" className="f-logo">zamin abbas</Link>
          <p className="f-desc">A growth-focused specialist helping businesses establish powerful online presences and achieve measurable results through data-driven digital strategies.</p>
          <div className="f-socials">
            <a href="#" className="f-soc">f</a>
            <a href="#" className="f-soc">in</a>
            <a href="#" className="f-soc">tw</a>
            <a href="#" className="f-soc">ig</a>
          </div>
        </div>
        <div className="f-col">
          <h4>Quick Links</h4>
          <ul className="f-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="f-col">
          <h4>Services</h4>
          <ul className="f-links">
            <li><Link href="/services/local-seo">Local SEO</Link></li>
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/technical-seo">Technical SEO</Link></li>
            <li><Link href="/services/social-media-marketing">Social Media</Link></li>
          </ul>
        </div>
        <div className="f-col">
          <h4>Contact</h4>
          <div className="f-ci">
            <div>📍 Matro Station, Pracha Street, Multan, Pakistan</div>
            <div>✉️ <a href="mailto:digitalmarketingskills46@gmail.com" className="f-ci-link">digitalmarketingskills46@gmail.com</a></div>
            <div>📱 <a href="tel:+923042828068" className="f-ci-link">+92 304 282 8068</a></div>
            <div>💬 <a href="https://wa.me/923042828068" target="_blank" rel="noreferrer" className="f-ci-link">WhatsApp</a></div>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <span>Copyright © 2026 – <Link href="/">zamin abbas</Link>. All Rights Reserved.</span>
        <span><Link href="/privacy">Privacy</Link> – <Link href="/terms">Terms</Link></span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6a00" />
        <link rel="canonical" href="https://zaminabbas.com/" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <a href="https://wa.me/923042828068" target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="WhatsApp Chat">💬</a>
      </body>
    </html>
  );
}



import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | zamin abbas',
  description: 'Real-world case studies showing our SEO and web development results.',
};

export default function CaseStudies() {
  return (
    <div className="container">
      <h1>Case Studies</h1>
      <p>Here are example results from our SEO and web optimization campaigns.</p>

      <div className="card">
        <h2>Brand A Growth</h2>
        <p>120% traffic increase in 6 months with on-page & technical SEO improvements.</p>
      </div>

      <div className="card">
        <h2>Local Shop B Boost</h2>
        <p>Local SEO + Google My Business optimization drove 70% more bookings.</p>
      </div>

      <div className="card">
        <h2>Ecommerce C Conversion</h2>
        <p>UX and speed optimization increased conversions by 38% for paid & organic traffic.</p>
      </div>

      <Link href="/portfolio">â† Back to Portfolio</Link>
    </div>
  );
}




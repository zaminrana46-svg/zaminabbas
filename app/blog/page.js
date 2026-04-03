
import Link from 'next/link';

export const metadata = {
  title: 'Blog | zamin abbas',
  description: 'Read articles and insights on SEO, web development, and digital marketing.',
};

export default function Blog() {
  return (
    <div className="container">
      <h1>Blog</h1>
      <p>Insights and articles on SEO, web development, and digital marketing strategies.</p>
      
      <div className="article">
        <h2>Top SEO Trends for 2024</h2>
        <p>Stay ahead of the curve with these essential SEO trends and strategies for the upcoming year.</p>
      </div>

      <div className="article">
        <h2>Web Development Best Practices</h2>
        <p>Learn the best practices for building fast, secure, and user-friendly websites.</p>
      </div>

      <div className="article">
        <h2>Local SEO Strategy Guide</h2>
        <p>Complete guide to dominating local search results and Google Maps rankings.</p>
      </div>

      <Link href="/portfolio">← Back to Portfolio</Link>
    </div>
  );
}


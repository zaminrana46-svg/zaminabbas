import Hero from '../components/Hero';
import BrandStrip from '../components/BrandStrip';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ThankYouBand from '../components/ThankYouBand';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Zamin Abbas | Top Ranked SEO Specialist Pakistan',
  description: 'Top-ranked SEO specialist in Pakistan with 10+ years of experience offering local SEO, web development, and digital marketing.',
};

export default function Home() {
  return (
    <main>
      <Hero
        title="Grow Fast, Rank Higher"
        titleSpan="Proven SEO & Web Development"
        bullets={[
          '250+ high-impact websites optimized',
          'Local SEO + conversion-focused design',
        ]}
        image="Zamin Abbas"
        imageSrc="/images/10.png"
        showCTA={true}
      />

      <BrandStrip />
      <About />
      <Services />
      <Testimonials />
      <ThankYouBand />
      <FAQ />

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Do You Want To Boost Your Business?</h2>
              <p>Connect with me and get a customized SEO and web strategy.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

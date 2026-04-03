
import Link from 'next/link';
import Hero from '../components/Hero';
import BrandStrip from '../components/BrandStrip';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ThankYouBand from '../components/ThankYouBand';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero
        subtitle="Top Ranked Specialist"
        title="Pakistan's"
        titleSpan="Top Ranked SEO Specialist"
        bullets={[
          '10+ Years of SEO Experience',
          'Ranked in Top SEO Experts in Pakistan',
          'Top Rated Freelancer on Fiverr & Upwork',
          '500+ International Reviews',
        ]}
        imageSrc="/images/10.png"
        image="Hero Image"
        showCTA={false}
      />

      <BrandStrip />

      <About />

      <Services />

      <Testimonials />

      <ThankYouBand />

      <FAQ />

      <section className="contact" id="contact">
        <div className="contact-wrap">
          <div className="contact-left sr">
            <span className="section-tag">Ready to Grow? Contact Me</span>
            <h2 className="section-title">
              Do You Want To<br />
              <span>Boost Your Business?</span>
            </h2>
            <p>Have a project in mind or need expert guidance? Let's connect to discuss your goals and build something impactful together.</p>
            <div className="contact-photo">
              <img src="/images/10.png" alt="Photo" className="contact-img" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}



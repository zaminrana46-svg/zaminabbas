'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="form-box sr d1" onSubmit={handleSubmit}>
      <h3>Do You Want To Boost Your Business?</h3>
      <p className="form-sub">Fill in the form and I&apos;ll get back to you within 24 hours.</p>
      <div className="form-row">
        <div className="fg">
          <label>Name *</label>
          <input type="text" name="name" placeholder="Your full name" required />
        </div>
        <div className="fg">
          <label>Email *</label>
          <input type="email" name="email" placeholder="your@email.com" required />
        </div>
      </div>
      <div className="form-row">
        <div className="fg">
          <label>Phone *</label>
          <input type="tel" name="phone" placeholder="+92 300 0000000" required />
        </div>
        <div className="fg">
          <label>Subject *</label>
          <input type="text" name="subject" placeholder="Project subject" required />
        </div>
      </div>
      <div className="fg">
        <label>Service Required</label>
        <select name="service" required>
          <option value="">Select a service</option>
          <option>Search Engine Optimization</option>
          <option>Website Development</option>
          <option>Google Ads</option>
          <option>SEO Training</option>
          <option>Other</option>
        </select>
      </div>
      <div className="fg">
        <label>Message *</label>
        <textarea name="message" placeholder="Tell me about your project and goals..." required></textarea>
      </div>
      <button className="form-btn" type="submit">
        {submitted ? '✔ Message Sent!' : 'Send Request →'}
      </button>
    </form>
  );
}




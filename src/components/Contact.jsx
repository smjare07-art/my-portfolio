"use client";

import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-wrap">
      <span className="section-pill">✦ Contact</span>

      <h2 className="contact-title">
        Let’s make something <br /> awesome together!
      </h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name*" />
        <input type="text" placeholder="Company Name" />
        <input type="email" placeholder="Email Address*" />
        <input type="text" placeholder="Phone Number*" />
        <textarea placeholder="A Few Words*" rows="4"></textarea>

        <button type="submit" className="send-btn">
          Send Message →
        </button>
      </form>

      <div className="contact-socials">
        <span>in</span>
        <span>Be</span>
        <span>◎</span>
        <span>▶</span>
        <span>P</span>
      </div>

      <p className="contact-text">
        Looking to elevate your product with intuitive and impactful design?
        I’d love to collaborate! If you're interested in hiring me as a UI/UX
        Designer or want to explore my design portfolio, drop me a mail and
        I’ll get back as soon as possible.
      </p>
    </section>
  );
}

"use client";

import "../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-wrap">
      <span className="section-pill">✦ Testimonials</span>

      <h2 className="testimonials-title">
        Office colleagues say <br /> about me
      </h2>

      <div className="testimonial-card">
        <div className="testimonial-header">
          <img src="/person1.jpg" alt="person" />
          <div>
            <h4>Kashish Manhas</h4>
            <p>Sr. Web Designer · Orient Outsourcing Consultants Pvt. Ltd.</p>
          </div>
        </div>

        <p className="testimonial-text">
          Working with Shantanu on web design projects has always been smooth.
          He’s creative, detail-oriented, and consistently delivers clean,
          responsive designs on time.
        </p>

        <a href="#" className="project-link">
          Project Page →
        </a>
      </div>

      <div className="testimonial-nav">
        <button>‹</button>
        <button>›</button>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import "../styles/about.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <section id="about" className="about-wrap">

      <motion.span
        className="section-pill"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        ✦ About Me
      </motion.span>

      <motion.h2
        className="about-title"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Building scalable systems <br /> with real-world impact
      </motion.h2>

      {/* STATS */}
      <div className="about-stats">
        {[
          { n: "8+", t: "Major Projects" },
          { n: "2", t: "Internships" },
          { n: "10+", t: "ML Experiments" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3>{s.n}</h3>
            <p>{s.t}</p>
          </motion.div>
        ))}
      </div>

      {/* MAIN INFO */}
      <div className="about-info">
        <motion.div
          className="about-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p>
            I’m a Computer Science student passionate about
            <strong> Artificial Intelligence, System Design, and Full Stack Development</strong>.
          </p>

          <p>
            I focus on building scalable software solutions —
            from CNN-based crop disease detection systems
            to production-ready ML web applications.
          </p>

          <p>
            My goal is to engineer impactful technology that solves
            real-world problems efficiently and at scale.
          </p>

          <p className="highlight">
            Consistency &gt; Motivation · Execution &gt; Ideas
          </p>
        </motion.div>

        <motion.div
          className="about-contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p><strong>Name</strong><br />Shubham Jare</p>
          <p><strong>Email</strong><br />smjare07@gmail.com</p>
          <p><strong>Location</strong><br />Maharashtra, India</p>

          <a
            href="/shubham-jare-cv.pdf"
            target="_blank"
            className="download-btn"
          >
            View CV ⬇
          </a>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="services-grid">
        {[
          {
            title: "Software Engineering",
            desc: "Designing maintainable, scalable backend systems.",
          },
          {
            title: "Full Stack Development",
            desc: "Modern web apps using React, Next.js & Flask.",
          },
          {
            title: "Artificial Intelligence",
            desc: "Deep learning & computer vision applications.",
          },
          {
            title: "Data Structures & Algorithms",
            desc: "Optimized logic & performance-driven coding.",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
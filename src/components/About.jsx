"use client";

import { motion } from "framer-motion";
import "../styles/about.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="about-wrap">
      {/* TOP */}
      <motion.span
        className="section-pill"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        ✦ About Me
      </motion.span>

      <motion.h2
        className="about-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Turning complex problems <br /> into simple design
      </motion.h2>

      {/* STATS */}
      <div className="about-stats">
        {[
          { n: "100+", t: "Designs" },
          { n: "1+", t: "Years of experience" },
          { n: "30+", t: "Projects done" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="stat-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <h3>{s.n}</h3>
            <p>{s.t}</p>
          </motion.div>
        ))}
      </div>

      {/* TEXT + INFO */}
      <div className="about-info">
        <motion.p
          className="about-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I wonder if I’ve been changed in the night? Let me think.
          Was I the same when I got up this morning? I almost think I
          can remember feeling a little different.
          <br /><br />
          Be who you would seem to be — never imagine yourself not to be
          otherwise than what you had been.
        </motion.p>

        <motion.div
          className="about-contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p><strong>Name</strong><br />Shubham Jare</p>
          <p><strong>Phone</strong><br />+91 **********</p>
          <p><strong>Email</strong><br />shubham@gmail.com</p>
          <p><strong>Location</strong><br />Maharashtra, India</p>

          <motion.button
            className="download-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV ⬇
          </motion.button>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="services-grid">
        {[
          {
            title: "Frontend development",
            tag: "UI/UX · Design to Code",
            desc: "Building clean, scalable, animated frontends.",
            img: "/service1.png",
          },
          {
            title: "Digital art & design",
            tag: "Illustrations · AI",
            desc: "Creative visuals using Figma & Photoshop.",
            img: "/service2.png",
          },
          {
            title: "Video Editing",
            tag: "Reels · YouTube",
            desc: "Engaging video edits with modern tools.",
            img: "/service3.png",
          },
          {
            title: "Brand Identity",
            tag: "Logo · Style Guide",
            desc: "Minimal and professional branding.",
            img: "/service4.png",
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <h4>{s.title}</h4>
            <span>{s.tag}</span>
            <p>{s.desc}</p>
            <img src={s.img} alt={s.title} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    img: "/project1.jpg",
    tags: ["Photoshop", "Figma"],
    github: "https://github.com/yourusername/project1",
    report: "/reports/project1.pdf",
  },
  {
    img: "/project2.jpg",
    tags: ["Mobile UI Design", "Figma"],
    github: "https://github.com/yourusername/project2",
    report: "/reports/project2.pdf",
  },
  {
    img: "/project3.jpg",
    tags: ["Web UI", "Figma"],
    github: "https://github.com/yourusername/project3",
    report: "/reports/project3.pdf",
  },
  {
    img: "/project4.jpg",
    tags: ["Illustrations", "AI Experiment"],
    github: "https://github.com/yourusername/project4",
    report: "/reports/project4.pdf",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-wrap">
      <motion.span
        className="section-pill"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        ✦ Portfolio
      </motion.span>

      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Check out my featured <br /> projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <img src={p.img} alt="project" />

            <div className="project-overlay" />

            {/* TAGS */}
            <div className="project-tags">
              {p.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="project-actions">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn outline"
              >
                GitHub ↗
              </a>

              <a
                href={p.report}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn solid"
              >
                Report PDF ⬇
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
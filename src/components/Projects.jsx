"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    img: "/project1.png",
    tags: ["Android", "AI/ML", "Firebase"],
    github: "https://github.com/smjare07-art/krishibandh-apk",
    report: "/reports/project1.pdf",
  },
  {
    img: "/project2.jpg",
    tags: ["TensorFlow", "CNN", "Flask"],
    github: "https://github.com/smjare07-art/krishibandh-cropanaliys-",
    report: "/reports/project2.pdf",
  },
  {
    img: "/project3.png",
    tags: ["Machine Learning", "TF-IDF", "Naive Bayes"],
    github: "https://github.com/smjare07-art/spam-email-detector",
    report: "/reports/project3.pdf",
  },
  {
    img: "/project4.png",
    tags: ["React.js", "Mermaid.js", "Code Parser"],
    github: "https://github.com/smjare07-art/flow-charts-for-algorithms",
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Check out my <br />  projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, i) => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);

          const rotateX = useTransform(y, [-100, 100], [8, -8]);
          const rotateY = useTransform(x, [-100, 100], [-8, 8]);

          return (
            <motion.div
              key={i}
              className="project-card"
              style={{ rotateX, rotateY }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <img src={p.img} alt="project" />

              <div className="project-overlay" />

              <div className="project-tags">
                {p.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={p.github} target="_blank" className="project-btn outline">
                  GitHub ↗
                </a>

                <a href={p.report} target="_blank" className="project-btn solid">
                  Report ⬇
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
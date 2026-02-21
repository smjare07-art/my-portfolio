"use client";

import { motion } from "framer-motion";
import "../styles/Resume.css";
import {
  FaReact, FaJs, FaPython, FaGitAlt, FaAndroid
} from "react-icons/fa";
import {
  SiNextdotjs, SiTensorflow, SiFlask,
  SiMongodb, SiFirebase, SiMysql,
  SiNodedotjs, SiDocker
} from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

export default function Resume() {
  return (
    <section id="resume" className="resume-wrap">

      <motion.span
        className="section-pill"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        ✦ Resume
      </motion.span>

      <motion.h2
        className="resume-title"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Education & Experience
      </motion.h2>

      {/* ================= EDUCATION ================= */}
      <h3 className="block-title">Education</h3>

      <div className="timeline">
        <motion.div
          className="timeline-item"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="year">2021 – Present</span>
            <h4>B.Tech – Computer Science & Engineering</h4>
            <small>Dr. Babasaheb Ambedkar Technological University</small>
            <p>
              Focused on Data Structures, AI, DBMS, Operating Systems,
              and scalable system design.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="year">2019 – 2021</span>
            <h4>Higher Secondary Education</h4>
            <small>Science Stream (PCM)</small>
            <p>
              Built strong analytical and mathematical foundations
              for engineering and problem-solving.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <h3 className="block-title">Experience</h3>

      <div className="timeline">
        <motion.div
          className="timeline-item"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="year">2024</span>
            <h4>Front-End Development Intern</h4>
            <small>Cognifyz Technologies</small>
            <p>
              Developed responsive React interfaces, optimized UI performance,
              and collaborated in agile teams.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="timeline-item"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="year">2024</span>
            <h4>Cyber Security Intern</h4>
            <small>Codec Technologies</small>
            <p>
              Worked on vulnerability assessment, system protection,
              and network security fundamentals.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= STACK ================= */}
      <h3 className="block-title">Technical Stack</h3>

      <div className="tools-grid">
        {[
          [FaReact, "React"],
          [SiNextdotjs, "Next.js"],
          [FaJs, "JavaScript"],
          [FaPython, "Python"],
          [SiTensorflow, "TensorFlow"],
          [SiFlask, "Flask"],
          [SiMongodb, "MongoDB"],
          [SiFirebase, "Firebase"],
          [SiMysql, "MySQL"],
          [FaAndroid, "Android"],
          [FaGitAlt, "Git"],
          [SiNodedotjs, "Node.js"],
          [SiDocker, "Docker"],
        ].map(([Icon, name], i) => (
          <motion.div
            key={i}
            className="tool"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Icon size={28} />
            <span>{name}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
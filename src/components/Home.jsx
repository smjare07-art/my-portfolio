"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../styles/home.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

export default function Home() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section id="home" className="home-wrap">

      {/* LEFT PROFILE CARD */}
      <motion.div
        className="profile-card"
        onMouseMove={handleMouseMove}
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-top">
          <div className="icon">
            <Image src="/icon.png" alt="Logo" width={24} height={24} />
          </div>
          <h2>Shubham <br /> Jare</h2>
        </div>

        <motion.div
          className="avatar"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Image
            src="/avatar.png"
            alt="Profile Avatar"
            width={220}
            height={220}
            priority
          />
        </motion.div>

        <div className="info">
          <span>Specialization:</span>
          <p>AI & Full Stack Engineer</p>

          <span>Based in:</span>
          <p>Maharashtra, India</p>
        </div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/shubham-jare-232645362" target="_blank"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/devwithshubham_" target="_blank"><FaInstagram /></a>
          <a href="https://www.youtube.com/channel/UC1fxqmDsUQXDxATTBtwvoCg" target="_blank"><FaYoutube /></a>
          <a href="https://github.com/smjare07-art" target="_blank"><FaGithub /></a>
        </div>

        <a
          href="https://wa.me/6283163861179"
          target="_blank"
          className="work-btn"
        >
          Let’s Work Together!
        </a>
      </motion.div>

      {/* RIGHT HERO CONTENT */}
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="meet">✨ Let’s meet!</span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Building Intelligent <br />
          <span>AI Systems &</span> <br />
          Scalable Web Apps.
        </motion.h1>

        <div className="actions">
          <a href="#projects" className="outline">
            My Works ⬚
          </a>

          <a href="/shubham-jare-cv.pdf" target="_blank" className="primary">
            View CV ⬇
          </a>
        </div>
      </motion.div>

      <div className="blur purple" />
      <div className="blur pink" />
    </section>
  );
}
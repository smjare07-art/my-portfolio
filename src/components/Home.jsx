"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "../styles/home.css";
import {
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

/* ===============================
   MOTION VARIANTS
================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <section id="home" className="home-wrap">

      {/* LEFT PROFILE CARD */}
      <motion.div
        className="profile-card"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <div className="profile-top">
          <div className="icon">
            <Image src="/icon.png" alt="Logo" width={24} height={24} />
          </div>

          <h2>
            shubham <br /> Jare
          </h2>
        </div>

        {/* AVATAR */}
        <motion.div
          className="avatar"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
          <p>AI&ML<br />and Web Designer</p>

          <span>Based in:</span>
          <p>Maharashtra, India</p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="socials">
          {[FaLinkedinIn, FaBehance, FaInstagram, FaYoutube, FaPinterestP].map(
            (Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
              >
                <Icon />
              </motion.a>
            )
          )}
        </div>

        <motion.button
          className="work-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Let’s Work Together!
        </motion.button>
      </motion.div>

      {/* RIGHT HERO CONTENT */}
      <motion.div
        className="hero"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span className="meet" variants={fadeUp}>
          ✨ Let’s meet!
        </motion.span>

        <motion.h1 variants={fadeUp}>
          I’m Shubham <br />
          <span>Developer,</span> <br />
          Web Designer.
        </motion.h1>

        <motion.div className="actions" variants={fadeUp}>
          <motion.button
            className="outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            My Works ⬚
          </motion.button>

          <motion.button
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Download CV ⬇
          </motion.button>
        </motion.div>
      </motion.div>

      {/* FLOATING BLURS */}
      <motion.div
        className="blur purple"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blur pink"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
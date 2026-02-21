"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/navbar.css";

const NAV = [
  { label: "Home", id: "home" },
  { label: "Portfolio", id: "projects" },
  { label: "About Me", id: "about" },
  { label: "Resume", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  /* ===============================
     CLICK + SLIDING INDICATOR
  ================================ */
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const activeEl = navRef.current.querySelector(
      `[data-id="${active}"]`
    );

    if (activeEl) {
      indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
      indicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    }
  }, [active]);

  /* ===============================
     SCROLL ACTIVE TAB CHANGE
  ================================ */
  useEffect(() => {
    const sections = NAV.map((n) =>
      document.getElementById(n.id)
    );

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((sec) => {
        if (!sec) return;
        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="navbar"
    >
      <div className="navbar-box" ref={navRef}>
        {/* Sliding Indicator */}
        <span className="nav-indicator" ref={indicatorRef} />

        {NAV.map((item) => (
          <div
            key={item.id}
            data-id={item.id}
            onClick={() => handleClick(item.id)}
            className={`nav-item ${
              active === item.id ? "active" : ""
            }`}
          >
            {item.label}
          </div>
        ))}

        <div className="theme-btn">🌙</div>
        <button className="cta-btn">Let’s Talk 💬</button>
      </div>
    </motion.nav>
  );
}
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
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ SUPER FIXED INDICATOR (Desktop + Mobile Safe)
  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current || !indicatorRef.current) return;

      const activeEl = navRef.current.querySelector(
        `[data-id="${active}"]`
      );

      if (!activeEl) return;

      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      indicatorRef.current.style.width = `${activeRect.width}px`;
      indicatorRef.current.style.left = `${
        activeRect.left - navRect.left
      }px`;
    };

    updateIndicator();

    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-box" ref={navRef}>
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

        <div
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </div>

        <a
          href="https://wa.me/6283163861179?text=Hi%20Shubham,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Let’s Talk 💬
        </a>
      </div>
    </motion.nav>
  );
}
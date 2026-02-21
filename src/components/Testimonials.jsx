"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Testimonials.css";

export default function Testimonials() {

  const testimonials = [
    {
      img: "/person1.jpg",
      name: "Project Mentor",
      role: "AI & Web Development",
      text: "Shubham built a CNN-based crop disease detection system with strong backend integration and clean architecture.",
    },
    {
      img: "/person2.jpg",
      name: "Frontend Lead",
      role: "Internship Team",
      text: "His React and Next.js implementations are clean, scalable and optimized for performance.",
    },
    {
      img: "/person3.jpg",
      name: "Cyber Security Mentor",
      role: "Security Internship",
      text: "Demonstrates analytical thinking and strong understanding of system-level security concepts.",
    },
    {
      img: "/person4.jpg",
      name: "Hackathon Teammate",
      role: "Full Stack Collaboration",
      text: "Quick problem solver who writes structured production-ready code.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials-wrap">

      <span className="section-pill">✦ Testimonials</span>

      <h2 className="testimonials-title">
        What mentors & teammates <br /> say about me
      </h2>

      <div className="testimonial-container">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-header">
              <img src={testimonials[index].img} alt="person" />
              <div>
                <h4>{testimonials[index].name}</h4>
                <p>{testimonials[index].role}</p>
              </div>
            </div>

            <p className="testimonial-text">
              {testimonials[index].text}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* DOTS */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active-dot" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </section>
  );
}
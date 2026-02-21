"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    const encodedText = encodeURIComponent(text);

    setSubmitted(true);

    setTimeout(() => {
      window.open(
        `https://wa.me/6283163861179?text=${encodedText}`,
        "_blank"
      );
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-wrap">

      <span className="section-pill">✦ Contact</span>

      <h2 className="contact-title">
        Let’s build something impactful
      </h2>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        {["name","company","email","phone"].map((field, i) => (
          <div className="input-group" key={i}>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              required={field !== "company"}
              onChange={handleChange}
            />
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          </div>
        ))}

        <div className="input-group full">
          <textarea
            name="message"
            rows="4"
            required
            onChange={handleChange}
          ></textarea>
          <label>Message</label>
        </div>

        <motion.button
          type="submit"
          className="send-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {submitted ? "Sending..." : "Send Message →"}
        </motion.button>

      </motion.form>

      <div className="contact-socials">
        <a href="https://www.linkedin.com/in/shubham-jare-232645362" target="_blank"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/devwithshubham_" target="_blank"><FaInstagram /></a>
        <a href="https://www.youtube.com/channel/UC1fxqmDsUQXDxATTBtwvoCg" target="_blank"><FaYoutube /></a>
        <a href="https://github.com/smjare07-art" target="_blank"><FaGithub /></a>
      </div>

      <p className="contact-text">
        Looking to collaborate on a project or discuss opportunities?
        Fill the form and your message will reach me directly on WhatsApp.
      </p>

    </section>
  );
}
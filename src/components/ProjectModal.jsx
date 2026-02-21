"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={project.img} alt="project" />

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="modal-actions">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.report} target="_blank">PDF</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
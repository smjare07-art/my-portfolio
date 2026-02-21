"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <h2 className="text-center text-4xl font-bold text-purple-700">
        Skills
      </h2>

      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-8">
        {["Frontend Development", "Graphic Design", "Video Editing", "Brand Identity"].map(
          (skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -10 }}
              className="rounded-3xl bg-slate-100 p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold">{skill}</h3>
              <p className="mt-3 text-gray-600">
                Clean, modern and animated design experience.
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
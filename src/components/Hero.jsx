"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-purple-200 via-slate-100 to-pink-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-10 px-8"
      >
        {/* Left Card */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold">Your Name</h2>
          <p className="mt-2 text-gray-600">
            UI/UX Designer & Web Developer
          </p>

          <button className="mt-6 rounded-full bg-purple-600 px-6 py-3 text-white">
            Let’s Work Together
          </button>
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-purple-700 leading-tight">
            I’m a Creative <br /> UI/UX Designer
          </h1>

          <div className="mt-6 flex gap-4">
            <button className="rounded-full border px-6 py-3">
              My Works
            </button>
            <button className="rounded-full bg-purple-600 px-6 py-3 text-white">
              Download CV
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
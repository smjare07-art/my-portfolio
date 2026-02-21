// app/page.tsx

import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";

import Projects from "../src/components/Projects";
import About from "../src/components/About";
import Resume from "../src/components/Resume";
import Testimonials from "../src/components/Testimonials";
import Contact from "../src/components/Contact";
export default function Page() {
  return (
    <>
      {/* Floating Navbar */}
      <Navbar />

      {/* Home / Hero Section */}
      <Home />

      {/* Projects Section */}
      <Projects />
      {/* About Section */}
      <About />
      {/* Resume Section */}
      <Resume />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />
    </>
  );
}

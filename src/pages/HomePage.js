import React from "react";
import Hero from "../components/Hero";
import ExperienceComponent from "../components/experience/index";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import CTA from "../components/CTA";

function HomePage() {
  return (
    <main id="home">
      <section className="section">
        <Hero />
      </section>
      <section id="about" className="section">
        <Projects />
      </section>
      <section id="experience" className="section">
        <CTA />
      </section>
      <section id="experience" className="section">
        <ExperienceComponent />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </main>
  );
}

export default HomePage;

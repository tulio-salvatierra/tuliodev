import React from "react";
import Hero from "../components/Hero";
import ExperienceComponent from "../components/experience/index";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Skills from "../components/Skills/Skills";

function HomePage() {
  return (
    <main id="home">
      <Hero />
      <div className="white-bg">
        <Projects />
        <CTA />
        <ExperienceComponent />
        <Skills />
      </div>
      <Contact />
    </main>
  );
}

export default HomePage;

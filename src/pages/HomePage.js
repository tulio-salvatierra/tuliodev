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
      <Projects />
      <CTA />
      <ExperienceComponent />
      <Skills />
      <Contact />
    </main>
  );
}

export default HomePage;

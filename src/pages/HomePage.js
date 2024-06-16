import React from "react";
import Hero from "../components/Hero";
import ExperienceComponent from "../components/experience/index";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import CTA from "../components/CTA";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <CTA />
      <ExperienceComponent />
      <Contact />
    </>
  );
}

export default HomePage;

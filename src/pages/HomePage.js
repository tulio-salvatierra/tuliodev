import React from "react";
import Hero from "../components/Hero";
import ExperienceComponent from "../components/experience/index";
import Contact from "../components/Contact";
import CTA from "../components/CTA";

function HomePage() {
  return (
    <>
      <Hero />
      <CTA />
      <ExperienceComponent />
      <Contact />
    </>
  );
}

export default HomePage;

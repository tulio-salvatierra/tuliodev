import React from "react";
import Hero from "../components/Hero";
import ExperienceComponent from "../components/experience/index";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceComponent />
      <Contact />
    </>
  );
}

export default HomePage;

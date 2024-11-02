import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import FloatingCallButton from "../components/FloatingCallButton";

function AboutPage() {
  return (
    <>
      <About />
      <CTA />
      <Contact />
      <FloatingCallButton />
    </>
  );
}

export default AboutPage;

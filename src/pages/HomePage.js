import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import ProjectsComp from "../components/Projects";

import FloatingCallButton from "../components/FloatingCallButton";


function HomePage() {
  return (
    <>
      <main id="home">
        <Hero />
        <ProjectsComp />
        <CTA />
        <Contact />
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

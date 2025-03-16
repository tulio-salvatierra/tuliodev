
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";

import FloatingCallButton from "../components/FloatingCallButton";


function HomePage() {
  return (
    <>
      <main id="home">
        <ProjectDetail />
        <CTA />
        <Contact />
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

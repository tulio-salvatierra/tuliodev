import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

import FloatingCallButton from "../components/FloatingCallButton";

function HomePage() {
  return (
    <>
      <main id="home">
        <Hero />
        <CTA />
        <Contact />
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

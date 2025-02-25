import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Products from "../components/Products";

import FloatingCallButton from "../components/FloatingCallButton";

function HomePage() {
  return (
    <>
      <main id="home">
        <Hero />
        <Products />
        <CTA />
        <Contact />
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

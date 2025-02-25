import Hero from "../components/Hero";

import Contact from "../components/Contact";

import FloatingCallButton from "../components/FloatingCallButton";

function HomePage() {
  return (
    <>
      <main id="home">
        <Hero />

        <Contact />
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

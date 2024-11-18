import About from "../components/About";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import FloatingCallButton from "../components/FloatingCallButton";

function AboutPage() {
  return (
    <>
      <main id="about" className="mt-5 pt-5">
        <About />
        <CTA />
        <Contact />
      </main>
      <FloatingCallButton />
    </>
  );
}

export default AboutPage;

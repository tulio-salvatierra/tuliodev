import Hero from "../components/Hero";
import Services from "./../components/Services";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Skills from "../components/Skills/Skills";
import FloatingCallButton from "../components/FloatingCallButton";
import ProductsComp from "../components/Products/Products";

function HomePage() {
  return (
    <>
      <main id="home">
        <div className="panel-wrapper">
          <div className="panel mt-5">
            <Hero />
          </div>{" "}
          <div className="white-bg panel">
            <ProductsComp />
            <Services />
            <CTA />
            <Projects />
            <Skills />
          </div>
        </div>
        <div className="panel">
          <Contact />
        </div>
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

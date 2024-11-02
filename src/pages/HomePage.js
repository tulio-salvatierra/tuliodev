import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import ExperienceComponent from "../components/experience/index";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Skills from "../components/Skills/Skills";
import FloatingCallButton from "../components/FloatingCallButton";

function HomePage() {
  const panelRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          pinSpacing: false,
          pin: true,
          scrub: true,

          onRefresh: () =>
            gsap.set(panel, {
              transformOrigin:
                "center " +
                (panel.offsetHeight - window.innerHeight / 2) +
                "px",
            }),
        },
      });

      tl.fromTo(
        panel,
        1,
        { y: 0, rotate: 0, scale: 1, opacity: 1 },
        { y: 0, rotateX: 0, scale: 0.5, opacity: 0.005 },
        0
      ).to(panel, 0.1, { opacity: 0 });
    });
  });
  return (
    <>
      <main id="home">
        <div className="panel-wrapper">
          <div className="panel" ref={panelRef}>
            <Hero />
          </div>{" "}
          <div className="white-bg panel" useRef={panelRef}>
            <Projects />
            <CTA />
            <ExperienceComponent />
            <Skills />
          </div>
          <Contact />
        </div>
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

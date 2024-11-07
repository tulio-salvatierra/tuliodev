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
  const contentRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          pinSpacing: false,
          pin: true,
          scrub: true,
          anticipatePin: 1, // Helps prevent jerky pin behavior
          onEnter: (self) => {
            gsap.set(panel, { zIndex: 10 });
          },
          onLeave: (self) => {
            gsap.set(panel, { zIndex: 1 });
          },
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
        { y: 0, rotateX: 0, scale: 0.5, opacity: 0 },
        0
      ).to(panel, 0.1, { opacity: 0 });
    });

    // Cleanup
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);
  return (
    <>
      <main id="home">
        <div className="panel-wrapper">
          <div className="panel" ref={panelRef}>
            <Hero />
          </div>{" "}
          <div className="white-bg panel" ref={contentRef}>
            <Projects />
            <CTA />
            <ExperienceComponent />
            <Skills />
          </div>
        </div>
        <div ref={contactRef} className="panel">
          <Contact />
        </div>
      </main>
      <FloatingCallButton />
    </>
  );
}

export default HomePage;

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { servicesData } from "./ServicesData";
import Arrow from "../../assets/icons/arrow.svg";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesComp() {
  const eased = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Define animations for screens wider than 800 pixels
    mm.add("(min-width: 801px)", () => {
      gsap.from(eased.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: eased.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: false,
        },
      });
    });

    // Cleanup function to revert any changes when the component unmounts
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section id="projects" className="project-section">
      <div className="project-header">
        <h2 className="section-title" ref={(el) => (eased.current[0] = el)}>
          Services
        </h2>
        <div className="d-flex subtitle-box">
          <h3 className="welcome" ref={(el) => (eased.current[1] = el)}>
            I specialize in delivering tailored solutions to elevate your
            digital presence. Whether you need a stunning website, impactful
            marketing strategies, or eye-catching animations, I’ve got you
            covered. Explore my services below and take the first step toward
            transforming your business online
          </h3>
          <img
            src={Arrow}
            alt="web development small businesses in Chicago"
            ref={(el) => (eased.current[2] = el)}
          ></img>
        </div>
      </div>
      <div className="projectDiv flex p-3">
        {servicesData.map((project, index) => (
          <div
            key={index}
            className="service-card"
            ref={(el) => (eased.current[3 + index] = el)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="service-icon mt-5"
            />
            <h3 className="services-subtitle">{project.title}</h3>
            <p className="services-description">{project.description}</p>
            {
              <div className="project-links">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services-btn  services"
                >
                  {project.CTA}
                </a>
              </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

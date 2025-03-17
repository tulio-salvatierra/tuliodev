import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { projectsData } from "./projectsData";
import Arrow from "../../assets/icons/arrow.svg";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsComp() {
  const animatedItems = useRef([]);

  useEffect(() => {
    const easedItems = gsap.matchMedia();
    easedItems.add("(min-width: 301px)", () => {
      gsap.from(animatedItems.current, {
        y: 75,
        opacity: 0,
        duration: 1.3,
        ease: "power4.in",
        stagger: 0.1,
        scrollTrigger: {
          trigger: animatedItems.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: false,
        },
      });
    });
  }, []);
  return (
    <section id="projects" className="project-section mt-5">
      <div className="project-container">
        <h2
          className="section-title"
          ref={(el) => (animatedItems.current[0] = el)}
        >
          Projects
        </h2>
        <div className="d-flex subtitle-box">
          <p className="" ref={(el) => (animatedItems.current[1] = el)}>
            Find a sample of personal projects, focused on frontend and
            fullstack development
          </p>
          <img
            src={Arrow}
            alt="web development small businesses in Chicago"
            className=""
            ref={(el) => (animatedItems.current[2] = el)}
          ></img>
        </div>
      </div>
      <div className="projectDiv flex p-3">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            ref={(el) => (animatedItems.current[index + 2] = el)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="mt-4">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

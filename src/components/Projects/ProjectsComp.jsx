import React from "react";
import { projectsData } from "./projectsData";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectsComp() {
  return (
    <section className="container" id="projects">
      <div className="project-header">
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="project-intro">
        <h1>
          Here are some of the projects I have worked on. Click on the links to
          view the code on GitHub or the live site.
        </h1>
      </div>

      {projectsData.map((project, index) => (
        <div key={index} className="project-card w-100 h-25">
          <img
            src={project.image}
            alt={project.title}
            className="project-image h-100"
          />
          <h1 className="mt-4">{project.title}</h1>
          <h3>{project.description}</h3>
          <div className="project-links">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn m-4"
            >
              GitHub
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn m-4 "
            >
              Site
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsComp;

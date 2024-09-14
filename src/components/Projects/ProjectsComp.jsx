import React from "react";
import { projectsData } from "./projectsData";
import "./Projects.css";

function ProjectsComp() {
  return (
    <section id="projects">
      <div className="project-header">
        <h1 className="section-title p-4">Projects</h1>
      </div>
      <div className="container-fluid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card h-50 w-25">
            <img
              src={project.image}
              alt={project.title}
              className="project-image h-100"
            />
            <h3 className="mt-4">{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-btn w-50 "
              >
                GitHub
              </a>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-btn w-50 m-1"
              >
                Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsComp;

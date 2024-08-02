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
        <h4>
          Here are some of the projects I have worked on. Click on the links to
          view the code on GitHub or the live site.
        </h4>
      </div>

      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h3 className="card-subtitle m-0">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links ">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn"
            >
              GitHub
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn "
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

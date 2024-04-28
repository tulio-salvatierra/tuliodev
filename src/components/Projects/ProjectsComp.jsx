import React from "react";
import { projectsData } from "./projectsData";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectsComp() {
  return (
    <div className="project-section">
      <h1 className="projects-text-image-mask">Projects</h1>

      <div className="projects-container d-flex flex-wrap justify-content-center mt-5">
        {projectsData.map((project) => (
          <div key={project.id} className="card m-3" style={{ width: "32rem" }}>
            <div className="card-body">
              <p className="project-card-title">{project.title}</p>
              <img
                src={project.image}
                className="card-img-top"
                alt={project.alt}
              />

              <p className="card-text">{project.description}</p>
            </div>
            <div className="btn-row">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComp;

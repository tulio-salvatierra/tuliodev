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
          <div key={project.id} className="card m-2" style={{ width: "32rem" }}>
            <img
              src={project.image}
              className="card-img-top"
              alt={project.alt}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded m-1"
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark rounded m-1"
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

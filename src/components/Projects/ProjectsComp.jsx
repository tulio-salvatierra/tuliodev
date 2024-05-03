import React from "react";
import { projectsData } from "./projectsData";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectsComp() {
  return (
    <>
      <div className="project-container">
        <h1 className="projects-text-image-mask">Projects</h1>
        <h5 className="title">
          These are some of the projects I developed as study projects:
        </h5>
        {projectsData.map((project, index) => (
          <div key={index}>
            <div className="parent" key={project.id}>
              <div className="div1">
                {" "}
                <img
                  src={project.image}
                  className="img-top"
                  alt={project.alt}
                />
              </div>
              <div className="div2">
                <p className="project-title">{project.title}</p>{" "}
              </div>
              <div className="div3">
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
                </div>{" "}
              </div>
              <div className="div4">
                <p className="project-info">{project.description}</p>{" "}
              </div>
            </div>
            <div class="separator"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectsComp;

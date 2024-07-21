import React from "react";
import { projectsData } from "./projectsData";
import projectIcon from "../../assets/icons/project-blk.png";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectsComp() {
  return (
    <section className="project-section" id="projects">
      <div className="container-xl">
        <h1 className="section-watermark">Projects</h1>
        <h1 className="section-title">Projects</h1>
        <div className="container">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="card-subtitle">
                {" "}
                <img
                  src={projectIcon}
                  alt="project-icon"
                  className="project-icon"
                  style={{ height: "1.2rem", width: "1.2rem" }}
                />
                {project.title}
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
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
        </div>
      </div>
    </section>
  );
}

export default ProjectsComp;

import React from "react";
import { projectsData } from "./projectsData";
import projectIcon from "../../assets/icons/project-blk.png";
import logo from "../../assets/images/_logo.svg";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectsComp() {
  return (
    <>
      <h1 className="section-title">Projects</h1>
      <div className="container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={logo} alt="logo" className="logo" />
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
              <button
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                GitHub
              </button>

              <button
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark "
              >
                Site
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectsComp;

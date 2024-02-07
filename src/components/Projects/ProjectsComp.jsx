import React from "react";
import { projectsData } from "./projectsData";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecomm from "../../assets/images/ecomm.jpeg";
import Quiz from "../../assets/images/quiz.png";
import { Button } from "@mui/material";

function ProjectsComp() {
  return (
    <>
      <h1 className="projects-text-image-mask">Projects</h1>
      <h3 className="projects-text-image-mask-subtitle">
        Here are some of the projects I've worked on.
      </h3>
      <div className="projects-container">
        <div className="projects">
          {projectsData.map((project) => (
            <div key={project.id} className="project">
              <h1>{project.title}</h1>
              <img
                src={project.image === Ecomm ? Ecomm : Quiz}
                alt={project.alt}
                className="project-image"
              />
              <div className="project-info">
                <p>{project.description}</p>
                <div className="project-links">
                  <Button
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="projectButton"
                  >
                    Live Demo
                  </Button>
                  <Button
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="projectButton"
                  >
                    GitHub
                  </Button>
                  <Button className="projectButton" href="#contact">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsComp;

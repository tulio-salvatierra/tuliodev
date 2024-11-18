import { projectsData } from "./projectsData";
import Arrow from "../../assets/icons/arrow.svg";
import "./Projects.css";

function ProjectsComp() {
  return (
    <section id="projects" className="project-section">
      <div className="project-header">
        <h2 className="section-title p-4">Projects</h2>
        <div className="d-flex subtitle-box">
          <h3 className="welcome">
            Find a sample of personal projects, focused on frontend and
            fullstack development
          </h3>
          <img
            src={Arrow}
            alt="web development small businesses in Chicago"
            className=""
          ></img>
        </div>
      </div>
      <div className="projectDiv flex p-3">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="mt-4">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {/* <div className="project-links">
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
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsComp;

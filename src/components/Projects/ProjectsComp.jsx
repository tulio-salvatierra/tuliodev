import { projectsData } from "./projectsData";
import "./Projects.css";

function ProjectsComp() {
  return (
    <section id="projects" className="project-section">
      <div className="project-header">
        <h1 className="section-title p-4">Projects</h1>
        <h3 className="p-4 text-center">
          See projects that I created below ⤵️
        </h3>
      </div>
      <div className="projectDiv container flex p-3">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="mt-4">{project.title}</h3>
            <p className="project-description">{project.description}</p>
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

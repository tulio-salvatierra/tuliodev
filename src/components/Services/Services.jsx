import { servicesData } from "./ServicesData";
import Arrow from "../../assets/icons/arrow.svg";
import "./Services.css";

export default function ServicesComp() {
  return (
    <section id="projects" className="project-section">
      <div className="project-header">
        <h2 className="section-title">Services</h2>
        <div className="d-flex subtitle-box">
          <h3 className="welcome">
            I specialize in delivering tailored solutions to elevate your
            digital presence. Whether you need a stunning website, impactful
            marketing strategies, or eye-catching animations, I’ve got you
            covered. Explore my services below and take the first step toward
            transforming your business online
          </h3>
          <img
            src={Arrow}
            alt="web development small businesses in Chicago"
            className=""
          ></img>
        </div>
      </div>
      <div className="projectDiv flex p-3">
        {servicesData.map((project, index) => (
          <div key={index} className="service-card">
            <img
              src={project.image}
              alt={project.title}
              className="service-icon mt-5"
            />
            <h3 className="services-subtitle">{project.title}</h3>
            <p className="services-description">{project.description}</p>
            {
              <div className="project-links">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services-btn  services"
                >
                  {project.CTA}
                </a>
              </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

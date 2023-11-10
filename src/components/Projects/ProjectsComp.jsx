import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecomm from "../../assets/images/ecomm.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectsComp() {
  return (
    <>
      <section className="projects-content">
        <div className="sep"></div>
        <br></br>
        <h1 className="text-image-mask">Projects</h1>
        <div className="image-container">
          <img
            src={Ecomm}
            onClick={() => {
              window.open("https://react---ecomm.web.app/");
            }}
            alt="Ecommerce site"
            height={350}
            width={"auto"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          />
          <footer
            style={{ marginLeft: "auto", marginRight: "auto", padding: "1rem" }}
          >
            Click on image ⬆️
            <span>
              <strong style={{ marginLeft: "1rem" }}> Project Repo:</strong>
              <a href="https://github.com/T00lio/mlchallenge">
                <GitHubIcon />
              </a>
            </span>
          </footer>
        </div>
        <br></br>
        <h5 style={{ width: "75vw" }}>
          <strong>Ecommerce:</strong> with cart and checkout functionalities,
          authentication routes, Context API for state management, working with
          Mercadolibre.com API, showcasing hability to handle API call and data
          handling with props globally. Create an user account of full cart
          functionality Technologies: React, React-Bootstrap, React-Router,
          MaterialUI, Firestore & Firebase, CI/CI
        </h5>
        <br></br>
      </section>
    </>
  );
}

export default ProjectsComp;

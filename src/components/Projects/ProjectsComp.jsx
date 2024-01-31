import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecomm from "../../assets/images/ecomm.jpeg";
import Quiz from "../../assets/images/quiz.png";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectsComp() {
  return (
    <>
      <section className="projects-container" id="projects">
        <div className="sep"></div>
        <br></br>
        <h1 className="projects-text-image-mask">Projects</h1>
        <div className="image-container">
          <img
            className="image"
            src={Ecomm}
            onClick={() => {
              window.open("https://react---ecomm.web.app/");
            }}
            alt="Ecommerce site"
          />
          <footer
            style={{ marginLeft: "auto", marginRight: "auto", padding: "1rem" }}
          >
            Click on image ⬆️
            <span>
              <strong style={{ marginLeft: "1rem", color: "black" }}>
                {" "}
                Project Repo:
              </strong>
              <a
                style={{ color: "black" }}
                href="https://github.com/T00lio/mlchallenge"
              >
                <GitHubIcon />
              </a>
            </span>
          </footer>
          <p className="projects-text">
            <strong>Ecommerce:</strong> with cart and checkout functionalities,
            authentication routes, Context API for state management, working
            with Mercadolibre.com API, showcasing hability to handle API call
            and data handling with props globally. Create an user account of
            full cart functionality Technologies: React, React-Bootstrap,
            React-Router, MaterialUI, Firestore & Firebase, CI/CI
          </p>
        </div>
        <br></br>
        <div className="image-container">
          <img
            className="image"
            src={Quiz}
            onClick={() => {
              window.open("https://react---ecomm.web.app/");
            }}
            alt="Quiz app"
          />
          <footer
            style={{ marginLeft: "auto", marginRight: "auto", padding: "1rem" }}
          >
            Click on image ⬆️
            <span>
              <strong style={{ marginLeft: "1rem", color: "black" }}>
                {" "}
                Project Repo:
              </strong>
              <a
                style={{ color: "black" }}
                href="https://github.com/T00lio/quiz"
              >
                <GitHubIcon />
              </a>
            </span>
          </footer>
          <p className="projects-text">
            <strong>Quiz App:</strong> (in development) a full stack app made
            using vite, node.js, express, postgresSQL, Sequelize (ORM) and
            react. The app is a quiz app that allows users take quizzes and keep
            up with their progress in know of web dev topics. The app is
            currently in development and will be deployed soon.
          </p>
        </div>

        <br></br>
      </section>
    </>
  );
}

export default ProjectsComp;

import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecomm from "../../assets/images/ecomm.jpeg";
import Quiz from "../../assets/images/quiz.png";
// import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectsComp() {
  return (
    <>
      <h1 className="projects-text-image-mask">Projects</h1>
      <div className="image-container">
        <h4>
          <strong>Ecommerce app</strong>
        </h4>
        <img
          className="image"
          src={Ecomm}
          onClick={() => {
            window.open("https://react---ecomm.web.app/");
          }}
          alt="Ecommerce site"
        />
        {/* <footer
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
        </footer> */}
        <p className="projects-text">
          <strong>
            Ecommerce: with cart and checkout functionalities, authentication
            routes, Context API for state management, working with
            Mercadolibre.com{" "}
          </strong>
        </p>
      </div>
      <br></br>
      <div className="image-container">
        <h4>
          <strong>React Quiz App</strong>
        </h4>
        <img
          className="image"
          src={Quiz}
          onClick={() => {
            window.open("https://react---ecomm.web.app/");
          }}
          alt="Quiz app"
        />
        {/* <footer
          style={{ marginLeft: "auto", marginRight: "auto", padding: "1rem" }}
        >
          Click on image ⬆️
          <span>
            <strong style={{ marginLeft: "1rem", color: "black" }}>
              {" "}
              Project Repo:
            </strong>
            <a style={{ color: "black" }} href="https://github.com/T00lio/quiz">
              <GitHubIcon />
            </a>
          </span>
        </footer> */}
        <p className="projects-text">
          (in development) a full stack app made using vite, node.js, express,
          postgresSQL, Sequelize (ORM) and react.
        </p>
      </div>
    </>
  );
}

export default ProjectsComp;

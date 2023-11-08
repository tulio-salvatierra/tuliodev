import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecomm from "../../assets/images/ecomm.jpeg";
import { autocompleteClasses } from "@mui/material";

function ProjectsComp() {
  return (
    <>
      <section className="projects">
        <h1 className="text-image-mask">Projects</h1>

        <ol style={{ listStyle: "none" }}>
          <li>
            {" "}
            <h3>Ecommerce site:</h3>
            <p>
              Used a real world API to create an ecommerce
              platform(Mercadolibre.com), that has a search capabbility,
              shopping cart functionality (decrease/increse/clear cart) and has
              authenticated routes, integrated with a database using
              Firebase/Firestore for hosting and data managment. Also developed
              for CI/CD with automted actions integrating automatic push, when
              the repository on a PR or merge, also Material UI library
              component and themes were appplied{" "}
            </p>
            <br></br>
            <img
              src={Ecomm}
              alt="Ecommerce site"
              height={350}
              width={"auto"}
              style={{ justifyContent: "center" }}
            />
          </li>
          <br></br>
          <li>
            {" "}
            <h3>Spotify Clone:</h3>
            <p>
              Currently working on the development of a site with social network
              type capabilities, using this time a database and backend
              architechture integrated into the application. Developing a
              database and API communication between back/front end, integrating
              typescript to leverage code quality and avoiding errors in the
              code early in the production. Vite will be used instead of create
              react app for faster performance.{" "}
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}

export default ProjectsComp;

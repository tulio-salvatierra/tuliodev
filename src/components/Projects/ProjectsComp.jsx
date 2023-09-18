import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecomm from "../../assets/images/ecomm.jpeg";
import { Grid, Typography } from "@mui/material";

function ProjectsComp() {
  return (
    <>
      <div className="project-container">
        <Grid container>
          <Grid item sm={4}>
            <Typography className="project-list" variant="h1">
              Projects
            </Typography>
          </Grid>

          <Grid item sm={8}>
            <ol>
              <li>
                <p className="project-text">
                  <h4 className="project-subt">Ecommerce site:</h4>
                  Used a real world API to create an ecommerce
                  platform(Mercadolibre.com), that has a search capabbility,
                  shopping cart functionality (decrease/increse/clear cart) and
                  has authenticated routes, integrated with a database using
                  Firebase/Firestore for hosting and data managment. Also
                  developed for CI/CD with automted actions integrating
                  automatic push, when the repository on a PR or merge, also
                  Material UI library component and themes were appplied{" "}
                </p>
                <br></br>
                <div className="project-details">
                  <div class="card" style={{ width: "17rem" }}>
                    <img src={Ecomm} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Ecommerce site</h5>
                      <p className="card-text"></p>
                      <div className="project-links">
                        <a
                          href="https://react---ecomm.web.app/"
                          class="btn btn-light mx-2"
                        >
                          Live Site
                        </a>
                        <a
                          href="https://github.com/T00lio/mlchallenge"
                          class="btn btn-light mx-2"
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <br></br>
              <li>
                {" "}
                <p className="project-text">
                  <h4 className="project-subt">Spotify Clone:</h4>
                  Currently working on the development of a site with social
                  network type capabilities, using this time a database and
                  backend architechture integrated into the application.{" "}
                </p>
              </li>
            </ol>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProjectsComp;

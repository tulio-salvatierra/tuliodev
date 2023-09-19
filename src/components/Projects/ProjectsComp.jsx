import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ecomm from "../../assets/images/ecomm.jpeg";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Button, CardBody, CardTitle } from "reactstrap";

function ProjectsComp() {
  return (
    <>
      <div className="project-container">
        <Grid container spacing={2}>
          <Grid item smUp={4} xs={12}>
            <Typography className="project-list" variant="h1">
              Projects
            </Typography>
          </Grid>

          <Grid item xs={12} smUp={8} marginRight={-20} mt={2}>
            <ol>
              <li>
                <Typography className="project-text" xs={12}>
                  <Typography variant="h4" className="project-subt" xs={12}>
                    Ecommerce site:
                  </Typography>
                  Used a real world API to create an ecommerce
                  platform(Mercadolibre.com), that has a search capabbility,
                  shopping cart functionality (decrease/increse/clear cart) and
                  has authenticated routes, integrated with a database using
                  Firebase/Firestore for hosting and data managment. Also
                  developed for CI/CD with automted actions integrating
                  automatic push, when the repository on a PR or merge, also
                  Material UI library component and themes were appplied{" "}
                </Typography>
                <br></br>
                <Box className="project-details">
                  <Card class="card" style={{ width: "17rem" }}>
                    <img src={Ecomm} class="card-img-top" alt="..." />
                    <CardBody class="card-body">
                      <CardTitle class="card-title">Ecommerce site</CardTitle>
                      <Box
                        className="project-links"
                        xs={{ justifyContent: "space-between" }}
                      >
                        <Button href="https://react---ecomm.web.app/">
                          Live Site
                        </Button>
                        <Button href="https://github.com/T00lio/mlchallenge">
                          Repo
                        </Button>
                      </Box>
                    </CardBody>
                  </Card>
                </Box>
              </li>
              <br></br>
              <li>
                {" "}
                <Typography className="project-text">
                  <Typography variant="h4" className="project-subt">
                    Spotify Clone:
                  </Typography>
                  Currently working on the development of a site with social
                  network type capabilities, using this time a database and
                  backend architechture integrated into the application.{" "}
                </Typography>
              </li>
            </ol>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProjectsComp;

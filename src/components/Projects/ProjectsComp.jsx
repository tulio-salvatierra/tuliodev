import React from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Grid, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Button } from "reactstrap";
import Ecomm from "../../assets/images/ecomm.jpeg";

function ProjectsComp() {
  return (
    <>
      <div className="project-container">
        <Grid container spacing={2}>
          <Grid item smUp={4} xs={12}>
            <Typography
              className="project-list"
              variant="h1"
              sx={{ marginTop: 6 }}
            >
              Projects
            </Typography>
          </Grid>

          <Grid item xs={12} smUp={8} marginRight={-20} mt={2}>
            <ol style={{ listStyle: "none" }}>
              <li>
                {" "}
                <Typography
                  variant="h4"
                  className="project-subt"
                  component="div"
                  xs={1}
                  sx={{ marginTop: 2, marginLeft: 20 }}
                >
                  Ecommerce site:
                </Typography>
                <Typography
                  className="project-text"
                  xs={8}
                  sx={{ margin: "auto" }}
                >
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
                  <Card sx={{ width: "30rem", margin: "auto" }}>
                    <CardMedia
                      component="img"
                      image={Ecomm}
                      title="projectImage"
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Ecommerce site
                      </Typography>

                      <CardActions
                        className="project-links"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Button href="https://react---ecomm.web.app/">
                          Live Site
                        </Button>
                        <Button href="https://github.com/T00lio/mlchallenge">
                          Repo
                        </Button>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Box>
              </li>
              <br></br>
              <li>
                {" "}
                <Typography
                  variant="h4"
                  className="project-subt"
                  component="div"
                  xs={1}
                  sx={{ marginTop: 2, marginLeft: 20 }}
                >
                  Spotify Clone:
                </Typography>
                <Typography
                  className="project-text"
                  xs={8}
                  width={"70%"}
                  sx={{ margin: "auto" }}
                >
                  Currently working on the development of a site with social
                  network type capabilities, using this time a database and
                  backend architechture integrated into the application.
                  Developing a database and API communication between back/front
                  end, integrating typescript to leverage code quality and
                  avoiding errors in the code early in the production. Vite will
                  be used instead of create react app for faster performance.{" "}
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

import React from "react";
import "./About.css";
import { Box, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Skills from "../Skills/Skills";

function About() {
  return (
    <section className="container">
      <Grid container spacing={2} marginBottom={10}>
        <Grid
          item
          smdown={12}
          p={4}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Typography
            variant="h1"
            className="AboutTitle"
            sx={{ marginTop: 6, marginRight: "auto", marginLeft: "auto" }}
            fontFamily={"'Montserrat', sans-serif"}
            fontWeight={700}
          >
            About
          </Typography>
        </Grid>
        <Grid item smdown={12} smup={8} mt={2}>
          <Box className="icon-container">
            {" "}
            <LinkedInIcon sx={{ fontSize: 50, margin: "auto" }} />
            <GitHubIcon sx={{ fontSize: 50, margin: "auto" }} />
          </Box>
          <Typography
            className="About-text"
            component="p"
            sx={{
              margin: "auto",
              fontSize: "1.75rem",
              fontWeight: "400",
              textAlign: "justify",
            }}
          >
            Dedicated and skilled web developer with a strong foundation in
            HTML, CSS, Javascript and React, backed by a diverse professional
            background, including CDL trucking and Financial analysis roles. I
            do have a soft spot for music, being a drummer I''ve fortunate to be
            in many bands, I love live music and being creative, which is why I
            pursued front end development. Currently looking for a position as a
            front end developer.
          </Typography>

          <Box className="stack-icons">
            <Skills />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;

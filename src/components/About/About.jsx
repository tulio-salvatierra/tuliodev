import React from "react";
import "./About.css";
import { Box, Grid, Typography } from "@mui/material";
import { Button } from "reactstrap";

function About() {
  return (
    <section className="container">
      <Grid container spacing={2} marginBottom={10}>
        <Grid item smdown={12} p={4}>
          <Typography
            variant="h1"
            className="AboutTitle"
            sx={{ marginTop: 6, marginRight: "auto" }}
            fontFamily={"'Montserrat', sans-serif"}
            fontWeight={700}
          >
            About
          </Typography>
        </Grid>
        <Grid item smdown={12} smup={8} mt={2}>
          <Typography
            className="About-text"
            component="p"
            sx={{
              margin: "auto",
              fontSize: "2rem",
              fontWeight: "400",
              textAlign: "justify",
            }}
          >
            Dedicated and skilled web developer with a strong foundation in
            HTML, CSS, Javascript and React, backed by a diverse professional
            background, including CDL trucking and Financial analysis roles. I
            do have a soft spot for music, being a drummer I''ve fortunate to be
            in many bands, I love live music and being creative, which is why I
            pursued front end development. Originally from Venezuela, located in
            Chicago, Illinois. Find me on social media or contact me for more
            information.
          </Typography>
          <Box className="pic-container">
            {" "}
            <Button size="lg" color="primary" href="/contact">
              Contact me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default About;

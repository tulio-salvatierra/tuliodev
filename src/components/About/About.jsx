import React from "react";
import "./About.css";
import { Box, Grid, Typography } from "@mui/material";
import { Button } from "reactstrap";

import WY from "../../assets/images/wy.jpeg";

function About() {
  return (
    <div className="container">
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
            component="div"
            sx={{ margin: "auto", fontSize: "1.5rem", fontWeight: "300" }}
          >
            Dedicated and skilled web developer with a strong foundation in
            HTML, CSS, Javascript and React, backed by a diverse professional
            background, including CDL trucking and Financial analysis roles. I
            do have a soft spot for music, being a drummer I''ve fortunate to be
            in many bands, I love live music and being creative, which is why I
            pursued front end development. Originally from Venezuela, located in
            Chicago, Illinois. Find me on social media or contact me for more
            information.
            <div className="button">
              <Button outline size="lg" color="secondary" href="/contact">
                Contact me
              </Button>
            </div>
          </Typography>
          <Box className="pic-container">
            <img src={WY} alt="pic" width={400} height={300} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

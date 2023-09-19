import React from "react";
import "./About.css";
import { Box, Grid, Typography } from "@mui/material";
import AZ from "../../assets/images/az.jpeg";
import VA from "../../assets/images/va.jpeg";
import WY from "../../assets/images/wy.jpeg";

function About() {
  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item smdown={12} smUp={4}>
          <Typography variant="h1" className="AboutTitle">
            About
          </Typography>
        </Grid>
        <Grid item smdown={12} smUp={8} mt={2}>
          <Typography className="About-text">
            Dedicated and skilled web developer with a strong foundation in
            HTML, CSS, Javascript and React, backed by a diverse professional
            background, including CDL truck driving and Financial analysis
            roles. Originally from Venezuela 🇻🇪 , move the United States in 2017
            and had the pleasure of visiting all 48 states as a truck driver. On
            my free time I code and play drums which is simmilar to programming,
            which led me to persue a career in web development as a technology
            enthusiast. I am a team player, a fast learner, and I am always
            looking for ways to improve my skills and knowledge.
          </Typography>
          <Box className="pic-container">
            <img src={AZ} alt="pic" width={100} height={null} />
            <img src={WY} alt="pic" width={150} height={120} />
            <img src={VA} alt="pic" width={100} height={null} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

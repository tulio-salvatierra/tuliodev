import React from "react";
import "./About.css";
import { Box, Grid, Typography } from "@mui/material";
import { Button } from "reactstrap";

import WY from "../../assets/images/wy.jpeg";

function About() {
  return (
    <div className="container">
      <Grid container spacing={2} marginBottom={10}>
        <Grid item smdown={12} smUp={4}>
          <Typography
            variant="h1"
            className="AboutTitle"
            sx={{ marginTop: 6, marginRight: "auto" }}
          >
            About
          </Typography>
        </Grid>
        <Grid item smdown={12} smUp={8} mt={2}>
          <Typography
            className="About-text"
            component="div"
            sx={{ margin: "auto", fontSize: "1.5rem", fontWeight: "300" }}
          >
            Dedicated and skilled web developer with a strong foundation in
            HTML, CSS, Javascript and React, backed by a diverse professional
            background, including CDL truck driving and Financial analysis
            roles. Originally from Venezuela 🇻🇪 , move the United States in 2017
            and had the pleasure of visiting all 48 states as a truck driver. On
            my free time I code and play drums which is simmilar to programming,
            which led me to persue a career in web development as a technology
            enthusiast. I am a team player, a fast learner, and I am always
            looking for ways to improve my skills and knowledge. I began my
            journey in web development in 2023, when I enrolled in Nucamp coding
            bootcamp, for Front end web develepment back in march. I have
            learned a lot since then, and I am looking forward to continue
            learning and growing as a developer. Once completed I began
            developing project which have increased my skills and knowledge in
            the field. I am currently working on a project that will be deployed
            soon, and I am looking forward to continue working on it and other
            projects. I am also looking forward to continue learning and growing
            as a developer. I am currently looking for a job as a web developer,
            and I am open to discuss any opportunities.
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

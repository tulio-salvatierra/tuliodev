import React, { useRef, useEffect } from "react";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Grid, Typography } from "@mui/material";
import "./Hero.css";
import hero from "../../assets/images/hero.PNG";
import { gsap } from "gsap";

function Hero() {
  const phoneNumber = "786-314-6121";
  const email = "salvacorp@gmail.com";

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`);
  };

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${phoneNumber}`);
  };

  const heroRef = useRef(null);
  useEffect(() => {
    gsap.set(heroRef.current, {
      opacity: 0,
      scale: 0.5,
    });
    gsap.to(heroRef.current, {
      duration: 1.5,
      delay: 0.5,
      scale: 1.5,
      yPercent: 0,
      opacity: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <Grid container spacing={2} marginBottom={10}>
      <div className="hero-container">
        <div ref={heroRef} className="imageContainer">
          <img
            src={hero}
            alt="hero"
            width={"150px"}
            height={"150px"}
            className="image"
          />
        </div>
        <div className="heroText">
          <h1 className="heroTitle">Front end Developer</h1>
          <p className="heroP">
            I’m Tulio, Software developer with a background in finance and
            freight. Here you'll see some of my projects and skills. Feel free
            to contact me, let me know how can I help you or your business!
          </p>
        </div>
        <div className="button">
          <Button
            size="lg"
            variant="contained"
            color="primary"
            target="_blank"
            endIcon={<MailOutlineIcon />}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            onClick={handleEmailClick}
          >
            Email
          </Button>
          <Button
            size="lg"
            variant="contained"
            color="primary"
            endIcon={<PermPhoneMsgIcon />}
            target="_blank"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            onClick={handlePhoneClick}
          >
            Call/Text
          </Button>
          <Button
            size="lg"
            variant="contained"
            color="primary"
            target="_blank"
            endIcon={<WhatsAppIcon />}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            onClick={handleWhatsappClick}
          >
            Whatsapp
          </Button>
        </div>
      </div>
    </Grid>
  );
}

export default Hero;

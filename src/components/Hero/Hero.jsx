import "./Hero.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UpworkIcon from "../../assets/icons/upwork.png";
import { LINKEDIN_URL, GITHUB_URL, UPWORK_URL } from "../../Constants";
import profile_pic from "../../assets/images/hero/profile.jpeg";
import Owl from "./../../assets/tulio.svg";
import HeroSub from "../HeroSub1/HeroSub";

function Hero() {
  return (
    <>
      <section className="hero-section" id="hero">
        <HeroSub />
        <h1 className="hero-title">
          Empowering Your Business with Custom Web Solutions
        </h1>
        <div className="hero flex mb-5">
          <div className="col1 d-flex flex-column align-content-center">
            <img
              src={Owl}
              alt="logo icon of web development services chicago"
              className="stack"
            />
            <a className="custom-btn" href="/contact">
              Start Your Project Today
            </a>
          </div>
          <div className="col2 ">
            <img
              src={profile_pic}
              alt="tulio_salvatierra"
              className="hero-image"
            />
          </div>
          <div className="col3 d-flex flex-column p-0">
            <h3 className="hero-welcome">
              Specializing in responsive website development, user-friendly
              interfaces, and seamless user experiences to elevate your online
              presence and drive business growth.
            </h3>
            <div className="hero-icons w-50 justify-content-between">
              <a href={LINKEDIN_URL}>
                <LinkedInIcon
                  sx={{ fontSize: 30, color: "#fefefe", width: "auto" }}
                />
              </a>

              <a href={GITHUB_URL}>
                <GitHubIcon sx={{ fontSize: 30, color: "#fff" }} />
              </a>
              <a href={UPWORK_URL}>
                <img
                  src={UpworkIcon}
                  alt="upwork"
                  className="upwork"
                  style={{ height: 32 }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

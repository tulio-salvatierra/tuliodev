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
        <div className="container-xl h-100">
          <h1 className="hero-title">TULIO SALVATIERRA</h1>

          <HeroSub />

          <div className="container-fluid flex">
            <div className="col1 d-flex flex-column align-content-center">
              <img src={Owl} alt="hero-icon" className="stack" />

              <h1 className="text-center">Full Stack Developer</h1>
              <a className="custom-btn" href="/contact">
                Get in touch
              </a>
            </div>
            <div className="col2 ">
              <img
                src={profile_pic}
                alt="tulio_salvatierra"
                className="hero-image"
              />
            </div>
            <div className="col3 d-flex flex-column align-content-center p-0">
              <h5 className="hero-welcome">
                I build websites and provide digital solutions to help
                businesses and professionals drive growth and enhance your
                online presence.
              </h5>
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
        </div>
      </section>
    </>
  );
}

export default Hero;

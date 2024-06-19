import "./Hero.css";
import portrait from "../../assets/images/portrait.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UpworkIcon from "../../assets/icons/upwork.png";
import { LINKEDIN_URL, GITHUB_URL, UPWORK_URL } from "../../Constants";
import RESUME from "../../assets/resume.pdf";

function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="padleft"></div>
          <div className="padright"></div>
          <div className="right">
            <div className="right-div">
              <h1 className="hero-title">Tulio Salvatierra</h1>

              <h3 className="hero-text">Full Stack Developer</h3>

              <h3 className="hero-description">
                I enjoy delivering effective solutions, with a solid foundation
                in HTML, CSS, and JavaScript.
              </h3>
              <div className="socialhero-icons">
                <a href={LINKEDIN_URL}>
                  <LinkedInIcon sx={{ fontSize: 30, color: "#fff" }} />
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
          <div className="hero-image">
            <img src={portrait} alt="portrait" className="portrait"></img>
          </div>

          <div className="lowerL">
            <a type="button" className="link" href={RESUME} download>
              download resume
            </a>
          </div>
          <div className="lowerR">
            <a type="button" className="link" href="#contact">
              contact me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

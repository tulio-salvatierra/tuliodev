import "./Hero.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UpworkIcon from "../../assets/icons/upwork.png";
import { LINKEDIN_URL, GITHUB_URL, UPWORK_URL } from "../../Constants";
import profile_pic from "../../assets/images/hero/profile.jpeg";

function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <h1 className="hero-title">Tulio Salvatierra</h1>
        <div className="container-fluids">
          <div className="row">
            <div className="col p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M229.18 173a6 6 0 0 1-2.16 8.2l-96 56a6 6 0 0 1-6 0l-96-56a6 6 0 0 1 6-10.36l93 54.23l93-54.23a6 6 0 0 1 8.16 2.16M221 122.82l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31Z"
                />
              </svg>

              <h3 className="display-4">Full Stack Developer</h3>
              <a className="custom-btn" href="/contact">
                Get in touch
              </a>
            </div>
            <div className="col p-0">
              <img
                src={profile_pic}
                alt="tulio_salvatierra"
                className="hero-image"
              />
            </div>
            <div className="col p-0">
              <h1 className="hero-text">
                I have a passion for building beautiful and functional websites,
                with solid foundations on fundamentals.
              </h1>
              <div className="hero-icons">
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

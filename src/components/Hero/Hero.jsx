import "./Hero.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UpworkIcon from "../../assets/icons/upwork.png";
import { LINKEDIN_URL, GITHUB_URL, UPWORK_URL } from "../../Constants";
import profile_pic from "../../assets/images/hero/profile.jpeg";

function Hero() {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="container-xl">
          <h1 className="hero-title">TULIO SALVATIERRA</h1>
          <div className="container-fluid flex">
            <div className="col1 d-flex flex-column align-content-center">
              <svg
                className="stack"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 256"
              >
                {/* Define the linear gradient */}
                <defs>
                  <linearGradient
                    id="myGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#8aff85" }} />
                    <stop offset="100%" style={{ stopColor: "#d0ff7d" }} />
                  </linearGradient>
                </defs>

                {/* Apply the gradient to the path */}
                <path
                  fill="url(#myGradient)"
                  d="M229.18 173a6 6 0 0 1-2.16 8.2l-96 56a6 6 0 0 1-6 0l-96-56a6 6 0 0 1 6-10.36l93 54.23l93-54.23a6 6 0 0 1 8.16 2.16M221 122.82l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31Z"
                />
              </svg>

              <h1>Web Solutions</h1>
              <a className="custom-btn" href="/contact">
                Get in touch
              </a>
            </div>
            <div className="col2 p-0">
              <img
                src={profile_pic}
                alt="tulio_salvatierra"
                className="hero-image"
              />
            </div>
            <div className="col3 d-flex flex-column align-content-center p-0">
              <h5>
                I build websites and provide digital solutions to help
                businesses and professionals thrive online. I create
                user-friendly experiences that drive growth and enhance your
                online presence.
              </h5>
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

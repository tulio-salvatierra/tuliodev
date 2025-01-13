import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "./Hero.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomButton from "../CustomButtom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import UpworkIcon from "../../assets/icons/upwork.png";
import {
  TELEPHONE,
  LINKEDIN_URL,
  GITHUB_URL,
  UPWORK_URL,
} from "../../Constants";
import profile_pic from "../../assets/images/hero/profile.jpeg";
import HeroSub from "../HeroSub1/HeroSub";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const panelsBottomRef = useRef([]);

  useEffect(() => {
    const handleMouseEnter = () => {
      gsap.to(".custom-btn", {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(".custom-btn", {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };
  }, []);
  return (
    <>
      <section className="hero-section" id="hero">
        <HeroSub />
        <h1
          className="hero-title"
          ref={(el) => (panelsBottomRef.current[0] = el)}
        >
          TULIO SALVATIERRA
        </h1>

        <div className="hero flex mb-5">
          <div
            className="col1 d-flex flex-column align-content-center"
            ref={(el) => (panelsBottomRef.current[1] = el)}
          >
            <h3 className="hero-welcome">
              I help elevate your online presence and drive business growth by
              delivering responsive, user-friendly interfaces and seamless user
              experience.
            </h3>
            <CustomButton
              name="Start my Project Today"
              url={`tel:${TELEPHONE}`}
            />
          </div>
          <div className="col2" ref={(el) => (panelsBottomRef.current[2] = el)}>
            <img
              src={profile_pic}
              alt="tulio_salvatierra"
              className="hero-image"
            />
          </div>
          <div
            className="col3 d-flex flex-column p-0"
            ref={(el) => (panelsBottomRef.current[3] = el)}
          >
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

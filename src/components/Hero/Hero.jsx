import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "./Hero.css";

import CustomButton from "../CustomButtom";

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
            className="col1 d-flex flex-column align-content-start justify-content-between"
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
            <div className="hero-icons p-2 justify-content-between">
              <a className="fs-2 text-decoration-none" href={LINKEDIN_URL}>
                LINKEDIN<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 032 32">
	<path fill="none" stroke="#e3e4e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19L19 6m0 0v12.48M19 6H6.52" />
</svg>
              </a>

              <a className="fs-2 text-decoration-none"  href={GITHUB_URL}>
                GITHUB<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 032 32">
	<path fill="none" stroke="#e3e4e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19L19 6m0 0v12.48M19 6H6.52" />
</svg>
              </a>
              <a className="fs-2 text-decoration-none"  href={UPWORK_URL}>
                UPWORK<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 032 32">
	<path fill="none" stroke="#e3e4e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19L19 6m0 0v12.48M19 6H6.52" />
</svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

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
    const easeFromBelow = gsap.matchMedia();
    easeFromBelow.add("(min-width: 801px)", () => {
      gsap.from(panelsBottomRef.current, {
        y: 25,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: panelsBottomRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: false,
        },
      });
    });   
  }, []);
  return (
    <>
      <section className="hero-section mt-5" id="hero">
        <HeroSub />
        <h1
          className="hero-title d-block"
          ref={(el) => (panelsBottomRef.current[0] = el)}
        >
          TULIO SALVATIERRA
        </h1>

        <div className="hero flex p-1 p-sm-5">
          <div
            className="col1 d-flex flex-column align-content-start justify-content-start"
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
            className="col3 d-flex flex-column align-content-between justify-content-between"
            ref={(el) => (panelsBottomRef.current[3] = el)}
          >
            <div className="hero-icons justify-content-between d-none d-sm-flex">
              <a className="fs-3 text-decoration-none" href={LINKEDIN_URL}>
                LINKEDIN
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 032 32"
                >
                  <path
                    fill="none"
                    stroke="#e3e4e2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 19L19 6m0 0v12.48M19 6H6.52"
                  />
                </svg>
              </a>

              <a className="fs-3 text-decoration-none" href={GITHUB_URL}>
                GITHUB
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 032 32"
                >
                  <path
                    fill="none"
                    stroke="#e3e4e2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 19L19 6m0 0v12.48M19 6H6.52"
                  />
                </svg>
              </a>
              <a className="fs-3 text-decoration-none" href={UPWORK_URL}>
                UPWORK
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 032 32"
                >
                  <path
                    fill="none"
                    stroke="#e3e4e2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 19L19 6m0 0v12.48M19 6H6.52"
                  />
                </svg>
              </a>
            </div>
            <svg className="scroll-down d-none d-md-block mr-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="50%"
              height="auto"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#e3e4e2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="m6 6l13 13m0 0V6.52M19 19H6.52"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

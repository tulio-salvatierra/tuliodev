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
        y: 35,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.6,
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
      <section
        className="hero-section"
        id="hero"
        ref={(el) => (panelsBottomRef.current[0] = el)}
      >
        <div className="hero justify-content-between">
          <div className="div-2 row-12">
            <h1
              className="name col-8"
              ref={(el) => (panelsBottomRef.current[1] = el)}
            >
              TULIO
            </h1>
            <h1
              className="last-name col-1"
              ref={(el) => (panelsBottomRef.current[2] = el)}
            >
              SALVATIERRA
            </h1>
          </div>
          <div className="row">
            <HeroSub />
          </div>
          <div
            className="row"
            ref={(el) => (panelsBottomRef.current[4] = el)}
          >
            <img
              src={profile_pic}
              alt="tulio_salvatierra"
              className="hero-image"
            />
          
          <div
            className="div-3 col-4"
            ref={(el) => (panelsBottomRef.current[3] = el)}
          >
            <h2 className="">FULL STACK DEVELOPER</h2>
            <p className="">
              I help elevate your online presence and drive business growth by
              delivering responsive, user-friendly interfaces and seamless user
              experience.
            </p>
            <CustomButton
              name="Start my Project Today"
              url={`tel:${TELEPHONE}`}
            />
          </div>

          <div
            className="col-4 links"
            ref={(el) => (panelsBottomRef.current[5] = el)}
          >
            <a className="fs-4 text-decoration-none" href={LINKEDIN_URL}>
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

            <a className="fs-4 text-decoration-none" href={GITHUB_URL}>
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
            <a className="fs-4 text-decoration-none" href={UPWORK_URL}>
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
        </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

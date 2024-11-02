import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TELEPHONE } from "../../Constants";
import "./FloatingCallButton.css";

export default function FloatingCallButton() {
  const buttonRef = useRef(null);
  useEffect(() => {
    const config = { strength: 1 };

    // Set initial position and xPercent
    gsap.set(buttonRef.current, { xPercent: -50, x: -1 });

    // Tween animation
    gsap.to(buttonRef.current, {
      repeat: -1,
      yoyo: true,
      x: 1,
      duration: 0.2,
      ease: "power1.inOut",
      modifiers: {
        x: gsap.utils.unitize((value) => value * config.strength, "px"),
      },
    });

    // ScrollTrigger animation for config.strength
    gsap.to(config, {
      strength: 10,
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      className="position-fixed bottom-0 end-0 mb-5 me-4 z-1000000"
      ref={buttonRef}
    >
      <a href={`callto:${TELEPHONE}`} className="floating-btn">
        Call now
      </a>
    </div>
  );
}

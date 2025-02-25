import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import "./Products.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsComp() {
  const eased = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 801px)", () => {
      gsap.from(eased.current, {
        y: 25,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: eased.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: false,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <section id="products" className="product-section white-bg">
      <h1 className="section-title">WHAT I CAN DO</h1>
      <div className="product-grid">
        <div className="title display-1">WEBSITES</div>
        <div className="separator"></div>
        <div className="number">01</div>
        <div className="category">WEB DEVELOPMENT</div>
        <div className="decor"></div>
        <div className="desc">
          I build responsive, user-friendly interfaces and seamless user-centric
          experiences. Custom tailored to fit any business needs and size, from
          small business to large corporations.
        </div>
      </div>
    </section>
  );
}

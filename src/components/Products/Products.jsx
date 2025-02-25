import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { TELEPHONE } from "../../Constants";
import "./Products.css";
import Support from "../Support";
import Google from "../Google";
import Websites from "../Websites";
import CustomButton from "../CustomButtom";

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
        ease: "power4.out", // Smooth easing
        stagger: 0.15, // Stagger animations for a cascading effect
        scrollTrigger: {
          trigger: eased.current, // Trigger animation when elements come into view
          start: "top 70%", // Start animation when top of element is 80% of viewport height
          end: "bottom 20%", // Animation ends when bottom of element is 20% of viewport height
          scrub: false, // Set to true for a smoother experience when scrolling
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <section id="products" className="product-section col-12">
      <div className="product-grid">
        <div className="title section-title">PRODUCTS</div>
        <div className="number">01</div>
        <div className="category">WEB DEVELOPMENT</div>
        <div className="description">
          I offer multiple options for all size and need, landing pages, product
          pages, websites, ecommerce
        </div>
      </div>
      <CustomButton
        text="Contact Me"
        url={`tel:${TELEPHONE}`}
        className="contact-button"
      />
    </section>
  );
}

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
          start: "top 80%", // Start animation when top of element is 80% of viewport height
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
    <section id="products" className="product-section">
    
        <h2 className="product-title" ref={(el) => (eased.current[0] = el)}>
          PRODUCTS
        </h2>
    

      <div className="row gx-1 p-4">
        <div className="col-lg-3 col-md-6">
          <h3 className="welcomepr">01.WEBSITES</h3>
          <Websites/>
        </div>
        <div className="col-lg-3 col-md-6" ref={(el) => (eased.current[4] = el)}>
          <h3 className="welcomepr">02.SUPPORT</h3>
          <Support />
        </div>
        <div className="col-lg-3 col-md-6" ref={(el) => (eased.current[5] = el)}>
          <h3 className="welcomepr">03.MARKETING</h3>
          <Google />
        </div>
      </div>
      <CustomButton name={"Book Now"} url={`tel:${TELEPHONE}`} />
    </section>
  );
}

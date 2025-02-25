import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { TELEPHONE } from "../../Constants";
import "./Products.css";
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
    </section>
  );
}

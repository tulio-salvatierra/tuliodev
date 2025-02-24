import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { productsData } from "./ProductsData";
import { TELEPHONE } from "../../Constants";
import "./Products.css";
import Support from "../Support";
import Google from "../Google";
import CustomButton from "../CustomButtom";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsComp() {
  const eased = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 801px)", () => {
      gsap.from(eased.current, {
        y: 50, // Start position (below)
        opacity: 0, // Start fully transparent
        duration: 1, // Animation duration
        ease: "power2.out", // Smooth easing
        stagger: 0.3, // Stagger animations for a cascading effect
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
      <div className="project-header">
        <h2 className="section-title" ref={(el) => (eased.current[0] = el)}>
          Products
        </h2>
        <div className="d-flex subtitle-box"></div>
      </div>

      <section className="product-section">
        <h3 className="welcome">SUPPORT</h3>
        <Support />

        <h3 className="welcome">MARKETING</h3>
        <Google />
      </section>

      <h3 className="welcome">WEBSITES</h3>
      {productsData.map((product, index) => (
        <div
          key={index}
          className="product-card"
          ref={(el) => (eased.current[index + 1] = el)}
        >
          <div className="product-title p-4">
            <h3 className="product-subtitle">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <a className="product-price" href="/products">
              {product.price}
            </a>
          </div>
          <div>
            {product.features.map((feature, index) => (
              <li key={index} className="product-feature">
                {feature}
              </li>
            ))}
          </div>
          <CustomButton name={product.CTA} url={`tel:${TELEPHONE}`} />
          <p className="ideal mt-4">Ideal for: {product.idealFor}</p>
        </div>
      ))}
    </section>
  );
}

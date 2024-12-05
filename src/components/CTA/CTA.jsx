import "./CTA.css";
import { TELEPHONE } from "../../Constants";
import BG from "../../assets/images/owl.jpg";

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="parent-cta">
        <div className="div1">
          <h2 className="ctaTitle">¡Hagamos crecer su negocio juntos!</h2>
        </div>
        <div className="div2">
          <p className="ctaSub">
            Contáctenos hoy para una solución web personalizada y gratuita.
          </p>
        </div>
        <div className="div3">
          <img src={BG} alt="owl" className="ctaImage" />
        </div>
        <div className="div4">
          <a className="custom-btn" href={`tel:${TELEPHONE}`}>
            Free consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;

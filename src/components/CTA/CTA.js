import "./CTA.css";
import BG from "../../assets/images/owl.jpg";

function CTA() {
  return (
    <section
      id="cta"
      className="cta z-0"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay z-3"></div>
      <div className="container pt-3 rounded z-1">
        <div className="cta-text">
          <h1>Need help with a project?</h1>
          <h2>Reach out and let me know how I can help!</h2>
        </div>
        <div className="button-container w-50 justify-content-center">
          <a href="/contact" className="custom-btn">
            Let's Collaborate!
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;

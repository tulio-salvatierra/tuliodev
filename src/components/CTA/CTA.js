import "./CTA.css";
import BG from "../../assets/images/bg/owl.jpg";

function CTA() {
  return (
    <section
      id="cta"
      className="cta"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container p-3 rounded">
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

import "./CTA.css";
import BG from "../../assets/images/owl.jpg";

function CTA() {
  return (
    <section
      id="cta"
      className="cta"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative", // Ensures the overlay and content are positioned relative to this section
      }}
    >
      <div className="overlay"></div>{" "}
      {/* Overlay for darkening the background */}
      <div className="content">
        <div className="cta-text">
          <h1>Need help with a project?</h1>
          <h2>Reach out and let me know how I can help!</h2>
        </div>
        <div className="button-container">
          <a href="/contact" className="custom-btn">
            Let's Collaborate!
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;

import "./CTA.css";

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h1 className="cta-text">Need help with a project?</h1>
        <h2>Reach out and let me know how I can help!</h2>
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

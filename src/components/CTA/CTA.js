import "./CTA.css";

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h1 className="cta">
          Need help with a project? Reach out and let me know how I can help!
        </h1>
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

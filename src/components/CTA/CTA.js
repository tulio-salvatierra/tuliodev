import "./CTA.css";

function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="callToAction">
        <div className="container-xl">
          <h1 className="display-1">
            Need help with a project? Reach out and let me help!
          </h1>
          <div className="button-container">
            <a href="/contact" className="custom-btn">
              Let's Collaborate!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

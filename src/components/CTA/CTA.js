import "./CTA.css";

function CTA() {
  return (
    <div className="full-width-section">
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
    </div>
  );
}

export default CTA;

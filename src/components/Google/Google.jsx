import "./Google.css";

export default function Google() {
  return (
    <>
      <div className="support-box">
        <h3 className="support-subtitle">Digital Marketing Audit Services</h3>
        <div className="">
          <div>
            <h4 className="text-xl font-semibold">
              Google Business Profile Audit – $300
            </h4>
            <ol className="support-feature">
              <li>
                Comprehensive review of your Google Business Profile for
                accuracy and optimization
              </li>
              <li>Recommendations for enhancing local search visibility</li>
              <li>Analysis of customer reviews and engagement</li>
            </ol>
            <p>
              Ideal For: Businesses seeking to improve their local search
              presence and customer engagement.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold">
              Full Google Products Audit – $500
            </h4>
            <ol className="support-feature">
              <li>Evaluation of Google Analytics setup and data accuracy</li>
              <li>
                Assessment of Google Search Console for indexing and performance
                issues
              </li>
              <li>Review of Google Ads campaigns for effectiveness</li>
              <li>Optimization of Google Tag Manager implementations</li>
            </ol>
            <p>
              Ideal For: Businesses aiming to leverage Google's suite of tools
              for enhanced digital marketing performance.
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Additional Services:</h4>
          </div>
        </div>
        <a className="custom-btn">Book Now</a>
        <p className="note">
          Note: Prices are indicative and can be adjusted based on project
          complexity and specific client requirements.
        </p>
      </div>
    </>
  );
}

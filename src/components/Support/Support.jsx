import "./Support.css";

export default function Support() {
  return (
    <>
      <div className="support-box">
        <div className="mt-4">
          <h3>Monthly Plan – <strong>$100</strong></h3>
          <p className="support-feature">
            Includes 2 hours of website updates or support
          </p>

          <h3 className="text-xl font-semibold">Hourly Support – <strong>$50</strong></h3>
          <p className="support-feature">
            For additional updates or support beyond the included sessions
          </p>
        </div>
      </div>
    </>
  );
}

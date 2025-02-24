import "./Support.css";
import { TELEPHONE } from "../../Constants";
import CustomButton from "../CustomButtom";

export default function Support() {
  return (
    <>
      <div className="support-box">
        <div className="mt-5">
          <div>
            <h3 className="mt-4">Monthly Maintenance Plan – $100/month:</h3>
            <ol className="support-feature">
              <li>Regular updates and backups</li>
              <li>Security monitoring</li>
              <li>Content updates (up to a specified number of hours)</li>
            </ol>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold">
              Hourly Support – $50/hour:
            </h4>
            <p className="support-feature">
              For additional updates or support beyond the included sessions
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Additional Services:</h4>
            <ol className="support-feature">
              <li>Logo and Branding Design – $300</li>
              <li>Content Creation and Copywriting – $150 per page</li>
              <li>Advanced SEO Services – Custom pricing based on needs</li>
            </ol>
          </div>
        </div>

        <CustomButton name="Book Now" url={`tel:${TELEPHONE}`} />
        <p className="note mt-4">
          Note: Prices are indicative and can be adjusted based on project
          complexity and specific client requirements.
        </p>
      </div>
    </>
  );
}

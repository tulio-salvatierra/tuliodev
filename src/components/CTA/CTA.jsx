import "./CTA.css";
import { TELEPHONE } from "../../Constants";
import CustomButton from "../CustomButtom";
import BG from "../../assets/images/owl.jpg";

function CTA() {
  return (
    <section id="cta" className="cta p-4 w-100">
      <div
        className="rounded-2 justify-content-around d-flex flex-column align-items-center cta-container p-2"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <h3 className=" cta-welcome text-center">(Ready to get started?)</h3>
        <h2 className="cta-title">Let's talk about your project</h2>
        <CustomButton name="Contact Me" link={`tel:${TELEPHONE}`} />
      </div>
    </section>
  );
}

export default CTA;

import { EMAIL, TELEPHONE } from "../../Constants";
import CustomButton from "../CustomButtom";
import owl from "../../assets/images/contact/owl.png";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contact</h1>

      <div className="contact-parent">
        {" "}
        
        <div className="contact-info">
          <h4 className="contact-text">
            You can get in touch with me through the form below. I'll be happy
            to discuss your project or answer any questions about freelancing
            services, don't hesitate to reach out!
          </h4>
          <CustomButton name="Email" link={`mailto:${EMAIL}`} />
          <CustomButton name="Phone" link={`tel:${TELEPHONE}`} />
        </div>
        
        <div className="contact-picture">
          <img src={owl} alt="Contact" />
        </div>
      </div>
    </section>
  );
}

import { EMAIL, TELEPHONE } from "../../Constants";
import PhoneIcon from "./../../assets/icons/contact/phone.svg";
import EmailIcon from "./../../assets/icons/contact/mail.svg";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section h-100" id="contact">
      <h1 className="contact-title">Contact</h1>
      <h4 className="contact-text">
        You can get in touch with me through the form below. I'll be happy to
        discuss your project or answer any questions about freelancing services,
        don't hesitate to reach out!
      </h4>
      <div className="contact-parent h-50 m-3 m-sm-0">
        <div className="contact-info">
          <div className="contact-item">
            <img
              src={EmailIcon}
              alt="email icon for web develoment services in chicago"
            ></img>
            <a href={`mailto:${EMAIL}`} className="contact-text">
              <h4>{EMAIL}</h4>
            </a>
          </div>
          <div className="contact-item ju">
            <img
              src={PhoneIcon}
              alt="phone icon for web develoment services in chicago"
            ></img>
            <a href={`tel:${TELEPHONE}`} className="contact-text">
              <h4>{TELEPHONE}</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

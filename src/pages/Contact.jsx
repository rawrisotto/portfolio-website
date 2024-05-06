import { Link } from "react-router-dom";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from "/assets/background2.jpg";

const Contact = () => {
  return (
    <main>
      <section
        className="section contact"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${bgImage})`,
        }}
      >
        <h2 className="section__title">Get In Touch!</h2>
        <p className="contact__description">
          I am currently looking for oppurtunities to build my skills and gain
          experience as a web developer. Do contact me if you have any enquiries
          or if you are down to play some games together. I will do my best to
          get in touch with you! Cheers!
        </p>

        <button className="btn">
          <Link to="mailto:mdhidayatbs@gmail.com">
            <FontAwesomeIcon icon={faAt} aria-hidden="true" />{" "}
            <span>Email Me</span>
          </Link>
        </button>
      </section>
    </main>
  );
};

export default Contact;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Logo from "./assets/logo.png";
import "./footer.css";

library.add(faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin);

const Footer = () => {
  return (
    // container starts here
    <div className="container-footer">
      <div className="content-container-footer">
        {/* image box */}
        <div className="img-box-footer"></div>

        <div className="content-box-footer">
          <h2 className="title-footer">You can help shape the future</h2>
          <p className="description-footer">
            Are you looking for a top-notch mobile app or a powerful web
            application? Look no further! At Elite Valley, we specialize in
            creating innovative and high-quality digital solutions that meet
            your unique business needs.
          </p>
          <div className="sub-content-box-in-footer">
            <div className="linked-in-other-parts-of-the-page">
              <div className="first-column-home-and-contact-us">
                <div className="link-to-home-box same-div-style">
                  <span className="home-link">Home</span>
                </div>
                <div className="link-to-contact-us-box same-div-style">
                  <span className="contact-link">Contact Us</span>
                </div>
              </div>
              <div className="second-column-home-and-contact-us">
                <div className="link-to-contact-us-box same-div-style">
                  <span className="how-it-works-link">How it works</span>
                </div>
                <div className="link-to-contact-us-box same-div-style">
                  <span className="Privacy-Policy-link">Privacy Policy</span>
                </div>
              </div>
            </div>
            <div className="logo-in-footer">
              <img className="logo-it-self" src={Logo} alt="" />
            </div>
          </div>
          <div className="copyRight-and-social-media">
            <p className="copyRight">Copyright 2023</p>
            <div className="social-media-icon">
              <FontAwesomeIcon className="icons faYoutube" icon={faYoutube} />
              <FontAwesomeIcon className="icons faFacebook" icon={faFacebook} />
              <FontAwesomeIcon
                className="icons faInstagram"
                icon={faInstagram}
              />
              <FontAwesomeIcon className="icons faTwitter" icon={faTwitter} />
              <FontAwesomeIcon className="icons faLinkedin" icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // container end here
  );
};

export default Footer;

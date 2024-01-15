import React from "react";
// icon arrow right
import { FaArrowRight } from "react-icons/fa";
import SectionImage from "./assets/hero-section-img.png";
import "./hero-section.css";

// THE HERO SECTION STARTS HERE
const HeroSection = () => {
  return (
    <div className="container-hero-section-home-page">
      <div className="container-content-home-page">
        <div className="description-box">
          <p className="title-of-the-section">
            Empowering Businesses Through Innovative Software Solutions
          </p>
          <p className="paragraph-of-the-section">
            Are you looking for a top-notch mobile app or a powerful web
            application? Look no further! At Elite Valley, we specialize in
            creating innovative and high-quality digital solutions that meet
            your unique business needs. in creating innovative and high-quality
            digital solutions that meet your unique
          </p>
          {/* the box below used to make two buttons in row with flex */}
          <div className="box-for-buttons-hero-section-home-page">
            {/* GET IN TOUCH BUTTONS */}
            <a href="#" className="downlaod-button-hero-section-home-page">
              Downlaod App
            </a>
            {/* using the box below to use flex box for the button and the icon */}
            <div className="making-elements-flex-hero-section-home-page">
              {/* LEARN MORE BUTTON */}
              <a href="#" className="learn-more-hero-section-home-page">
                Learn More
              </a>
              {/* Right Arrow icon */}
              <FaArrowRight className="right-arrow-hero-section-home-page" />
            </div>
          </div>
        </div>
        {/* the box below used for image of the section */}
        <div className="image-box">
          <img
            className="image-of-the-hero-section"
            src={SectionImage}
            alt="hero section"
          />
        </div>
      </div>
    </div>
  );
};
// THE HERO SECTION ENDS HERE
export default HeroSection;

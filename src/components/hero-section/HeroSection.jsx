// importing react to write react code
import React from "react";
// importing the arrow icon to use with button learn more
import { FaArrowRight } from "react-icons/fa";
// importing the image for the hero section
import SectionImage from "../../assets/9c382122aa463071e259ffe97c1ab2ca.png";
// importing css file
import "./hero-section.css";

// THE HERO SECTION STARTS HERE
const HeroSection = () => {
  return (
    // the container starts here
    <div className="container-hero-section">
      {/* using the contianer below to make the page two parts with flex box */}
      <div className="container-content">
        {/* the box below is for descriptions like title, paragraph and button*/}
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
          <div className="box-for-buttons">
            {/* GET IN TOUCH BUTTONS */}
            <a href="#" className="Get-in-touch">
              Downlaod App
            </a>
            {/* using the box below to use flex box for the button and the icon */}
            <div className="making-elements-flex">
              {/* LEARN MORE BUTTON */}
              <a href="#" className="learn-more">
                Learn More
              </a>
              {/* Right Arrow icon */}
              <FaArrowRight className="right-arrow" />
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
    //the container starts here
  );
};
// THE HERO SECTION ENDS HERE

export default HeroSection;

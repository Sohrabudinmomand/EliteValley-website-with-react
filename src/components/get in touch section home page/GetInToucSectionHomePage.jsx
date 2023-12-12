import React from "react";
// importing the arrow icon to use with button learn more
import { FaArrowRight } from "react-icons/fa";

// importing the image for the hero section
import GetInTouchSectionHomPageImage from "../../assets/getInTouchsectionHomePage.jpeg";
import "../get in touch section home page/get-in-touch-section-home-page.css";

const GetInToucSectionHomePage = () => {
  return (
    <div className="get-in-touch-section-home-page-container">
      <div className="get-in-touch-content-home-page">
        <div className="image-box-get-in-touch-content-home-page">
          <img
            className="image-section-get-in-touch-content-home-page"
            src={GetInTouchSectionHomPageImage}
            alt="get in touch"
          />
        </div>
        <div className="description-box-get-in-touch-section-home-page">
          <span className="description-badge-get-in-touch-section-home-page">
            Get In Touch
          </span>
          <h2 className="description-title-get-in-touch-section-home-page">
            Want to talk to a marketing expert?
          </h2>
          <p className="description-paragraph-get-in-touch-section-home-page">
            You need to create an account to find the best and preferred job.
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry the standard dummy text ever took.
          </p>
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
      </div>
    </div>
  );
};

export default GetInToucSectionHomePage;

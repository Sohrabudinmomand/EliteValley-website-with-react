import React from "react";
// icon arrow right
import { FaArrowRight } from "react-icons/fa";
import SectionImage from "./assets/hero-section-about-page.png";
import "./hero-section-about-page.css";

// THE HERO SECTION STARTS HERE
const HeroSectionAboutPage = () => {
  const dataImportant = [
    {
      numberAmount: "469",
      sign: "K",
      title: "Social Follower",
    },

    {
      numberAmount: "25",
      sign: "+",
      title: "Happy Clients",
    },

    {
      numberAmount: "756",
      sign: "+",
      title: "Projects done",
    },

    {
      numberAmount: "100",
      sign: "+",
      title: "global branch",
    },
  ];

  return (
    <div className="container-hero-section-about-page">
      <div className="container-content-about-page">
        <div className="description-box-about-page">
          <p className="title-of-the-section-about-page">
            We Are Leading Software Company
          </p>
          <p className="paragraph-of-the-about-page-section">
            Enable highly motivating non-cash micropayments and offer in-demand
            prepaid solutions – with a single connection.
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
          <div className="the-important-amounts">
            {dataImportant.map((item, index) => (
              <div key={index} className="social-followers">
                <div className="number-and-sign">
                  <span className="important-amount-social-followers-number">
                    {item.numberAmount}
                  </span>
                  <span className="important-amount-social-followers-sign">
                    {item.sign}
                  </span>
                </div>
                <p className="important-number-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        {/* the box below used for image of the section */}
        <div className="image-box-about-page">
          <img
            className="image-of-the-about-page"
            src={SectionImage}
            alt="hero section"
          />
        </div>
      </div>
    </div>
  );
};
// THE HERO SECTION ENDS HERE
export default HeroSectionAboutPage;

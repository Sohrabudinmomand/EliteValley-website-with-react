// importing react to write react code
import React from "react";
// importing the arrow icon to use with button learn more
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// importing the image for the hero section
import EliteValleyCodeCompBanner from "./assets/branding-image.png";
import Testimonial from "./assets/testimonial1.png";
// importing css file
import "./elite-valley-code-comp-section-home-page.css";

// THE HERO SECTION STARTS HERE
const EliteVallyCodeCompHeroSection = () => {
  return (
    // the container starts here
    <div className="container-elite-valley-code-comp-section-home-page">
      {/* using the contianer below to make the page two parts with flex box */}
      <div className="container-content-elite-valley-code-comp-section-home-page">
        <div className="happy-clients">
          <h2>
            <span className="happy-clients-number" id="happy-clints-number">
              24
            </span>
            <span className="happy-clients-number">K+</span>
            <p className="happy-clients-text">Happy Clients</p>
          </h2>
        </div>
        <div className="testamonial-box">
          <img className="testamonial" src={Testimonial} alt="testamonial" />
        </div>

        {/* the box below is for descriptions like title, paragraph and button*/}
        <div className="description-box-elite-valley-code-comp-section-home-page">
          <div class="making-the-two-span-in-one-row">
            <span class="span-line">______</span>
            <span class="what-we-offer">What We Offer</span>
          </div>
          <p className="title-of-the-section-elite-valley-code-comp-section-home-page">
            Elite Valley Code Camp
          </p>
          <p className="paragraph-of-elite-valley-code-comp-section-home-page">
            Elite Valley has a six month especial training called Elite Valley
            Code Camp for ten technology enthusiast who are bored of boring
            university lectures as well as imaginary people who are different
            from the rest.
          </p>
          <ul className="unordered-list-of-hero-section">
            <li className="list-of-items-hero-section">
              <FaCheck className="bx bx-check" />
              Task tracking
            </li>
            <li className="list-of-items-hero-section">
              <FaCheck className="bx bx-check" />
              Task visualization
            </li>
            <li className="list-of-items-hero-section">
              <FaCheck className="bx bx-check" />
              Meet deadlines faster
            </li>
            <li className="list-of-items-hero-section">
              <FaCheck className="bx bx-check" />
              Create task dependencies
            </li>
            <li className="list-of-items-hero-section">
              <FaCheck className="bx bx-check" />
              hare files, discuss
            </li>
            <li className="list-of-items-hero-section">
              <FaCheck className="bx bx-check" />
              Track time spent on each project
            </li>
          </ul>
          {/* the box below used to make two buttons in row with flex */}
          <div className="box-for-buttons-elite-valley-code-comp-section-home-page">
            {/* GET IN TOUCH BUTTONS */}
            <a
              href="https://github.com"
              className="Get-in-touch-elite-valley-code-comp-section-home-page"
            >
              Downlaod App
            </a>
            {/* using the box below to use flex box for the button and the icon */}
            <div className="making-elements-flex-elite-valley-code-comp-section-home-page">
              {/* LEARN MORE BUTTON */}
              <a href="https://github.com" className="learn-more">
                Learn More
              </a>
              {/* Right Arrow icon */}
              <FaArrowRight className="right-arrow" />
            </div>
          </div>
        </div>
        {/* the box below used for image of the section */}
        <div className="image-box-elite-valley-code-comp-section-home-page">
          <img
            className="image-of-the-hero-section-elite-valley-code-comp-section-home-page"
            src={EliteValleyCodeCompBanner}
            alt="hero section"
          />
        </div>
      </div>
    </div>
    //the container starts here
  );
};
// THE HERO SECTION ENDS HERE

export default EliteVallyCodeCompHeroSection;

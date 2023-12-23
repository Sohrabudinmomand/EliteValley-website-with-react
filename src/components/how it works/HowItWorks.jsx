import React from "react";
// importing the arrow icon to use with button learn more
import { FaArrowRight } from "react-icons/fa";

import subContentImage from "./assets/box-img-in-why-we-exist-section.png";

import FirstIconBox from "./assets/icon-1-in-cards.png";
import SecondIconBox from "./assets/icon-2-in-cards.png";

import "../how it works/how-it-works.css";

const HowItWorks = () => {
  return (
    // THE MAIN CONTAINER STARTS HERE
    <div className="container-how-it-works-section">
      <div className="content-managment-box">
        {/* THE CONTENT OF THE SECTION STARTS HERE */}
        <div className="content-how-it-works-section">
          {/* the box below is for descriptions like title, paragraph and button*/}
          <div className="description-box-how-it-works">
            <div class="making-the-two-span-in-one-row">
              <span class="span-line">______</span>
              <span class="automatic-tools">How It Works</span>
            </div>
            <h1 className="title-of-the-how-it-works-section">
              Grow your online business now
            </h1>
            <p className="paragraph-of-the-how-it-works-section">
              Access advanced order types including limit, market, stop limit
              and dollar cost averaging. Track your total asset holdings, values
              and equity over time.
            </p>
            {/* the box below used to make two buttons in row with flex */}
            <div className="box-for-buttons-how-it-works">
              {/* GET IN TOUCH BUTTONS */}
              <a href="#" className="Get-in-touch-how-it-works">
                Get in touch
              </a>
              {/* using the box below to use flex box for the button and the icon */}
              <div className="making-elements-flex-how-it-works">
                {/* LEARN MORE BUTTON */}
                <a href="#" className="learn-more-how-it-works">
                  Learn More
                </a>
                {/* Right Arrow icon */}
                <FaArrowRight className="right-arrow" />
              </div>
            </div>
          </div>

          <div className="managment-card-content">
            <div className="card-descriptions-box-in-how-it-works">
              <div className="control-the-image">
                <img
                  className="image-payment-how-it-works"
                  src={FirstIconBox}
                  alt="icon"
                />
              </div>
              <div class="three-contents-flex">
                <h5 class="title-cards-how-it-works">Payment</h5>
                <p class="paragraph-cards-how-it-works">
                  Discover powerful features to boost your productivity. You are
                  always welcome to visit our little den. Professional in their
                  craft! All products were super amazing with strong attention
                  to details, comps and overall vibe.
                </p>
                {/* using the box below to use flex box for the button and the icon */}
                <div className="making-elements-flex-how-it-works">
                  {/* LEARN MORE BUTTON */}
                  <a href="#" className="learn-more-how-it-works inside-card">
                    Learn More
                  </a>
                  {/* Right Arrow icon */}
                  <FaArrowRight className="right-arrow" />
                </div>
              </div>
            </div>

            <div className="card-descriptions-box-in-how-it-works background-color">
              <div className="control-the-image">
                <img
                  className="image-payment-how-it-works"
                  src={SecondIconBox}
                  alt="icon"
                />
              </div>
              <div class="three-contents-flex">
                <h5 class="title-cards-how-it-works">Payment</h5>
                <p class="paragraph-cards-how-it-works">
                  Discover powerful features to boost your productivity. You are
                  always welcome to visit our little den. Professional in their
                  craft! All products were super amazing with strong attention
                  to details, comps and overall vibe.
                </p>
                {/* using the box below to use flex box for the button and the icon */}
                <div className="making-elements-flex-how-it-works">
                  {/* LEARN MORE BUTTON */}
                  <a href="#" className="learn-more-how-it-works inside-card">
                    Learn More
                  </a>
                  {/* Right Arrow icon */}
                  <FaArrowRight className="right-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* THE CONTENT OF THE SECTION ENDS HERE */}

        {/* SUB CONTENT BOX STARTS HERE */}
        <div className="sub-content-how-it-works-section">
          {/* FIRST BOX */}
          <div className="sub-content-boxes">
            <div className="image-box-sub-content">
              <img
                className="image-content-sub-content"
                src={subContentImage}
                alt="sub content"
              />
            </div>
            <div className="description-and-icon-sub-content">
              <p className="description-content-sub-content">Certification</p>
              <FaArrowRight className="icon-sub-content" />
            </div>
          </div>

          <div className="sub-content-boxes">
            <div className="image-box-sub-content">
              <img
                className="image-content-sub-content"
                src={subContentImage}
                alt="sub content"
              />
            </div>
            <div className="description-and-icon-sub-content">
              <p className="description-content-sub-content">Certification</p>
              <FaArrowRight className="icon-sub-content" />
            </div>
          </div>

          <div className="sub-content-boxes">
            <div className="image-box-sub-content">
              <img
                className="image-content-sub-content"
                src={subContentImage}
                alt="sub content"
              />
            </div>
            <div className="description-and-icon-sub-content">
              <p className="description-content-sub-content">Certification</p>
              <FaArrowRight className="icon-sub-content" />
            </div>
          </div>
          {/* SECOND BOX */}
          <div className="sub-content-boxes">
            <div className="image-box-sub-content">
              <img
                className="image-content-sub-content"
                src={subContentImage}
                alt="sub content"
              />
            </div>
            <div className="description-and-icon-sub-content">
              <p className="description-content-sub-content">Certification</p>
              <FaArrowRight className="icon-sub-content" />
            </div>
          </div>
          {/* THIRD BOX */}
          <div className="sub-content-boxes">
            <div className="image-box-sub-content">
              <img
                className="image-content-sub-content"
                src={subContentImage}
                alt="sub content"
              />
            </div>
            <div className="description-and-icon-sub-content">
              <p className="description-content-sub-content">Certification</p>
              <FaArrowRight className="icon-sub-content" />
            </div>
          </div>
          {/* FOURTH BOX */}
          <div className="sub-content-boxes">
            <div className="image-box-sub-content">
              <img
                className="image-content-sub-content"
                src={subContentImage}
                alt="sub content"
              />
            </div>
            <div className="description-and-icon-sub-content">
              <p className="description-content-sub-content">Certification</p>
              <FaArrowRight className="icon-sub-content" />
            </div>
          </div>
        </div>
        {/* SUB CONTENT BOX ENDS HERE */}
      </div>
    </div>
    // THE MAIN CONTAINER ENDS HERE
  );
};

export default HowItWorks;

import React from "react";
// importing the arrow icon to use with button learn more
import { FaArrowRight } from "react-icons/fa";

// importing the image of the why we exist section
import WhyWeExistSectionImage from "../../assets/Rectangle.png";

import "./WhyWeExist.css";

const WhyWeExistSection = () => {
  return (
    // the container starts here
    <div className="container-WhyWeExist">
      <svg
        className="mouse-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="45"
        viewBox="0 0 30 45"
        fill="none"
      >
        <rect
          x="1"
          y="1"
          width="28"
          height="43"
          rx="14"
          stroke="#FF5722"
          stroke-width="2"
        />
        <path
          d="M19 28.1111L14.5 32M14.5 32L10 28.1111M14.5 32L14.5 22"
          stroke="#FF5722"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="15" cy="13" r="2" fill="#FF5722" />
      </svg>

      <svg
        className="LeftToRightAnimation"
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="23"
        viewBox="0 0 72 23"
        fill="none"
      >
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.8278 11.0433L42.8492 11.0648L31.8438 22.0703L28.1761 18.4027L35.5312 11.0476L28.1719 3.68824L31.8395 0.0206126L42.845 11.0261L42.8278 11.0433Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6559 11.0433L14.6774 11.0648L3.67188 22.0703L0.00425204 18.4027L7.35935 11.0476L-8.03506e-07 3.68824L3.66762 0.0206126L14.6731 11.0261L14.6559 11.0433Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M56.9059 11.0433L56.9274 11.0648L45.9219 22.0703L42.2543 18.4027L49.6094 11.0476L42.25 3.68824L45.9176 0.0206126L56.9231 11.0261L56.9059 11.0433Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.734 11.4496L28.7555 11.4711L17.75 22.4766L14.0824 18.8089L21.4375 11.4538L14.0781 4.09449L17.7457 0.426863L28.7512 11.4324L28.734 11.4496Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.9918 11.4496L71.0133 11.4711L60.0078 22.4766L56.3402 18.8089L63.6953 11.4538L56.3359 4.09449L60.0036 0.426863L71.0091 11.4324L70.9918 11.4496Z"
          fill="#FF5722"
        />
      </svg>

      <svg
        className="DownArrowanimation"
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="150"
        viewBox="0 0 34 150"
        fill="none"
      >
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.609375 27.4688L17.0195 43.8789L17.043 43.8555L17.0664 43.8789L33.4766 27.4688L28.0078 22L17.043 32.9648L6.07812 22L0.609375 27.4688Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 5.46875L16.4102 21.8789L16.4414 21.8477L16.4727 21.8789L32.8828 5.46875L27.4141 0L16.4414 10.9727L5.46875 0L0 5.46875Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.609375 90.8672L17.0195 107.277L17.043 107.254L17.0664 107.277L33.4766 90.8672L28.0078 85.3984L17.043 96.3633L6.07812 85.3984L0.609375 90.8672Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.609375 48.8672L17.0195 65.2773L17.043 65.2539L17.0664 65.2773L33.4766 48.8672L28.0078 43.3984L17.043 54.3633L6.07812 43.3984L0.609375 48.8672Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.609375 111.867L17.0195 128.277L17.043 128.254L17.0664 128.277L33.4766 111.867L28.0078 106.398L17.043 117.363L6.07812 106.398L0.609375 111.867Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 69.8672L16.4102 86.2773L16.4414 86.2461L16.4727 86.2773L32.8828 69.8672L27.4141 64.3984L16.4414 75.3711L5.46875 64.3984L0 69.8672Z"
          fill="#FF5722"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 132.867L16.4102 149.277L16.4414 149.246L16.4727 149.277L32.8828 132.867L27.4141 127.398L16.4414 138.371L5.46875 127.398L0 132.867Z"
          fill="#FF5722"
        />
      </svg>
      <div className="bg-banner-WhyWeExist">
        {/* using the contianer below to make the page two parts with flex box */}
        <div className="container-WhyWeExist-content">
          {/* the box below is for descriptions like title, paragraph and button*/}
          <div className="description-box-WhyWeExist">
            <div class="making-the-two-span-in-one-row">
              <span class="span-line">______</span>
              <span class="why-we-exist">Why We Exist</span>
            </div>
            <h1 className="title-of-the-WhyWeExist-section">
              Every thing starts with Why
            </h1>
            <p className="paragraph-of-the-WhyWeExist-section">
              Quality is at the core of everything we do. We follow rigorous
              quality assurance processes to ensure that our software
              applications are robust, secure, and perform seamlessly. You can
              trust us to deliver top-notch solutions that meet the highest
              industry standards.
            </p>
            {/* the box below used to make two buttons in row with flex */}
            <div className="box-for-buttons-WhyWeExist">
              {/* GET IN TOUCH BUTTONS */}
              <a href="#" className="Get-in-touch-WhyWeExist">
                Get in touch
              </a>
              {/* using the box below to use flex box for the button and the icon */}
              <div className="making-elements-flex-WhyWeExist">
                {/* LEARN MORE BUTTON */}
                <a href="#" className="learn-more-WhyWeExist">
                  Learn More
                </a>
                {/* Right Arrow icon */}
                <FaArrowRight className="right-arrow" />
              </div>
            </div>
          </div>

          {/* the box below used for image of the section */}
          <div className="image-box-WhyWeExist">
            <img
              className="image-of-the-WhyWeExist"
              src={WhyWeExistSectionImage}
              alt="WhyWeExist"
            />
          </div>
        </div>
      </div>
    </div>
    // the container ends here
  );
};

export default WhyWeExistSection;

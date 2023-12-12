import React from "react";

import { FaStar } from "react-icons/fa";

import UserPng from "./assets/user.PNG";
import UserPng1 from "./assets/11.jpg";
import UserPng2 from "./assets/12.jpg";
import "./what-our-customers-are-sying.css";

const WhatOurCustomersAreSying = () => {
  const starsStyle = {
    color: "yellow",
    fontSize: "12px",
  };

  return (
    // container starts here
    <div className="contianer-what-our-customers-are-sying-homepage">
      {/* box below used for content managment starts here */}
      <div className="container-content-what-our-customers-are-sying-homepage">
        {/* the first div in the left side of componenet starts herer */}
        <div className="first-div-what-our-customers-are-sying-homepage">
          <img
            src={UserPng}
            alt="customer"
            className="user-image-what-our-customers-are-sying-homepage"
          />
          <h1 className="title-what-our-customers-are-sying-homepag">
            What our customers are saying
          </h1>
          <p className="paragraph-what-our-customers-are-sying-homepag">
            Hear from our users who have saved thousands on their Startup and
            SaaS solution spend
          </p>
        </div>
        {/* the first div in the left side of componenet ends herer */}

        <div className="box-content-what-our-customers-are-sying-homepage">
          <div className="left-two-boxes">
            <div className="container-content-boxes">
              <div className="making-row-the-image-and-user-name">
                <img src={UserPng1} alt="user" className="user-image-boxes" />
                <div className="user-info">
                  <h4 className="user-info-name">Wade Waren</h4>
                  <p className="user-info-job">Louis</p>
                </div>
              </div>
              <div className="description-what-our-customers-are-sying-homepage">
                Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per
                thousand), or 0.7 to 2.0 mg/L.
                <div className="end-of-the-card">
                  <p id="date">1 aug 2023</p>
                  <div className="rate">
                    <i style={starsStyle}>
                      <FaStar />
                    </i>
                    <i style={starsStyle}>
                      <FaStar />
                    </i>
                    <i style={starsStyle}>
                      <FaStar />
                    </i>
                    <i style={starsStyle}>
                      <FaStar />
                    </i>
                    <i style={starsStyle}>
                      <FaStar />
                    </i>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-content-boxes">
              <div className="making-row-the-image-and-user-name">
                <img src={UserPng1} alt="user" className="user-image-boxes" />
                <div className="user-info">
                  <h4 className="user-info-name">Wade Waren</h4>
                  <p className="user-info-job">Louis</p>
                </div>
              </div>
              <p className="description-what-our-customers-are-sying-homepage">
                Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per
                thousand), or 0.7 to 2.0 mg/L.
              </p>
              <div className="end-of-the-card">
                <p id="date">1 aug 2023</p>
                <div className="rate">
                  <i style={starsStyle}>
                    <FaStar />
                  </i>
                  <i style={starsStyle}>
                    <FaStar />
                  </i>
                  <i style={starsStyle}>
                    <FaStar />
                  </i>
                  <i style={starsStyle}>
                    <FaStar />
                  </i>
                  <i style={starsStyle}>
                    <FaStar />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-two-boxes">
          <div className="container-content-boxes">
            <div className="making-row-the-image-and-user-name">
              <img src={UserPng1} alt="user" className="user-image-boxes" />
              <div className="user-info">
                <h4 className="user-info-name">Wade Waren</h4>
                <p className="user-info-job">Louis</p>
              </div>
            </div>
            <p className="description-what-our-customers-are-sying-homepage">
              Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per
              thousand), or 0.7 to 2.0 mg/L.
            </p>
            <div className="end-of-the-card">
              <p id="date">1 aug 2023</p>
              <div className="rate">
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
              </div>
            </div>
          </div>

          <div className="container-content-boxes">
            <div className="making-row-the-image-and-user-name">
              <img src={UserPng1} alt="user" className="user-image-boxes" />
              <div className="user-info">
                <h4 className="user-info-name">Wade Waren</h4>
                <p className="user-info-job">Louis</p>
              </div>
            </div>
            <p className="description-what-our-customers-are-sying-homepage">
              Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per
              thousand), or 0.7 to 2.0 mg/L.
            </p>
            <div className="end-of-the-card">
              <p id="date">1 aug 2023</p>
              <div className="rate">
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
                <i style={starsStyle}>
                  <FaStar />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* box below used for content managment starts here */}
    </div>
    // container ends here
  );
};

export default WhatOurCustomersAreSying;

import React from "react";
import { FaStar } from "react-icons/fa";
import UserPng from "./assets/user.PNG";
import "./what-our-customers-are-sying.css";

const WhatOurCustomersAreSying = () => {
  const boxData = [
    {
      image: UserPng,
      name: "Sohrab",
      lastName: "Momand",
      description: `Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.`,
      date: "1 aug 2023",
      stars: 5,
      backgroundColor: "#FFF",
      border: "1px solid #B9CAD0",
    },
    {
      image: UserPng,
      name: "Sohrab",
      lastName: "Momand",
      description: `Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.`,
      date: "1 aug 2023",
      stars: 5,
      backgroundColor: "#FFD166",
      border: "1px solid #B9CAD0",
    },
    {
      image: UserPng,
      name: "Sohrab",
      lastName: "Momand",
      description: `Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.`,
      date: "1 aug 2023",
      stars: 5,
      backgroundColor: "#fff",
      border: "1px solid #B9CAD0",
    },
    {
      image: UserPng,
      name: "Sohrab",
      lastName: "Momand",
      description: `Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.`,
      date: "1 aug 2023",
      stars: 5,
      backgroundColor: "#fff",
      border: "1px solid #B9CAD0",
    },
  ];

  const starsStyle = {
    color: "yellow",
    fontSize: "12px",
  };

  const leftBox = Array.from({ length: 2 }, (_, index) => boxData[index] || {});
  const rightBox = Array.from(
    { length: 2 },
    (_, index) => boxData[index + 2] || {}
  );

  return (
    <div className="contianer-what-our-customers-are-sying-homepage">
      <div className="container-content-what-our-customers-are-sying-homepage">
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

        <div className="used-for-resposive-design">
          <div className="left-two-boxes">
            {leftBox.map((box, index) => (
              <div
                key={index}
                className="container-content-boxes"
                style={{
                  backgroundColor: box.backgroundColor,
                  border: box.border,
                }}
              >
                <div className="making-row-the-image-and-user-name">
                  <img
                    src={box.image}
                    alt="user"
                    className="user-image-boxes"
                  />
                  <div className="user-info">
                    <h4 className="user-info-name">
                      {box.name} {box.lastName}
                    </h4>
                    <p className="user-info-job">{box.lastName}</p>
                  </div>
                </div>
                <p className="description-what-our-customers-are-sying-homepage">
                  {box.description}
                </p>
                <div className="end-of-the-card">
                  <p id="date">{box.date}</p>
                  <div className="rate">
                    {Array.from({ length: box.stars }).map((_, i) => (
                      <i key={i} style={starsStyle}>
                        <FaStar />
                      </i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="right-two-boxes">
            {rightBox.map((box, index) => (
              <div
                key={index}
                className="container-content-boxes"
                style={{
                  backgroundColor: box.backgroundColor,
                  border: box.border,
                }}
              >
                <div className="making-row-the-image-and-user-name">
                  <img
                    src={box.image}
                    alt="user"
                    className="user-image-boxes"
                  />
                  <div className="user-info">
                    <h4 className="user-info-name">
                      {box.name} {box.lastName}
                    </h4>
                    <p className="user-info-job">{box.lastName}</p>
                  </div>
                </div>
                <p className="description-what-our-customers-are-sying-homepage">
                  {box.description}
                </p>
                <div className="end-of-the-card">
                  <p id="date">{box.date}</p>
                  <div className="rate">
                    {Array.from({ length: box.stars }).map((_, i) => (
                      <i key={i} style={starsStyle}>
                        <FaStar />
                      </i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurCustomersAreSying;

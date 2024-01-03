import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import firstImageCoreValue from "./assets/first-image-core-value-section.png";
import secondImageCoreValue from "./assets/third-image-core-value-section.jpeg";
import thirdImageCoreValue from "./assets/second-image-core-value-section.png";
import "./core-value.css";

const CoreValue = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const coreValueData = [
    {
      image: firstImageCoreValue,
      title: "Cross Platform",
      description: `Discover powerful features to boost your productivity. You are
      always welcome to visit our little den`,
    },
    {
      image: secondImageCoreValue,
      title: "Cross Platform",
      description: `Discover powerful features to boost your productivity. You are
      always welcome to visit our little den`,
    },
    {
      image: thirdImageCoreValue,
      title: "Cross Platform",
      description: `Discover powerful features to boost your productivity. You are
      always welcome to visit our little den`,
    },
  ];

  return (
    <div className="container-core-value-about-page">
      <div className="content-container-core-value-about-page">
        <div className="description-box-core-value">
          <span className="title-of-core-value-about-page">
            Our Core Value is something everyone wants
          </span>
          <div className="paragraph-and-button-box-core-value">
            <p className="paragrahp-in-core-value">
              Discover powerful features to boost your productivity. You are
              always welcome to visit our little den. Professional in their
              craft! All products were super amazing with strong attention to
              details, comps and overall vibe.
            </p>
            <div className="making-elements-flex-in-core-value">
              {/* LEARN MORE BUTTON */}
              <a href="#" className="learn-more-in-core-value">
                Learn More
              </a>
              {/* Right Arrow icon */}
              <FaArrowRight className="right-arrow-in-core-value" />
            </div>
          </div>
        </div>
        <div className="images-in-core-value">
          {coreValueData.map((item, index) => (
            <div key={index} className="image-and-description">
              {isMobile ? (
                <>
                  <div className="description-in-img-core-value">
                    <span className="title-core-value-image">{item.title}</span>
                    <p className="paragraph-core-value-image">
                      {item.description}
                    </p>
                  </div>
                  <img
                    className="firstImageCoreValue"
                    src={item.image}
                    alt=""
                  />
                </>
              ) : (
                <>
                  {index % 2 === 0 ? (
                    <>
                      <img
                        className="firstImageCoreValue"
                        src={item.image}
                        alt=""
                      />
                      <div className="description-in-img-core-value">
                        <span className="title-core-value-image">
                          {item.title}
                        </span>
                        <p className="paragraph-core-value-image">
                          {item.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="description-in-img-core-value">
                        <span className="title-core-value-image">
                          {item.title}
                        </span>
                        <p className="paragraph-core-value-image">
                          {item.description}
                        </p>
                      </div>
                      <img
                        className="firstImageCoreValue"
                        src={item.image}
                        alt=""
                      />
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValue;

import React from "react";
import firstImageCoreValue from "./assets/first-image-core-value-section.png";
import secondImageCoreValue from "./assets/second-image-core-value-section.png";
import thirdImageCoreValue from "./assets/third-image-core-value-section.jpeg";
import "./core-value.css";

const CoreValue = () => {
  const coreValueData = [
    {
      image: firstImageCoreValue,
      title: "Cross Platform",
      description: `Discover powerful features to boost your productivity. You are
      always welcome to visit our little den`,
    },
    {
      image: firstImageCoreValue,
      title: "Cross Platform",
      description: `Discover powerful features to boost your productivity. You are
      always welcome to visit our little den`,
    },
    {
      image: firstImageCoreValue,
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
            Our Core Value is something everyone want
          </span>
          <div className="paragraph-and-button-box-core-value">
            <p className="paragrahp-in-core-value">
              Discover powerful features to boost your productivity. You are
              always welcome to visit our little den. Professional in their
              craft! All products were super amazing with strong attention to
              details, comps and overall vibe.
            </p>
          </div>
        </div>
        <div className="images-in-core-value">
          {coreValueData.map((item, index) => (
            <div key={index} className="image-and-descripion">
              {index % 2 === 0 ? (
                <>
                  <img
                    className="firstImageCoreValue"
                    src={item.image}
                    alt=""
                  />
                  <div className="description-in-img-core-value">
                    <span className="title-core-value-image">{item.title}</span>
                    <p className="paragraph-core-value-image">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValue;

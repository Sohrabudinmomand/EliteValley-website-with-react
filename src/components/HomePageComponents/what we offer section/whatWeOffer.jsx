import React, { useState, useEffect } from "react";
import "./what-we-offer.css";
import WhatWeOfferImage from "./assets/what-we-offer-section.png";

const WhatWeOffer = () => {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [expandedDiv, setExpandedDiv] = useState(1);

  const handleDivClick = (divNumber) => {
    if (containerWidth > 768) {
      if (containerWidth > 1920) {
        setExpandedDiv((prev) => (prev === divNumber ? null : divNumber));
      } else {
        setExpandedDiv(divNumber);
      }
    }
  };

  const getPStyle = (divNumber) => {
    if (containerWidth <= 768) {
      return { display: "block" };
    } else {
      return expandedDiv === divNumber
        ? { display: "block" }
        : { display: "none" };
    }
  };

  const getDivWidth = (divNumber) => {
    if (containerWidth > 1920) {
      return expandedDiv === divNumber ? "500px" : "100px";
    } else if (containerWidth <= 1920 && containerWidth > 768) {
      return expandedDiv === divNumber ? "400px" : "80px";
    } else if (containerWidth < 576) {
      return "300px";
    } else if (containerWidth < 300) {
      return "250px";
    } else {
      return "450px";
    }
  };

  const getAdditionalH2Style = (divNumber) => ({
    writingMode:
      containerWidth <= 768 || expandedDiv === divNumber
        ? "horizontal-tb"
        : "vertical-rl",
  });

  const handleResize = () => {
    setContainerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const expandableDivData = [
    {
      boxNumber: "01.",
      boxTitle: "Hosting",
      boxDescription:
        "Blocks infected website tracking programs and annoying links",
    },
    {
      boxNumber: "01.",
      boxTitle: "Hosting",
      boxDescription:
        "Blocks infected website tracking programs and annoying links",
    },
    {
      boxNumber: "01.",
      boxTitle: "Hosting",
      boxDescription:
        "Blocks infected website tracking programs and annoying links",
    },
    {
      boxNumber: "01.",
      boxTitle: "Hosting",
      boxDescription:
        "Blocks infected website tracking programs and annoying links",
    },
    {
      boxNumber: "01.",
      boxTitle: "Hosting",
      boxDescription:
        "Blocks infected website tracking programs and annoying links",
    },
  ];

  return (
    // container starts here
    <div className="container-what-we-offer">
      {/* this is the container for the contents of this section starts here */}
      <div className="content-of-what-we-offer-section">
        <div className="description-box-what-we-offer-section">
          <div className="box-content-1">
            <div className="making-the-two-span-in-one-row">
              <span className="span-line">______</span>
              <span className="what-we-offer">What We Offer</span>
            </div>
            <h1 className="title-of-the-WhatWeOffer-section">
              What we offer is awesome
            </h1>
          </div>
          <div className="box-content-2">
            <p>
              Discover powerful features to boost your productivity. You are
              always welcome to
            </p>
          </div>
        </div>

        <div className="expand-panels-box">
          <div className="image-box-what-we-offer-section">
            <img
              className="image-what-we-offer-section"
              src={WhatWeOfferImage}
              alt="stand man"
            />
          </div>
          <div className="panel-box-what-we-offer-section">
            {expandableDivData.map((item, index) => (
              <div
                key={index}
                className="child-div"
                style={{ width: getDivWidth(index + 1) }}
                onClick={() => handleDivClick(index + 1)}
              >
                <h2>{item.boxNumber}</h2>
                <h2
                  className="additional-h2"
                  style={getAdditionalH2Style(index + 1)}
                >
                  {item.boxTitle}
                </h2>
                <p style={getPStyle(index + 1)}>{item.boxDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* this is the container for the contents of this section ends here */}
    </div>
    // container ends here
  );
};

export default WhatWeOffer;

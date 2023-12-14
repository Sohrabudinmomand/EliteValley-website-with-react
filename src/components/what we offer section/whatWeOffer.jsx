import React, { useState } from "react";
import "./what-we-offer.css";
import WhatWeOfferImage from "../../assets/what-we-offer-section.png";

const WhatWeOffer = () => {
  const [expandedDiv, setExpandedDiv] = useState(1);

  const handleDivClick = (divNumber) => {
    setExpandedDiv(divNumber);
  };

  const getDivWidth = (divNumber) => {
    return expandedDiv === divNumber ? "300px" : "80px";
  };

  const getPStyle = (divNumber) => {
    return expandedDiv === divNumber
      ? { display: "block" }
      : { display: "none" };
  };

  const getAdditionalH2Style = (divNumber) => {
    return expandedDiv === divNumber
      ? {
          writingMode: "horizontal-tb",
        }
      : {
          writingMode: "vertical-rl",
        };
  };

  return (
    <div className="container-what-we-offer">
      <div className="content-of-what-we-offer-section">
        <div className="description-box-what-we-offer-section">
          <div className="box-content-1">
            <div class="making-the-two-span-in-one-row">
              <span class="span-line">______</span>
              <span class="what-we-offer">What We Offer</span>
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
            <div
              className="child-div"
              style={{ width: getDivWidth(1) }}
              onClick={() => handleDivClick(1)}
            >
              <h2>01.</h2>
              <h2 className="additional-h2" style={getAdditionalH2Style(1)}>
                Hosting
              </h2>

              <p style={getPStyle(1)}>
                Blocks infected website tracking programs and annoying link
              </p>
            </div>
            <div
              className="child-div"
              style={{ width: getDivWidth(2) }}
              onClick={() => handleDivClick(2)}
            >
              <h2>02.</h2>
              <h2 className="additional-h2" style={getAdditionalH2Style(2)}>
                Web App Dev
              </h2>
              <p style={getPStyle(2)}>
                Blocks infected website tracking programs and annoying.
              </p>
            </div>
            <div
              className="child-div"
              style={{ width: getDivWidth(3) }}
              onClick={() => handleDivClick(3)}
            >
              <h2>03.</h2>
              <h2 className="additional-h2" style={getAdditionalH2Style(3)}>
                Graphic Design
              </h2>
              <p style={getPStyle(3)}>
                Blocks infected website tracking programs and annoying.
              </p>
            </div>
            <div
              className="child-div"
              style={{ width: getDivWidth(4) }}
              onClick={() => handleDivClick(4)}
            >
              <h2>04.</h2>
              <h2 className="additional-h2" style={getAdditionalH2Style(4)}>
                Title 4
              </h2>
              <p style={getPStyle(4)}>
                Blocks infected website tracking programs and annoying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

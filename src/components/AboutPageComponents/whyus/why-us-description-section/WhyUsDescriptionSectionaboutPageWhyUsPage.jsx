import React from "react";
import ImgWhyUsDescription from "./assets/why-us-description-image.png";
import "./whyusdescriptionaboutpagewhyuspage.css";

const WhyUsDescriptionSectionaboutPageWhyUsPage = () => {
  return (
    <div className="container-description-why-us-page-about-page">
      <div className="content-description-why-us-page-about-page">
        <div className="image-box-description-why-us-page-about-page">
          <img
            className="image-of--description-why-us-page-about-page"
            src={ImgWhyUsDescription}
            alt="hero section"
          />
        </div>
        <div className="description-description-why-us-page-about-page">
          <span className="badge-description-why-us-page-about-page">
            Why Us
          </span>
          <h1 className="title-description-why-us-page-about-page">
            Behind every brand is an interesting story
          </h1>
          <p className="paragraph-description-why-us-page-about-page">
            Access advanced order types including limit, market, stop limit and
            dollar cost averaging. Track your total asset holdings, values and
            equity over time. Monitor markets, manage your portfolio, and trade
            crypto on the go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsDescriptionSectionaboutPageWhyUsPage;

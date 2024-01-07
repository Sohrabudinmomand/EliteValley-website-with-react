import React from "react";
import ImgWhatWeDo from "./assets/what-we-do-img.jpeg";
import "./whatwedosectioninaboutpagewhyus.css";

const WahtWeDoSectionInAboutPageWhyUS = () => {
  return (
    <div className="container-what-we-do-why-us-page-about-page">
      <div className="content-what-we-do-why-us-page-about-page">
        <div className="description-what-we-do-why-us-page-about-page">
          <span className="badge-what-we-do-why-us-page-about-page">
            What We Do
          </span>
          <h1 className="title-what-we-do-why-us-page-about-page">
            Behind every brand is an interesting story
          </h1>
          <p className="paragraph-what-we-do-why-us-page-about-page">
            Access advanced order types including limit, market, stop limit and
            dollar cost averaging. Track your total asset holdings, values and
            equity over time. Monitor markets, manage your portfolio, and trade
            crypto on the go.
          </p>
        </div>

        <div className="image-box-what-we-do-why-us-page-about-page">
          <img
            className="image-of--what-we-do-why-us-page-about-page"
            src={ImgWhatWeDo}
            alt="hero section"
          />
        </div>
      </div>
    </div>
  );
};

export default WahtWeDoSectionInAboutPageWhyUS;

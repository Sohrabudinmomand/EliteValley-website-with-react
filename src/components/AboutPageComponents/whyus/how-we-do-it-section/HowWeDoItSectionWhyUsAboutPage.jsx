import React from "react";
import ImgHowWeDoIt from "./assets/how-we-do-it-img.jpeg";
import "./howwedoitsectionwhyusaboutpage.css";

const HowWeDoItSectionWhyUsAboutPage = () => {
  return (
    <div className="container-how-we-do-it-why-us-page-about-page">
      <div className="content-how-we-do-it-why-us-page-about-page">
        <div className="making-the-content-smaller">
          <div className="description-how-we-do-it-why-us-page-about-page">
            <span className="badge-how-we-do-it-why-us-page-about-page">
              What We Do
            </span>
            <h1 className="title-how-we-do-it-why-us-page-about-page">
              Behind every brand is an interesting story
            </h1>
          </div>

          <div className="image-box-how-we-do-it-why-us-page-about-page">
            <img
              className="image-of--how-we-do-it-why-us-page-about-page"
              src={ImgHowWeDoIt}
              alt="hero section"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeDoItSectionWhyUsAboutPage;

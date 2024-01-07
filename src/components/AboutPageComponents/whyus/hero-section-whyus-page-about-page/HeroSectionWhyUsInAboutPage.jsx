import React from "react";
import HeroSectionImage from "./assets/hero-section-img.png";
import "./herosectionwhyusinaboutpage.css";

const HeroSectionWhyUsInAboutPage = () => {
  return (
    <div className="container-hero-section-why-us-page-about-page">
      <div className="content-hero-section-why-us-page-about-page">
        <div className="description-hero-section-why-us-page-about-page">
          <span className="badge-hero-section-why-us-page-about-page">
            About Our Company
          </span>
          <h1 className="title-hero-section-why-us-page-about-page">
            Think. Creative. Solve Innovative Solution to
          </h1>
          <p className="paragraph-hero-section-why-us-page-about-page">
            Collaborate, plan projects and manage resources with powerful
            features that your whole team can use. The latest news, tips and
            advice to help you run your business with less fuss.
          </p>
        </div>
        <div className="image-box-hero-section-why-us-page-about-page">
          <img
            className="image-of--hero-section-why-us-page-about-page"
            src={HeroSectionImage}
            alt="hero section"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWhyUsInAboutPage;

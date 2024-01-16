import React from "react";
import FirstimgHeroSection from "./assets/first-img-hero-section.png";
import SecondimgHeroSection from "./assets/second-img-hero-section.png";

import "./HerosectionServicespage.css";

const HeroSectionServicespage = () => {
  return (
    <div className="container-hero-section-services-page">
      <div className="content-hero-section-services-page">
        <img className="FirstimgHeroSection" src={FirstimgHeroSection} alt="" />
        <img
          className="SecondimgHeroSection"
          src={SecondimgHeroSection}
          alt=""
        />
        <div className="title-and-description-Service-page">
          <h2 className="title-hero-section-services-page">
            Transform Ideas into Digital Reality
          </h2>
          <p className="description-hero-section-services-page">
            At Elite Valley, we are dedicated to crafting innovative solutions
            that propel your business into the digital age. With a team of
            skilled professionals, cutting-edge technologies, and a commitment
            to excellence, we turn your ideas into powerful software solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionServicespage;

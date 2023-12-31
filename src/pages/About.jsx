import React from "react";
import HeroSectionAboutPage from "../components/AboutPageComponents/hero-section-about-page/HeroSectionAboutPage";
import StorySectionAboutPage from "../components/AboutPageComponents/story-section-about-page/StorySectionAboutPage";
import VissionAndMission from "../components/AboutPageComponents/vission-and-mission/VissionAndMission";
import CoreValue from "../components/AboutPageComponents/core-value/CoreValue";

function About() {
  return (
    <div>
      <HeroSectionAboutPage />
      <StorySectionAboutPage />
      <VissionAndMission />
      <CoreValue />
    </div>
  );
}

export default About;

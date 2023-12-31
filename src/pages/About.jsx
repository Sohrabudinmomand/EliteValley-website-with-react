import React from "react";
import HeroSectionAboutPage from "../components/AboutPageComponents/hero-section-about-page/HeroSectionAboutPage";
import StorySectionAboutPage from "../components/AboutPageComponents/story-section-about-page/StorySectionAboutPage";
import VissionAndMission from "../components/AboutPageComponents/vission-and-mission/VissionAndMission";

function About() {
  return (
    <div>
      <HeroSectionAboutPage />
      <StorySectionAboutPage />
      <VissionAndMission />
    </div>
  );
}

export default About;

import React from "react";
import HeroSectionAboutPage from "../components/AboutPageComponents/hero-section-about-page/HeroSectionAboutPage";
import StorySectionAboutPage from "../components/AboutPageComponents/story-section-about-page/StorySectionAboutPage";
import VissionAndMission from "../components/AboutPageComponents/vission-and-mission/VissionAndMission";
import CoreValue from "../components/AboutPageComponents/core-value/CoreValue";
import Footer from "../components/HomePageComponents/footer/Footer";

function About() {
  return (
    <div>
      <HeroSectionAboutPage />
      <StorySectionAboutPage />
      <VissionAndMission />
      <CoreValue />
      <Footer />
    </div>
  );
}

export default About;

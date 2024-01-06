import React from "react";
import HeroSectionAboutPage from "../components/AboutPageComponents/ourcompony/hero-section-about-page/HeroSectionAboutPage";
import StorySectionAboutPage from "../components/AboutPageComponents/ourcompony/story-section-about-page/StorySectionAboutPage";
import VissionAndMission from "../components/AboutPageComponents/ourcompony/vission-and-mission/VissionAndMission";
import CoreValue from "../components/AboutPageComponents/ourcompony/core-value/CoreValue";
import Footer from "../components/HomePageComponents/footer/Footer";

function OurCompany() {
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

export default OurCompany;

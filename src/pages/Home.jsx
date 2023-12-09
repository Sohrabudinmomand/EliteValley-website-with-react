import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import WhyWeExistSection from "../components/why we exist section/WhyWeExistSection";
import HowItWorks from "../components/how it works/HowItWorks";
import WhatWeOffer from "../components/what we offer section/whatWeOffer";

function Home() {
  return (
    <div>
      <HeroSection />
      <WhyWeExistSection />
      <HowItWorks />
      <WhatWeOffer />
    </div>
  );
}

export default Home;

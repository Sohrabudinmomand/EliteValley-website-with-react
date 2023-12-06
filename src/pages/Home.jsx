import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import WhyWeExistSection from "../components/why we exist section/WhyWeExistSection";
// import HowItWorks from "../components/how it works/HowItWorks";

function Home() {
  return (
    <div>
      <HeroSection />
      <WhyWeExistSection />
      {/* <HowItWorks /> */}
    </div>
  );
}

export default Home;

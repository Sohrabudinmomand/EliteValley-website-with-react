import React from "react";
import HeroSectionWhyUsInAboutPage from "../components/AboutPageComponents/whyus/hero-section-whyus-page-about-page/HeroSectionWhyUsInAboutPage";
import WhyUsDescriptionSectionaboutPageWhyUsPage from "../components/AboutPageComponents/whyus/why-us-description-section/WhyUsDescriptionSectionaboutPageWhyUsPage";
import WahtWeDoSectionInAboutPageWhyUS from "../components/AboutPageComponents/whyus/what-we-do-section-in-about-page-why-us/WahtWeDoSectionInAboutPageWhyUS";

const WhyUs = () => {
  return (
    <div>
      <HeroSectionWhyUsInAboutPage />
      <WhyUsDescriptionSectionaboutPageWhyUsPage />
      <WahtWeDoSectionInAboutPageWhyUS />
    </div>
  );
};

export default WhyUs;

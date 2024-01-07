import React from "react";
import HeroSectionWhyUsInAboutPage from "../components/AboutPageComponents/whyus/hero-section-whyus-page-about-page/HeroSectionWhyUsInAboutPage";
import WhyUsDescriptionSectionaboutPageWhyUsPage from "../components/AboutPageComponents/whyus/why-us-description-section/WhyUsDescriptionSectionaboutPageWhyUsPage";
import HowWeDoItSectionWhyUsAboutPage from "../components/AboutPageComponents/whyus/how-we-do-it-section/HowWeDoItSectionWhyUsAboutPage";
import WahtWeDoSectionInAboutPageWhyUS from "../components/AboutPageComponents/whyus/what-we-do-section-in-about-page-why-us/WahtWeDoSectionInAboutPageWhyUS";
import Footer from "../components/HomePageComponents/footer/Footer";

const WhyUs = () => {
  return (
    <div>
      <HeroSectionWhyUsInAboutPage />
      <WhyUsDescriptionSectionaboutPageWhyUsPage />
      <HowWeDoItSectionWhyUsAboutPage />
      <WahtWeDoSectionInAboutPageWhyUS />
      <Footer />
    </div>
  );
};

export default WhyUs;

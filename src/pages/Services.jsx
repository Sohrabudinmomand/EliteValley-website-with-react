import React from "react";
import HeroSectionServicespage from "../components/ServicesPageComponents/Hero section servces page/HeroSectionServicespage";
import OurServicesSectionServicePage from "../components/ServicesPageComponents/Our services section/OurServicesSectionServicePage";
import Footer from "../components/HomePageComponents/footer/Footer";

function Services() {
  return (
    <div>
      <HeroSectionServicespage />
      <OurServicesSectionServicePage />
      <Footer />
    </div>
  );
}

export default Services;

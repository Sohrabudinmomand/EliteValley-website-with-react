import React from "react";
import HeroSection from "../components/HomePageComponents/hero-section/HeroSection";
import WhyWeExistSection from "../components/HomePageComponents/why we exist section/WhyWeExistSection";
import WhatWeOffer from "../components/HomePageComponents/what we offer section/whatWeOffer";
import GetInToucSectionHomePage from "../components/HomePageComponents/get in touch section home page/GetInToucSectionHomePage";
import EliteVallyCodeCompHeroSection from "../components/HomePageComponents/elite-valley-code-comp/EliteValleyCodeCompSectionHomePage";
// import SliderHomepage from "../components/HomePageComponents/slider/SliderHomepage";
import WhatOurCustomersAreSying from "../components/HomePageComponents/what our customers sying/WhatOurCustomersAreSying";
import Accordian from "../components/HomePageComponents/accordion/AccordionHomePage";
import Footer from "../components/HomePageComponents/footer/Footer";
import HowItWorks from "../components/HomePageComponents/how it works/HowItWorks";

function Home() {
  return (
    <div>
      <HeroSection />
      <WhyWeExistSection />
      <HowItWorks />
      <WhatWeOffer />
      {/* <SliderHomepage /> */}
      <WhatOurCustomersAreSying />
      <EliteVallyCodeCompHeroSection />
      <GetInToucSectionHomePage />
      <Accordian />
      <Footer />
    </div>
  );
}

export default Home;

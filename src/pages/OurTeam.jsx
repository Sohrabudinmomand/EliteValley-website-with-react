import React from "react";
import HerosectionOurTeam from "../components/AboutPageComponents/ourteam/herosection-about-page/HerosectionOurTeam";
import OurLeaderShipTeam from "../components/AboutPageComponents/ourteam/our-leader-ship-team/OurLeaderShipTeam";
import Footer from "../components/HomePageComponents/footer/Footer";

const OurTeam = () => {
  return (
    <div>
      <HerosectionOurTeam />
      <OurLeaderShipTeam />
      <Footer />
    </div>
  );
};

export default OurTeam;

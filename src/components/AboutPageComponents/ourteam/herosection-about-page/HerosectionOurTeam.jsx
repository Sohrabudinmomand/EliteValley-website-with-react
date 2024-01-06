import React from "react";

import Firstimg from "./assets/team-member-one.jpeg";
import Secondimg from "./assets/team-member-two.jpeg";
import thirdimg from "./assets/team-member-three.jpeg";

import "./herosectionourteam.css";

const HerosectionOurTeam = () => {
  return (
    <div className="container-hero-section-our-team">
      <div className="content-hero-section-our-team">
        <div className="description-box-hero-section-our-team">
          <div className="box-think-creative-slove">
            <span className="think-creative-slove">Think. Creative. Solve</span>
          </div>
          <div className="box-title-of-the-hero-section-about-page">
            <h1 className="title-of-the-hero-section-about-page">
              Think. Creative. Solve Innovative Solution to Move Your Business
              Forward
            </h1>
          </div>
          <div className="box-paragrah-of-the-hero-section-about-page">
            <p className="paragrah-of-the-hero-section-about-page">
              Collaborate, plan projects and manage resources with powerful
              features that your whole team can use. The latest news, tips and
              advice to help you run your business with less fuss.
            </p>
          </div>
        </div>
      </div>
      <div className="team-member-pictures">
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={thirdimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Secondimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
        <div className="first-img-box">
          <img className="images-content" src={Firstimg} alt="slide_image" />
        </div>
      </div>
    </div>
  );
};

export default HerosectionOurTeam;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-home-page.css";
import FristImage from "./assets/1-image-for-slider.png";
import LogoInfirstSlider from "./assets/logo-in-first-slider.png";

const SliderHomepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // Add any additional settings here
  };

  return (
    <div className="container-slider-section-home-page">
      <div className="content-slider-section-home-page">
        <div className="description-box-slider-home-page">
          <h1 className="title-slider-box-home-page">
            Check out some of our recent work.
          </h1>
        </div>
        <div className="sliding-boxes-slider-home-page">
          <Slider {...settings} className="custom-slider">
            <div className="first-slider-box">
              <img
                className="image-content-for-slider"
                src={FristImage}
                alt="First for Slider"
              />
              <div className="content-slider">
                <img
                  className="logo-slider"
                  src={LogoInfirstSlider}
                  alt="Logo"
                />
                <h1 className="title-slider">App Design</h1>
                <p className="paragraph-slider">
                  Discover powerful features to boost your productivity. You are
                  always welcome to visit our little den. Professional in their
                  link.
                </p>
                <div className="sub-content-slider-box">
                  <div className="customer-info-box">
                    <div>
                      <div className="client-title">Client Name</div>
                      <div className="client-paragraph">Khalid Atayee</div>
                    </div>
                    <div>
                      <div className="client-title">Budget</div>
                      <div className="client-paragraph">$500-100k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderHomepage;

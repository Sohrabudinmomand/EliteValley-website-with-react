import React from "react";

// importing react silck slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-home-page.css";

const SliderHomepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-slider-section-home-page">
      <div className="content-slider-section-home-page">
        <div className="discription-box-slider-home-page">
          <h1 className="title-slider-box-home-page">
            Check some of our Recent work.
          </h1>
        </div>
        <div className="sliding-boxes-slider-home-page">
          <Slider {...settings}>
            <div className="first-slider-box"></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderHomepage;

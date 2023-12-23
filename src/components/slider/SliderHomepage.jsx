import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-home-page.css";
import imageSection from "./assets/1-image-for-slider.png";
import logoImage from "./assets/logo-in-first-slider.png";

const SliderHomepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.55, // Changed to an integer value
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 1.55,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2.55, // Changed to an integer value
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.55,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.55,
        },
      },
    ],
  };

  return (
    <div className="container-slider-home-page">
      <div className="carousel">
        <Slider {...settings}>
          {/* FIRST SLIDER */}
          <div className="make-a-box">
            <div className="image-box">
              <img className="image" src={imageSection} alt="" />
            </div>
            <div className="content-box">
              <img className="logo" src={logoImage} alt="" />
              <h1 className="title">App Design</h1>
              <p className="paragraph">
                Discover powerful features to boost your productivity. You are
                always welcome to visit our little den. Professional in their
                our little den. Professional in their link
              </p>
              <span className="line-gray"></span>
              <div className="client-and-budge">
                <div className="clientName">
                  <p className="title-clientName">Client Name</p>
                  <p className="description-clientName">Khalid Atayee</p>
                </div>
                <div className="budge">
                  <p className="title-budge">budge</p>
                  <p className="description-budge">$500-100k</p>
                </div>
                <div className="button">
                  <svg
                    className="button-content"
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M27.3333 21L32 25.6667M32 25.6667L27.3333 30.3333M32 25.6667H20"
                      stroke="#0F0400"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      opacity="0.1"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#FF5722"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND SLIDER */}
          <div className="make-a-box">
            <div className="image-box">
              <img className="image" src={imageSection} alt="" />
            </div>
            <div className="content-box">
              <img className="logo" src={logoImage} alt="" />
              <h1 className="title">App Design</h1>
              <p className="paragraph">
                Discover powerful features to boost your productivity. You are
                always welcome to visit our little den. Professional in their
                our little den. Professional in their link
              </p>
              <span className="line-gray"></span>
              <div className="client-and-budge">
                <div className="clientName">
                  <p className="title-clientName">Client Name</p>
                  <p className="description-clientName">Khalid Atayee</p>
                </div>
                <div className="budge">
                  <p className="title-budge">budge</p>
                  <p className="description-budge">$500-100k</p>
                </div>
                <div className="button">
                  <svg
                    className="button-content"
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M27.3333 21L32 25.6667M32 25.6667L27.3333 30.3333M32 25.6667H20"
                      stroke="#0F0400"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      opacity="0.1"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#FF5722"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* THIRD SLIDER */}
          <div className="make-a-box">
            <div className="image-box">
              <img className="image" src={imageSection} alt="" />
            </div>
            <div className="content-box">
              <img className="logo" src={logoImage} alt="" />
              <h1 className="title">App Design</h1>
              <p className="paragraph">
                Discover powerful features to boost your productivity. You are
                always welcome to visit our little den. Professional in their
                our little den. Professional in their link
              </p>
              <span className="line-gray"></span>
              <div className="client-and-budge">
                <div className="clientName">
                  <p className="title-clientName">Client Name</p>
                  <p className="description-clientName">Khalid Atayee</p>
                </div>
                <div className="budge">
                  <p className="title-budge">budge</p>
                  <p className="description-budge">$500-100k</p>
                </div>
                <div className="button">
                  <svg
                    className="button-content"
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M27.3333 21L32 25.6667M32 25.6667L27.3333 30.3333M32 25.6667H20"
                      stroke="#0F0400"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      opacity="0.1"
                      width="52"
                      height="52"
                      rx="26"
                      fill="#FF5722"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderHomepage;

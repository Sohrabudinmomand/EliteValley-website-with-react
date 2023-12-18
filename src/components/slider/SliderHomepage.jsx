import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-home-page.css";
import FristImage from "./assets/1-image-for-slider.png";
import LogoInfirstSlider from "./assets/logo-in-first-slider.png";

const SliderHomepage = () => {
  const slideContents = [
    {
      title: "App design",
      image: FristImage,
      logo: LogoInfirstSlider,
      description: `Discover powerful features to boost your productivity. You are always welcome to visit our little den. Professional in their link.`,
      clientName: "Khalid Atayee",
      budget: "$500-100K",
    },
    {
      title: "Web design",
      image: FristImage,
      logo: LogoInfirstSlider,
      description: `Explore the latest trends in web design. Our team will bring your vision to life with creativity and precision.`,
      clientName: "Sara Johnson",
      budget: "$500-100K",
    },
  ];

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
      <div className="{styles.content-slider-section-home-page}">
        <div className="description-box-slider-home-page">
          <h1 className="title-slider-box-home-page">
            Check out some of our recent work.
          </h1>
        </div>
        <div className="sliding-boxes-slider-home-page">
          <Slider {...settings} className="custom-slider">
            {slideContents.map((slide, index) => (
              <div key={index} className="first-slider-box">
                <img
                  src={slide.image}
                  alt="slide"
                  className="image-content-for-slider"
                />
                <div className="content-slider">
                  <img src={slide.logo} alt="logo" className="logo-slider" />
                  <h2 className="title-slider">{slide.title}</h2>
                  <p className="paragraph-slider">{slide.description}</p>
                  <div className="sub-content-slider-box">
                    <div className="customer-info-box">
                      <div>
                        <div className="client-title">Client Name</div>
                        <div className="client-paragraph">
                          {slide.clientName}
                        </div>
                      </div>
                      <div>
                        <div className="client-title">Budget</div>
                        <div className="client-paragraph">{slide.budget}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderHomepage;

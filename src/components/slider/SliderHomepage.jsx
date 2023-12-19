import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider-home-page.css";
import FristImage from "./assets/1-image-for-slider.png";
import LogoInfirstSlider from "./assets/logo-in-first-slider.png";

const SliderHomepage = () => {
  const sliderContent = [
    {
      mainImage: FristImage,
      logoImage: LogoInfirstSlider,
      title: "App Design",
      description: ` Discover powerful features to boost your productivity. You are
      always welcome to visit our little den. Professional in their
      link.`,
      clientTitle: "Client Name",
      clientName: "Khalid atayee",
      clientBudgetText: "budget",
      clientBudget: "$500-100k",
    },
    {
      mainImage: FristImage,
      logoImage: LogoInfirstSlider,
      title: "App Design",
      description: ` Discover powerful features to boost your productivity. You are
      always welcome to visit our little den. Professional in their
      link.`,
      clientTitle: "Client Name",
      clientName: "Khalid atayee",
      clientBudgetText: "budget",
      clientBudget: "$500-100k",
    },
    {
      mainImage: FristImage,
      logoImage: LogoInfirstSlider,
      title: "App Design",
      description: ` Discover powerful features to boost your productivity. You are
      always welcome to visit our little den. Professional in their
      link.`,
      clientTitle: "Client Name",
      clientName: "Khalid atayee",
      clientBudgetText: "budget",
      clientBudget: "$500-100k",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}>
          {dots.map((dot, index) => (
            <li
              key={index}
              style={{ display: "inline-block", margin: "0 5px" }}
            >
              {dot.props.className === "slick-active" ? (
                <div
                  style={{ width: "30px", height: "5px", background: "black" }}
                ></div>
              ) : (
                <div
                  style={{ width: "100px", height: "5px", background: "gray" }}
                ></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    ),
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
          <Slider {...settings}>
            {sliderContent.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex-container">
                  <div
                    key={index}
                    className="first-slider-box"
                    id="demo-slider"
                  >
                    <img
                      className="image-content-for-slider"
                      src={item.mainImage}
                      alt="First for Slider"
                    />
                    <div className="content-slider">
                      <img
                        className="logo-slider"
                        src={item.logoImage}
                        alt="Logo"
                      />
                      <h1 className="title-slider">{item.title}</h1>
                      <p className="paragraph-slider">{item.description}</p>
                      <div className="sub-content-slider-box">
                        <div className="customer-info-box">
                          <div>
                            <div className="client-title-name">
                              {item.clientTitle}
                            </div>
                            <div className="client-paragraph">
                              {item.clientName}
                            </div>
                          </div>
                          <div>
                            <div className="client-budget-text">
                              {item.clientBudgetText}
                            </div>
                            <div className="client-budget">
                              {item.clientBudget}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-div"></div>
                </div>
              </React.Fragment>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderHomepage;

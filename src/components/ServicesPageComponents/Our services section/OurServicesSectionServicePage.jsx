import React from "react";
import firstImg from "./assets/first-img.png";
import "./ourservicessectionservicepage.css";

const OurServicesSectionServicePage = () => {
  const ServicesSectionData = [
    {
      img: firstImg,
      title: "01 Web Application Development",
      paragraph: `You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio You get a ditibility You get a diverse selection of Commempatibility You get a diverse selectio You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio`,
    },
  ];

  return (
    <div className="container-our-services-section-services-page">
      <div className="content-our-services-section-services-page">
        <div className="our-services">
          <div className="our-services-data-box">
            <div className="our-services-img-box">
              <img className="first-img-our-services" src={firstImg} alt="" />
            </div>
            <div className="our-services-description-box">
              <span className="title-our-services-description-box">
                01 Web Application Development
              </span>
              <p className="paragraph-our-services-description-box">
                You get a ditibility You get a diverse selection of
                practicaCommempatibility You get a diverse selectio You get a
                ditibility You get a diverse selection of Commempatibility You
                get a diverse selectio You get a ditibility You get a diverse
                selection of practicaCommempatibility You get a diverse selectio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSectionServicePage;

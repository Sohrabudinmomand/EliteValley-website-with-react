import React from "react";
import firstImg from "./assets/first-img.png";
import secondImg from "./assets/second-img.png";
import thirdImg from "./assets/third-img.png";
import fourthImg from "./assets/fourth-img.png";
import fifthImg from "./assets/fifth-img.png";
import sixthImg from "./assets/sixth-img.png";
import blackDot from "./assets/Ellipse 2.png";
import "./ourservicessectionservicepage.css";

const OurServicesSectionServicePage = () => {
  const servicesData = [
    {
      img: firstImg,
      title: "01. Web Application Development",
      paragraph: `You get a ditibility You get a diverse selection of
      practicaCommempatibility You get a diverse selectio You get a
      ditibility You get a diverse selection of Commempatibility You get
      a diverse selectio You get a ditibility You get a diverse
      selection of practicaCommempatibility You get a diverse selectio`,
      blackDot: blackDot,
    },

    {
      img: secondImg,
      title: "02 Mobile Application Development",
      paragraph: `You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio You get a ditibility You get a diverse selection of Commempatibility You get a diverse selectio You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio`,
      blackDot: blackDot,
    },

    {
      img: thirdImg,
      title: "03 Database Design & Development",
      paragraph: `You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio You get a ditibility You get a diverse selection of Commempatibility You get a diverse selectio You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio`,
      blackDot: blackDot,
    },

    {
      img: fourthImg,
      title: "04 Graphic Design & Animation",
      paragraph: `You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio You get a ditibility You get a diverse selection of Commempatibility You get a diverse selectio You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio`,
      blackDot: blackDot,
    },

    {
      img: fifthImg,
      title: "05 ERP ( Enterprise Resource Planning )",
      paragraph: `You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio You get a ditibility You get a diverse selection of Commempatibility You get a diverse selectio You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio`,
      blackDot: blackDot,
    },

    {
      img: sixthImg,
      title: "06 Domain Registration & Hosting",
      paragraph: `You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio You get a ditibility You get a diverse selection of Commempatibility You get a diverse selectio You get a ditibility You get a diverse selection of practicaCommempatibility You get a diverse selectio`,
      blackDot: blackDot,
    },
  ];

  return (
    <div className="container-our-services-section-services-page">
      <div className="content-our-services-section-services-page">
        {servicesData.map((items, index) => (
          <div key={index} className="services-description-box">
            {index % 2 === 0 ? (
              <>
                <div
                  className="img-box-service"
                  style={{
                    borderRight: "2px dotted black",
                    justifyContent: "start",
                  }}
                >
                  <img
                    className="first-img-in-services-img-box"
                    src={items.img}
                    alt=""
                  />
                  <img className="blackDot" src={items.blackDot} alt="" />
                </div>
                <div
                  className="title-and-paragraph-box-service"
                  style={{
                    paddingLeft: "50px",
                  }}
                >
                  <h1 className="title-service">{items.title}</h1>
                  <p className="paragraph-service">{items.paragraph}</p>
                </div>
              </>
            ) : (
              <>
                <div
                  className="title-and-paragraph-box-service"
                  style={{
                    paddingRight: "50px",
                  }}
                >
                  <h1 className="title-service">{items.title}</h1>
                  <p className="paragraph-service">{items.paragraph}</p>
                </div>
                <div
                  className="img-box-service"
                  style={{ borderLeft: "2px dotted black" }}
                >
                  <img
                    className="first-img-in-services-img-box"
                    src={items.img}
                    alt=""
                  />
                  <img className="blackDot" src={items.blackDot} alt="" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesSectionServicePage;

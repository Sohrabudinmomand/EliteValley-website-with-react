import React from "react";
import imageVission from "./assets/image-vission.jpeg";
import imageMission from "./assets/image-mission.jpeg";
import "./vission-and-mission.css";

const VissionAndMission = () => {
  const vissionAndMissiondata = [
    {
      badge: "Vission",
      title: "Behind every brand is an interesting story",
      describe:
        "Our vision is to revolutionize the world through innovative software solutions that empower individuals and businesses to thrive in the digital era.",
      img: imageVission,
    },
    {
      badge: "Mission",
      title: "Behind every brand is an interesting story",
      describe:
        "Our vision is to revolutionize the world through innovative software solutions that empower individuals and businesses to thrive in the digital era.",
      img: imageMission,
    },
  ];

  return (
    <div className="container-vission-and-mission">
      <div className="content-vission-and-mission">
        {vissionAndMissiondata.map((item, index) => (
          <div key={index} className="description-image-box">
            {index % 2 === 0 ? (
              <>
                <div className="description-box-vission">
                  <span className="badge-vission">{item.badge}</span>
                  <span className="title-vission">{item.title}</span>
                  <span className="paragraph-vission">{item.describe}</span>
                </div>
                <div className="image-box-vission">
                  <img className="image-vission" src={item.img} alt="" />
                </div>
              </>
            ) : (
              <>
                <div className="image-box-vission">
                  <img className="image-vission" src={item.img} alt="" />
                </div>
                <div className="description-box-vission">
                  <span className="badge-vission">{item.badge}</span>
                  <span className="title-vission">{item.title}</span>
                  <span className="paragraph-vission">{item.describe}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VissionAndMission;

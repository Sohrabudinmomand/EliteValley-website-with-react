import React from "react";
import FirstMemberImage from "./assets/first-member-img.jpeg";
import SecondMemberImage from "./assets/second-member-img.png";
import ThirdMemberImage from "./assets/third-member-img.jpeg";
import FourthMemberImage from "./assets/fourth-member-img.png";
import "./ourleadershipteam.css";

const OurLeaderShipTeam = () => {
  const membersDataOne = [
    {
      img: FirstMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
    {
      img: SecondMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
    {
      img: ThirdMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
    {
      img: FourthMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
  ];

  const membersDataTwo = [
    {
      img: FirstMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
    {
      img: FirstMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
    {
      img: FirstMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
    {
      img: FirstMemberImage,
      name: "Mohammad Jan naser",
      position: "CEO",
      description:
        "Ipsum architecto enim tempore ut voluptas repudiandae ab tempora.",
    },
  ];
  return (
    <div className="container-our-leader-shipteam-about-page">
      <div className="content-our-leader-shipteam-about-page">
        <div className="description-box-our-leader-shipteam-about-page">
          <span className="content-our-leadership-team">
            Our leadership team
          </span>
          <h1 className="title-our-leadership-team">
            Meet the amazing team behind Iori
          </h1>
        </div>
        <div className="team-members-info-box">
          <div className="first-row-info-box">
            {membersDataOne.map((item, index) => (
              <div key={index} className="member-info-box">
                <img className="img-member" src={item.img} alt="" />
                <span className="member-name">{item.name}</span>
                <span className="member-position">{item.position}</span>
                <span className="description-about-member">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
          <div className="second-row-info-box">
            {membersDataTwo.map((item, index) => (
              <div key={index} className="member-info-box">
                <img className="img-member" src={item.img} alt="" />
                <span className="member-name">{item.name}</span>
                <span className="member-position">{item.position}</span>
                <span className="description-about-member">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLeaderShipTeam;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import FirstImg from "./assets/first-img.png";
import SecondImg from "./assets/second-img.png";
import ThirdImg from "./assets/third-img.png";
import React, { useState } from "react";
import "./accordionhomepage.css";

const Accordian = () => {
  const accordainData = [
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctus`,
    },
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctus`,
    },
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctus`,
    },
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctusFringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctusFringilla risus, luctus mauris orci auctor purus Quaerat
      `,
    },
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctus`,
    },
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctus`,
    },
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctus`,
    },
    {
      questionAccordian: "Can I see the demo before purchasing?",
      answerAccordian: `Fringilla risus, luctus mauris orci auctor purus Quaerat
      sodales sapien euismoda laoreet augue luctus`,
    },
  ];

  const [expandedItems, setExpandedItems] = useState(
    accordainData.map(() => false)
  );

  const handleToggle = (index) => {
    setExpandedItems((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="container-accordian-home-page">
      <div className="content-accordian-home-page">
        <img className="first-img" src={FirstImg} alt="" />
        <img className="second-img" src={SecondImg} alt="" />
        <img className="third-img" src={ThirdImg} alt="" />
        <div className="title-and-description">
          <h1 className="title-accordian-section">
            Frequently asked questions
          </h1>
          <p className="description--accordian-section">
            Feeling inquisitive? Have a read through some of our FAQs or contact
            our supporters for help
          </p>
        </div>
        <div className="accordian-box">
          {accordainData.map((item, index) => (
            <div className="first-accordian" key={index}>
              <div
                className="question-accordain-box"
                onClick={() => handleToggle(index)}
              >
                <h1 className="question-accordain-content">
                  {item.questionAccordian}
                </h1>
                <FontAwesomeIcon
                  style={{ color: "#FF5722" }}
                  icon={expandedItems[index] ? faAngleUp : faAngleDown}
                />
              </div>
              <div
                className="answer-accordain-box"
                style={{
                  height: expandedItems[index] ? "auto" : "0",
                  display: expandedItems[index] ? "block" : "none",
                  overflow: "hidden",
                  backgroundColor: "#ECF1F2",
                  transition: "height 0.3s ease",
                }}
              >
                <p className="answer-accordain-content">
                  {item.answerAccordian}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;

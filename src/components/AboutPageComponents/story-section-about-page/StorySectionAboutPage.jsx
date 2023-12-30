import React from "react";
import imageaboutSection from "./assets/story-section-about-page-image.jpeg";
import "./story-section-about-page.css";

const StorySectionAboutPage = () => {
  const researchData = [
    {
      researchDate: "January 2023 -",
      researchTitle: "Research and Content Planing",
      researchInfo:
        "Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and.",
    },
    {
      researchDate: "January 2023 -",
      researchTitle: "Research and Content Planing",
      researchInfo:
        "Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and.",
    },
    {
      researchDate: "January 2023 -",
      researchTitle: "Research and Content Planing",
      researchInfo:
        "Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and.",
    },
    {
      researchDate: "January 2023 -",
      researchTitle: "Research and Content Planing",
      researchInfo:
        "Access advanced order types including limit, market, stop limit and dollar cost averaging. Track your total asset holdings, values and.",
    },
  ];

  return (
    <div className="container-story-section-about-page">
      <div className="content-story-section-about-page">
        <div className="budge-box-about-page">
          <span className="budge-text-about-page">Story</span>
        </div>
        <div className="title-box-about-page">
          <h1 className="title-text-about-page">
            Behind every brand is an interesting story
          </h1>
        </div>
        <div className="paragraph-box-about-page">
          <p className="paragraph-about-page">
            Access advanced order types including limit, market, stop limit and
            dollar cost averaging. Track your total asset holdings, values and
            equity over time. Monitor markets, manage your portfolio, and trade
            crypto on the go.
          </p>
        </div>
        <div className="image-and-research-parts">
          <div className="image-box-about-page">
            <img
              className="image-about-section"
              src={imageaboutSection}
              alt=""
            />
          </div>
          <div className="research-parts">
            {researchData.map((index, item) => (
              <div className="research-content-box">
                <div className="logo-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_543_102)">
                      <path
                        d="M9.33594 8.0013V14.668C9.33594 15.0216 9.47641 15.3607 9.72646 15.6108C9.97651 15.8608 10.3156 16.0013 10.6693 16.0013H14.6693V26.668H12.0026C11.649 26.668 11.3098 26.8084 11.0598 27.0585C10.8097 27.3085 10.6693 27.6477 10.6693 28.0013C10.6693 28.3549 10.8097 28.6941 11.0598 28.9441C11.3098 29.1942 11.649 29.3346 12.0026 29.3346H20.0026C20.3562 29.3346 20.6954 29.1942 20.9454 28.9441C21.1955 28.6941 21.3359 28.3549 21.3359 28.0013C21.3359 27.6477 21.1955 27.3085 20.9454 27.0585C20.6954 26.8084 20.3562 26.668 20.0026 26.668H17.3359V16.0013H24.0026C24.2018 16.002 24.3986 15.958 24.5786 15.8726C24.7586 15.7873 24.9171 15.6627 25.0426 15.508L27.7093 12.1746C27.8986 11.9382 28.0018 11.6442 28.0018 11.3413C28.0018 11.0384 27.8986 10.7445 27.7093 10.508L25.0426 7.17464C24.9184 7.0175 24.7605 6.89035 24.5804 6.80263C24.4004 6.71492 24.2029 6.66889 24.0026 6.66797H17.3359V4.0013C17.3359 3.64768 17.1955 3.30854 16.9454 3.05849C16.6954 2.80844 16.3562 2.66797 16.0026 2.66797C15.649 2.66797 15.3098 2.80844 15.0598 3.05849C14.8097 3.30854 14.6693 3.64768 14.6693 4.0013V6.66797H10.6693C10.3156 6.66797 9.97651 6.80844 9.72646 7.05849C9.47641 7.30854 9.33594 7.64768 9.33594 8.0013ZM12.0026 9.33463H23.3626L24.9626 11.3346L23.3626 13.3346H12.0026V9.33463Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_543_102">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="description-research">
                  <span className="date-of-research">January 2023 -</span>
                  <span className="title-of-the-research">
                    Research and Content Planing
                  </span>
                  <span className="info-about-research">
                    Access advanced order types including limit, market, stop
                    limit and dollar cost averaging. Track your total asset
                    holdings, values and.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySectionAboutPage;

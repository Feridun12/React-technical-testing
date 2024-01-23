import React from "react";
import arrowBack from "../images/arrow-back.svg";
import { useNavigate } from "react-router-dom";
import "../styles/ImageDetails.css";

function ImageDetails() {
  const navigate = useNavigate();
  const sessionData = JSON.parse(sessionStorage.getItem("imageData"));

  console.log(sessionData, "sessionData");

  return (
    <div className="image-details">
      <div className="return-to-main-wrapper">
        <div
          className="return-img-text-wrapper"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={arrowBack}
            alt="an arrow facing left"
            className="arrow-back"
          />
          <span>Return back to the results </span>
        </div>
      </div>
      <h1 className="image-title">{sessionData.data[0].title}</h1>
      <img
        // just putting image as a classname felt a bit too broad
        className="detail-image"
        src={sessionData.links[0].href}
        alt={sessionData.data[0].description}
      />
      <div className="image-description-wrapper">
        <p className="image-description">{sessionData.data[0].description}</p>
      </div>
    </div>
  );
}

export default ImageDetails;

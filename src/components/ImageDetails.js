import React from "react";
import "../styles/ImageDetails.css";

function ImageDetails() {
  const sessionData = JSON.parse(sessionStorage.getItem("imageData"));

  console.log(sessionData, "sessionData");

  return (
    <div className="image-details">
      <div className="return-to-main-wrapper">
        <img />
      </div>
      <h1 className="image-title">{sessionData.data[0].title}</h1>
      <img
        // just putting image as a classname felt a bit too broad
        className="detail-image"
        src={sessionData.links[0].href}
        alt={sessionData.data[0].description}
      />
      <div className="image-description">
        <p>{sessionData.data[0].description}</p>
      </div>
    </div>
  );
}

export default ImageDetails;

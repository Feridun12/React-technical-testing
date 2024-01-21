import React from "react";
import "../styles/ImageDetails.css";

function ImageDetails() {
  const sessionData = JSON.parse(sessionStorage.getItem("imageData"));

  console.log(sessionData, "sessionData");

  return <div className="image-details"></div>;
}

export default ImageDetails;

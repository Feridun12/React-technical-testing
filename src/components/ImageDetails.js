import React from "react";
import useImageDataContext from "../custom-hooks/useImageDataContext";
import "../styles/ImageDetails.css";

function ImageDetails() {
  const { imageData } = useImageDataContext();
  console.log(imageData, "IMAGE DATA");
  return <div>ImageDetails</div>;
}

export default ImageDetails;

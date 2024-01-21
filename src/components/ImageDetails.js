import React from "react";
import "../styles/ImageDetails.css";

function ImageDetails() {
  const sessionData = JSON.parse(sessionStorage.getItem("imageData"));

  console.log(sessionData, "sessionData");
  // useEffect(() => {
  //   console.log("this effect is running");
  //   // Retrieve the image data from session storage

  //   // Set the image data in the context
  //   if (imageData) {
  //     setImageData(imageData);
  //   }
  // });

  return (
    <div className="image-details">
      Sup boi
      <div>{sessionData.data[0].center}</div>
    </div>
  );
}

export default ImageDetails;

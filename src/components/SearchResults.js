import React from "react";
import PropTypes from "prop-types";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useNavigate } from "react-router-dom";
import useImageDataContext from "../custom-hooks/useImageDataContext";
import "../styles/SearchResults.css";

function SearchResults({ searchResults, validSearch, loading }) {
  const navigate = useNavigate();
  // we get the state from the context since SearchResults is a children of ContextProvider component
  // const { setImageData } = useImageDataContext();

  const handleImageClick = (id, imageData) => {
    // storing the image data in the session so a refresh in the ImageDetails wont crash the page
    sessionStorage.setItem("imageData", JSON.stringify(imageData));
    navigate(`/images/${id}`);
  };
  return (
    <>
      {loading === true ? (
        <div className="loading-effect">
          <ScaleLoader color="white" loading={loading} size={100} />
        </div>
      ) : validSearch === false ? (
        <p className="result-paraghraph">
          No images found for the given search term.
        </p>
      ) : (
        <div className="image-container">
          {searchResults.map((imageData, index) => (
            <img
              className="response-image"
              key={index}
              src={imageData.links[0].href}
              alt="images of the planet that has been searched example: moon pictures"
              loading="lazy"
              onClick={() => {
                handleImageClick(imageData.data[0].nasa_id, imageData);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};
export default SearchResults;

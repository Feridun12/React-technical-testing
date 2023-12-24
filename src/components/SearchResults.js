import React from "react";
import PropTypes from "prop-types";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../styles/SearchResults.css";

function SearchResults({ searchResults, validSearch, loading }) {
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
          {searchResults.map((image, index) => (
            <img
              className="image"
              key={index}
              src={image}
              alt="images of the planet that has been searched example: moon pictures"
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

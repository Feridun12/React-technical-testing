import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

function SearchResults({ searchResults, validSearch }) {
  if (validSearch === false) {
    return (
      <p className="result-paraghraph">
        No images found for the given search term.
      </p>
    );
  } else {
    return (
      <>
        <div className="image-container">
          {searchResults.map((image) => (
            <img
              className="image"
              src={image}
              alt="images of the planet that has been searched example: moon pictures"
            />
          ))}
        </div>
      </>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};
export default SearchResults;

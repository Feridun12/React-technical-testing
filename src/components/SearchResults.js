import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

function SearchResults({ results }) {
  if (results.length < 0) {
    return (
      <p className="result-paraghraph">No results. Please try again later</p>
    );
  } else {
    return (
      <>
        <div className="image-container">
          {results.map((image) => (
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
  results: PropTypes.array.isRequired,
};
export default SearchResults;

import React from "react";
// import PropTypes from 'prop-types';
import "../styles/SearchResults.css"

function SearchResults({results}) {
    if (!results.length) {
        return <p className="result-paraghraph">No results</p>
      }
      else {
  return (
    <>
      <div className="image-container">
        {results.map((image) => (
          <img className="image" src={image} alt="images of the planet that has been searched example: moon pictures" />
        ))}
     </div>
    </>
  );
}}
export default SearchResults;

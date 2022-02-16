import React from "react";
import "../styles/SearchResults.css"

function SearchResults({results}) {
    if (!results.length) {
        return <p>No results</p>
      }
      else {
  return (
    <>
      <p className="search-results">
        Search Results  
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
     </p>
    </>
  );
}}

export default SearchResults;

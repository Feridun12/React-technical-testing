import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/Search.css";

function Search({ setSearchResults }) {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults( await getImages(value));
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="search-input"
        ></input>
        <button type="submit" className="search-btn">
          Go!
        </button>
      </form>
    </div>
  );
}

export default Search;

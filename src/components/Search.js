import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/Search.css";

function Search() {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
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

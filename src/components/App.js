import "../styles/App.css";
import React, { useState } from "react";
// components
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  //states
  const [searchResults, setSearchResults] = useState([]);
  const [validSearch, setValidSearch] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo"
      />
      <Search
        setSearchResults={setSearchResults}
        setValidSearch={setValidSearch}
        setLoading={setLoading}
        loading={loading}
      />
      <SearchResults
        searchResults={searchResults}
        validSearch={validSearch}
        loading={loading}
      />
    </div>
  );
}

export default App;

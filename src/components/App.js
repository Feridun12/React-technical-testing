import "../styles/App.css";
import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import NasaLogo from "./NasaLogo";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [validSearch, setValidSearch] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <NasaLogo />
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

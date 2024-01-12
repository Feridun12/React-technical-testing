import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [validSearch, setValidSearch] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearchResults={setSearchResults}
              searchResults={searchResults}
              setValidSearch={setValidSearch}
              setLoading={setLoading}
              loading={loading}
              validSearch={validSearch}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

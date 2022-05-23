import "../styles/App.css";
import React, { useState } from "react";
// components
import Search from "./Search";
import SearchResults from "./SearchResults";
// Loading effect
// import getImages from "../requests/getImages";
// import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  //states
  const [searchResults, setSearchResults] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  //
  // useEffect(() => {
  //   getImages(query , setLoading);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="loading-effect">
  //       <ScaleLoader color="black" loading={isLoading} size={50} />
  //     </div>
  //   );
  // }
  searchResults.map((e) => console.log(e));
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;

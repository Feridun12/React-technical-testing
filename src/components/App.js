import "../styles/App.css";
import React, {useState} from "react";
// components
import Search from "./Search";

function App() {
  // const [searchResults, setSearchResults] = useState("");
  return (
    <div className="App">
      <img className= "nasa-logo" 
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasa logo"/>
      <Search  />
    </div>
  );
}

export default App;

import "../styles/App.css";
// components
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <img className= "nasa-picture" 
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" />
      <Search />
    </div>
  );
}

export default App;

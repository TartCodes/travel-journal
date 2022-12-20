import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import data from "../data";

function App() {
  const cardData = data.map((item) => {
    return (item = { item });
  });
  return <div className="App">{cardData}</div>;
}

export default App;

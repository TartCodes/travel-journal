import Card from "./Components/Card";
import Header from "./Components/Header";
import data from "../data";

function App() {
  const cardData = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Header />
      {cardData}
    </div>
  );
}

export default App;

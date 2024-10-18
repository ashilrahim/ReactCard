import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import { person } from "./person";

function App() {
  const [cardData] = useState(person);
  return (
    <>
      <div className="cards-container">
        {cardData.map((item) => (
          <Cards
            key={item.id}
            name={item.name}
            age={item.age}
            city={item.city}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;

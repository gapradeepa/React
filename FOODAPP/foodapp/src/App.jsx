import { useState } from "react";
import "./App.css";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("658920");

  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setfoodData={setfoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setfoodId={setfoodId}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId}></FoodDetail>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;

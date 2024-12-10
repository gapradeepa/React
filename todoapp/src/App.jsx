import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
    </div>
  );
}

export default App;

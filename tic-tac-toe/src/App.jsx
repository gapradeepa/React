import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useState } from "react";

function App() {
  const [xIsNext, setxIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  return (
    <>
      <Header></Header>
      <Board
        xIsNext={xIsNext}
        setxIsNext={setxIsNext}
        setWinner={setWinner}
      ></Board>
      <Footer xIsNext={xIsNext} winner={winner}></Footer>
    </>
  );
}

export default App;

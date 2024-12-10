import { useState } from "react";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [winner, setWinner] = useState(null);
  const handleClick = (i) => {
    if (!isFinished) {
      const newSquares = [...squares];
      let symbol = "";
      if (xIsNext) {
        symbol = "X";
      } else {
        symbol = "O";
      }
      newSquares[i] = newSquares[i] == null ? symbol : newSquares[i];
      setxIsNext(!xIsNext);
      setSquares(newSquares);

      setWinner(calculateWinner(squares));
      console.log(winner);
      if (winner !== null) {
        setIsFinished(true);
      }
      console.log(isFinished);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(squares[a], squares[a], squares[c]);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a]);
        return squares[a];
      }
    }
    return null;
  };

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        ></Square>
      </div>
    </>
  );
}

export default App;

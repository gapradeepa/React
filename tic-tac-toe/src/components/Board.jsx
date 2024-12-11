import Square from "./Square";
import { useState } from "react";
import Styles from "./board.module.css";

export default function Board({ xIsNext, setxIsNext, setWinner }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isFinished, setIsFinished] = useState(false);

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setxIsNext(true);
    setWinner(null);
    setIsFinished(false);
  };

  const handleClick = (i) => {
    if (!isFinished && squares[i] == null) {
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

      const win = calculateWinner(newSquares);
      if (win !== null) {
        setIsFinished(true);
      }
      setWinner(win);
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

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a]);
        return squares[a];
      }
    }
    if (squares.filter((x) => x != null).length == 9) {
      return "It is a draw!";
    }
    return null;
  };

  return (
    <>
      <div className={Styles.board}>
        <div>
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
          <button className={Styles.modernbutton} onClick={handleReset}>
            Restart
          </button>
        </div>
      </div>
    </>
  );
}

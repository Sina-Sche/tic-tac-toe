import "./board.css";
import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/winner";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [rocketIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const nextPlayer = rocketIsNext ? "🚀" : "👨🏽‍🚀";

  function handleClick(index) {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = nextPlayer;
    setSquares(newSquares);
    setXIsNext(!rocketIsNext);
  }

  function renderSquare(index) {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  }

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + nextPlayer;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

import "./game.css";
import React from "react";
import Board from "./Board";

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
        <button
          className="primary_btn"
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

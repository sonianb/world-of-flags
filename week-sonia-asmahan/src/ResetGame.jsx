import React from "react";
import Flags from "./Flags";

export default function ResetGame(props) {
  if (props.lives !== 0) {
    return (
      <div className="start-btn-container">
        <button className="start-btn" onClick={() => props.startGame()}>
          Start game
        </button>
      </div>
    );
  } else if (props.lives === 0) {
    return (
      <div class="endgame-container">
        <p>Game Over</p>
        <button className="btn" onClick={() => props.restartGame()}>
          Play again
        </button>
      </div>
    );
  }
}

import React from "react";

export default function ResetGame(props) {
  if (props.lives !== 0) {
    return (
      <div className="start-btn-container">
        <button
          className="start-btn"
          onClick={() => {
            props.startGame();
          }}
        >
          Start game
        </button>
      </div>
    );
  } else if (props.lives === 0) {
    return (
      <div className="quiz-container">
        <p>Game Over</p>
        <button
          className="btn"
          onChange={(event) => props.setFormInput(event.target.value)}
          onClick={() => {
            props.restartGame();
          }}
        >
          Play again
        </button>
      </div>
    );
  }
}

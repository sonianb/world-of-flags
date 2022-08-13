import React from "react";

export default function Answers(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const userInput = event.target.answer.value.toLowerCase();
        if (userInput === props.country.toLowerCase()) {
          props.handleCorrectAnswer();
        } else {
          props.handleWrongAnswer();
        }
      }}
    >
      <input type="text" aria-label="Enter answer" name="answer" required />
      <button className="btn " type="submit">
        Submit
      </button>
    </form>
  );
}

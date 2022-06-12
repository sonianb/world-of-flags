import React from "react";
import Answers from "./Answers";
import ResetGame from "./ResetGame";

const URL = "https://restcountries.com/v3.1/all";

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

export default function Flags() {
  const [flag, setFlag] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [valid, setValid] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [lives, setLives] = React.useState(3);

  function handleCorrectAnswer() {
    setValid(true);
    setScore(score + 1);
  }

  function handleWrongAnswer() {
    setValid(false);
    setLives(lives - 1);
  }

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  // React.useEffect(() => {
  //     const data = localStorage.getItem(score);
  //     if(data !== null) setScore(data),
  //     []
  // })

  // React.useEffect(() => {
  //     localStorage.setItem("score", score);
  // }, [score])

  function restartGame() {
    setLives(3);
    setScore(0);
    setFlag(undefined);
  }

  function generateCountry() {
    const randomNum = randomNumber(countries.length - 1);
    setFlag(countries[randomNum].flag);
    setCountry(countries[randomNum].name.common);
    setValid(false);
  }

  if (!flag || lives === 0) {
    return (
      <>
        <ResetGame
          lives={lives}
          startGame={() => generateCountry()}
          restartGame={() => restartGame()}
        />
      </>
    );
  } else {
    return (
      <>
        <h1>World of Flags</h1>
        <div className="quiz-container">
          <h2>What's the country?</h2>
          <h3>Score: {score}</h3>
          <h3>Remaining Lives: {lives}</h3>
          <div className="country-flag">{flag}</div>

          <Answers
            country={country}
            handleCorrectAnswer={() => handleCorrectAnswer()}
            handleWrongAnswer={() => handleWrongAnswer()}
          />
          {!valid ? (
            <button
              className="btn"
              onClick={() => {
                generateCountry();
                handleWrongAnswer();
              }}
            >
              Skip
            </button>
          ) : (
            <>
              <p className="answer-output">Correct!</p>
              <button className="btn" onClick={() => generateCountry()}>
                Next
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}

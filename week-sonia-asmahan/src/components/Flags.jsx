import React, { useEffect, useState } from "react";
import Answers from "././Answers";
import ResetGame from "././ResetGame";

const URL = "https://restcountries.com/v3.1/all";

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

export default function Flags() {
  const [flag, setFlag] = useState("");
  const [country, setCountry] = useState("");
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [countries, setCountries] = useState([]);
  const [formInput, setFormInput] = useState("");
  const [valid, setValid] = useState(false);
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );
  const [lives, setLives] = useState(
    parseInt(localStorage.getItem("lives")) || 3
  );

  function handleCorrectAnswer() {
    setValid(true);
    setScore(score + 1);
    setDisplayAnswer(false);
  }

  function handleWrongAnswer() {
    setValid(false);
    setLives(lives - 1);
    setDisplayAnswer(true);
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  useEffect(() => {
    localStorage.setItem("lives", lives);
  }, [lives]);

  function restartGame() {
    setLives(3);
    setScore(0);
    setFlag(undefined);
    setFormInput("");
  }

  function generateCountry() {
    const randomNum = randomNumber(countries.length - 1);
    setFlag(countries[randomNum].flag);
    setCountry(countries[randomNum].name.common);
    setValid(false);
    setDisplayAnswer(false);
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
            formInput={formInput}
            setFormInput={setFormInput}
          />

          {displayAnswer ? <div>The correct answer is {country}.</div> : ""}

          {valid ? <p className="answer-output">Correct!</p> : ""}

          {!valid && !displayAnswer ? (
            <>
              <button
                className="btn"
                onClick={() => {
                  handleWrongAnswer();
                }}
              >
                Give up
              </button>
            </>
          ) : (
            <>
              <button
                className="btn"
                onClick={() => {
                  generateCountry();
                  setFormInput("");
                }}
              >
                Next
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}

import React from "react";
import Answers from "./Answers";

const URL = "https://restcountries.com/v3.1/all";

function randomNumber(num) {
    return Math.floor(Math.random() * num)
} 

  
export default function Flags() {
    const [flag, setFlag] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [countries, setCountries] = React.useState([]);
    const [valid, setValid] = React.useState(false);
    const [score, setScore] = React.useState(0);

    function handleAnswer() {
        setValid(true);
        setScore(score + 1)
    }

    React.useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            setCountries(data)
            })
    }, []);
    
    function generateCountry() {
        const randomNum = randomNumber(countries.length - 1)
        setFlag(countries[randomNum].flag)
        setCountry(countries[randomNum].name.common) 
        setValid(false);
    }

      if(!flag) {
            return <>
            <button onClick={() => generateCountry()}>Start game</button>
            </>

        } else {
        return <>
            <h2>What's the country?</h2> 
            <h3>Your score: {score}</h3>
            <div className="country-flag">
                {flag}
            </div>
            
        <Answers 
        country={country}
        handleAnswer={() => handleAnswer()}
        />
{ !valid ? "" : <p>Correct!</p> }
<button onClick={() => generateCountry()}>Next</button>
        </>
        }

    }

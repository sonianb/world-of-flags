import React from "react";
import Answers from "./Answers";
// import NextButton from "./NextButton";


const URL = "https://restcountries.com/v3.1/all";

function randomNumber(num) {
    return Math.floor(Math.random() * num)
} 

function handleAnswer() {
    setValid(true)
}

  
export default function Flags() {
    const [flag, setFlag] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [countries, setCountries] = React.useState([]);
    const [valid, setValid] = React.useState(false)

    //wait for Flags component to be ready to execute what's inside the effect
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
    }

      if(!flag) {
            return <>
            <button onClick={() => generateCountry()}>Start game</button>
            </>

        } else {
        return <>
            <h2>What's the country?</h2> 
            <div className="country-flag">
                {flag}
            </div>
            
        <Answers 
        country={country}
        handleAnswer={() => handleAnswer()}
        />
{ !valid ? <p>Try again</p> : <p>Correct!</p> && <button onClick={() => generateCountry()}>Next</button>
            
        }
        </>
        }

    }

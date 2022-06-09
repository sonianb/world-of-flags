import React from "react";
import Answers from "./Answers";
// import NextButton from "./NextButton";


const URL = "https://restcountries.com/v3.1/all";

function randomNumber(num) {
    return Math.floor(Math.random() * num)
} 
  
export default function Flags() {
    const [flag, setFlag] = React.useState("");
    // const [country, setCountry] = React.useState("");

    function generateFlag() {
        return fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            const randomNum = randomNumber(data.length -1)
            setFlag(data);
            
            // setCountry(data[randomNum].name.common);
        })
    }
    generateFlag();
    console.log("flag", flag);

    console.log("hello2");

      if(!flag) {
            return <div>Loading...</div>
        } else {
        return <>
            <h2>What's the country?</h2> 
            <div>
                {flag}
            </div>
        <button>Next</button>
        </>
        }
        
    //    <Answers 
    //     country={country}

    //     />
    
    }

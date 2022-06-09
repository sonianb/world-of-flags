import React from "react";
import Answers from "./Answers";

const URL = "https://restcountries.com/v3.1/all/"

function randomNumber(num) {
    return Math.floor(Math.random() * num)
} 


export default function Flags() {
    const [flag, setFlag] = React.useState("");
    const [country, setCountry] = React.useState("");
    
    React.useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            const randomNum = randomNumber(data.length -1)
            setFlag(data[randomNum].flag);
            setCountry(data[randomNum].name.common);
        })
    }, []);

    if(!flag) return <div>Loading...</div>;
    return  (<div>
        <h2>What's the country?</h2>
        <div>
            {flag}
        </div>

        <Answers 
        country={country}
        />
    </div>)
}
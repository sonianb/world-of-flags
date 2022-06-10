import React from "react";
// import NextButton from "./NextButton";


// need to know what flag was generated --> call API to get flag
// check if the flag matches the answer
// if they match, background turns green
// if they don't match, background turns red

//to fetch country name  data[0].name.common

export default function Answers(props) {

    
    return (<form onSubmit={(event) => {
        event.preventDefault();
        const userInput = event.target.answer.value.toLowerCase();
        if(userInput === props.country.toLowerCase()) {
            props.handleAnswer();
            // props.setCountry("");
        } 
    } }>
    <input
    type="text" aria-label="Enter answer" name="answer" required/>
    <button type="submit">Submit</button>
    
    </form>)
}

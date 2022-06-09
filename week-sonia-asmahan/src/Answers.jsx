import React from "react";


// need to know what flag was generated --> call API to get flag
// check if the flag matches the answer
// if they match, background turns green
// if they don't match, background turns red

//to fetch country name  data[0].name.common

export default function Answers(props) {

    return (<form onSubmit={(event) => {
        event.preventDefault();
        const userInput = event.target.answer.value;
        if(userInput === props.country) {
            console.log("Hello");
        } 
        //check if answer is correct
    } }>
    <input 
    type="text" aria-label="Enter answer" name="answer"/>
    <button type="submit">Submit</button>
    
    </form>)
}
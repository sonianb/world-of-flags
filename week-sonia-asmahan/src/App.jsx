import React from "react";
import Flags from './Flags';
import './App.css'

function App() {

  return (
    <main>
      <section>

    <Flags 
      
    />
      </section>
    </main>
  )
}

// console.log(flag);


    //Flags.jsx --> will contain question and flag function(fetch API & generate data), display "loading" msg & remember to export
    //Answers.jsx --> display correct answer and 2 wrong answers. 

    //To generate wrong ones: create an array with all 195 countries, create randomiser, 
    //randomiser will give random country that will have validity attribute wrong, display wrong answer.

    //HandleAnswer --> check answer validity, change backgound color to green if correct, red if wrong

    //Score.jsx --> function to count correct answers and display the result 

    //Lives.jsx --> function to track wrong answers, when we reach 3 wrong answers --> display game over & try again btn

    //NextButton.jsx --> generate new flag & answers, keep the state of score and lives

    //EndGame.jsx --> show "game over" and "play again" button.
    //Play again btn will reset the state of the game(score:0, lives:3)


export default App;

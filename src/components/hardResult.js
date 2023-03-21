import React, {useContext} from "react";
import { AppContext } from "../views/hardGamePage";
function Result(){
    const {gameOver,correctWord,currAttempt} = useContext(AppContext);
        console.log(gameOver.guessedWord);
        console.log(gameOver.gameOver);
    return(
        <div className="gameOver">
            
            <h3>
            {gameOver.guessedWord 
                ? "Congratulations! You Correctly Guessed the Wordle"
                : "You Failed to Guess the Word"}
            </h3>
            <h3>If you want to take another game,return to Home section and refresh the page</h3>
            <h1>Correct Word: {correctWord}</h1>
            {gameOver.guessedWord && (
            <h3>You guessed in {currAttempt.attempt} attempts</h3>
                )}
        </div>
    );
}
export default Result;

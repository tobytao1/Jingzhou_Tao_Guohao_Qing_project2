import "../App.css";
import React from "react";
import Board from "../components/hardBoard";
import Keyboard from "../components/hardKeyBoard";
import GameOver from "../components/hardResult";
import {createContext, useEffect, useState} from "react";
import { boardDefault,generatorWordSet } from "./sevenBoard.js";

export const AppContext = createContext();
function  Hard(){
    const [board,setBoard] = useState(boardDefault); 
    const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0});
    const [wordSet,setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [correctWord,setCorrectWord] = useState("");
    const [gameOver, setGameOver] = useState({
        valid :true,
        gameOver: false,
        guessedWord: false,
      });
   
    useEffect (() => {
    generatorWordSet().then((words) =>{
            setWordSet(words.wordSet);
            setCorrectWord(words.todaysWord);
            
        })
    } ,[])
    const onSelectLetter = (keyVal) =>{
        if (currAttempt.letterPos > 6){
            return; 
        } 
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({...currAttempt,letterPos: currAttempt.letterPos+1})
    }
    const onEnter = (keyVal) => {
        if (currAttempt.letterPos !== 7){
            window.confirm("we need longer word")
            setGameOver({ valid:false,gameOver: false, guessedWord: false});
            return; 
        }

        let currWord = "";
        for (let i = 0;i < 6;i ++){
            currWord += board[currAttempt.attempt][i]
            
        }
    
        setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0})
    
       
        console.log(correctWord);
        if (currWord.toLowerCase() === correctWord) {
            setGameOver({ valid:true,gameOver: true, guessedWord: true});
            return;
          }
        else {if (currAttempt.attempt === 5) {
            setGameOver({ valid:true,gameOver: true, guessedWord: false });
            return;
          }
        }
        
    }
    const onDelete = (keyVal) => {
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
        setBoard(newBoard);
        setCurrAttempt({...currAttempt,letterPos: currAttempt.letterPos-1})
    }
    return (
        <div className="App">
                <h1>wordle</h1>
            
            <AppContext.Provider value={{board, setBoard,currAttempt,setCurrAttempt,onDelete,
                onEnter,onSelectLetter,correctWord,disabledLetters, setDisabledLetters,gameOver,setGameOver}}>
            <div className="game">
            <Board />
            {gameOver.gameOver ? <GameOver /> :<Keyboard />}
            </div>
            </AppContext.Provider>
        </div>
    );
}
export default Hard;

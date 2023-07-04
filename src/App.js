import React, { useState, useEffect } from "react";
import Squares from "./Components/Squares";
import Message from "./Components/Message";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setState] = useState(initialState);
  const [isXChance, setXChance] = useState(false);
  const [winner, setWinner] = useState(null);

  function handleClick(index) {
    if (!gameState[index]) {
      let strings = Array.from(gameState);
      strings[index] = isXChance ? "X" : "0";
      setState(strings);
      setXChance(!isXChance);
    }
  }

  function clearGame() {
    setState(initialState);
    setWinner(null);
  }

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
    }
  }, [gameState]);

  function checkWinner() {
    const winLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
          ]
          // console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
          for (let i=0;i<winLines.length;i++){
            const [a,b,c] =winLines[i];
            if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
              return gameState[a];
            }
      
          }
          return null;
  }

  return (
    <div className="app-header">
      <p className="heading-text">Tic-Tac-Toe-App</p>
      <div className="row jc-center">
       <Squares className="b-bottom-right" state = {gameState[0]} onClick={() => handleClick(0)}/>
         <Squares  className="b-bottom-right" state = {gameState[1]} onClick={() => handleClick(1)} />
         <Squares className="b-bottom" state ={gameState[2]} onClick={ () =>handleClick(2)}/>
       </div>
       <div className="row jc-center">
         <Squares className="b-bottom-right" state = {gameState[3]} onClick={() =>handleClick(3)}/>
         <Squares className="b-bottom-right" state = {gameState[4]} onClick={() =>handleClick(4)}/>
         <Squares className="b-bottom" state = {gameState[5]} onClick={() =>handleClick(5)}/>
       </div>
       <div className="row jc-center">
         <Squares className="b-right" state = {gameState[6]} onClick={() =>handleClick(6)}/>
         <Squares className="b-right" state ={gameState[7]} onClick={() =>handleClick(7)}/>
         <Squares state = {gameState[8]} onClick={() =>handleClick(8)}/>
      </div>
      {winner && (
        <Message winner={winner} onClearGame={clearGame} />
      )}
      <p className="fc-aqua fw-600">Made By Vamsidhar Gokavarapu</p>
    </div>
  );
}

export default App;

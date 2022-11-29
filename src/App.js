import './App.css';
import React, {  useState } from "react";
import Modal from '@mui/material/Modal';
import Results from "./components/Results";
import Rules from "./components/Rules";
import Game from './components/Game';

function App() {
  const choices = ["scissors", "rock", "paper"]

  const [score, setScore] = useState(0)
  const [rules, setRules] = useState(false)
  const [result, setResult] = useState(false)
  const [game, setGame] = useState(true)

var random = choices[Math.floor(Math.random()*choices.length)];

const startGame = (event) => {
  if (random === event.target.id) {
          setGame(false)
          setResult(true)
  } else if (event.target.id === "paper") {
      if (random === "scissors") {
          setScore(score - 1)
          setGame(false)
          setResult(true)
      } else if (random === "rock") {
          setScore(score + 1)
          setGame(false)
          setResult(true)
      }
  } else if (event.target.id === "scissors") {
    if (random === "rock") {
      setScore(score - 1)
      setGame(false)
      setResult(true)
    } else if (random === "paper") {
      setScore(score + 1)
      setGame(false)
      setResult(true)
    }
  }  else if (event.target.id === "rock") {
    if (random === "scissors") {
      setScore(score + 1)
      setGame(false)
      setResult(true)
    } else if (random === "paper") {
      setScore(score - 1)
      setGame(false)
      setResult(true)
    }
  }
  }

  const startAgain = () => {
    setResult(false)
    setGame(true)
}

const showRules = () => {
  setRules(true)
}
  return (
    <div className="game">

        {/* Modal for rules */}
        <Modal
        open={rules}
        onClose={() => setRules(false)}>
        <div>
        <Rules />
        </div>
        </Modal>

        <div className="field">
        <h1 className="score">SCORE: {score}</h1>
        {result && <Results startAgain={startAgain}/> }
        {game && <Game startGame={startGame}/>}
        </div>
        <div>
            <button className="rules-btn" onClick={showRules}>Rules</button>
        </div>
    </div>
)
}

export default App;

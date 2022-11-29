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
  const [showResult, setShowResult] = useState("")
  const [result, setResult] = useState([])
  const [game, setGame] = useState(true)

var random = choices[Math.floor(Math.random()*choices.length)];

const startGame = (event) => {  
  if (event.target.id === "paper") {
      if (random === "scissors") {
          setScore(score - 1)
          setGame(false)
          setShowResult("YOU LOSE")
          setResult(["PAPER", "SCISSORS"])
      } else if (random === "rock") {
          setScore(score + 1)
          setGame(false)
          setShowResult("YOU WIN")
          setResult(["PAPER", "ROCK"])
      } else if (random === event.target.id) {
          setGame(false)
          setShowResult("DRAW")
          setResult(["PAPER", "PAPER"])
      }
  } else if (event.target.id === "scissors") {
    if (random === "rock") {
      setScore(score - 1)
      setGame(false)
      setShowResult("YOU LOSE")
      setResult(["ROCK", "SCISSORS"])
    } else if (random === "paper") {
      setScore(score + 1)
      setGame(false)
      setShowResult("YOU WIN")
      setResult(["SCISSORS", "PAPER"])
    } else if (random === event.target.id) {
      setGame(false)
      setShowResult("DRAW")
      setResult(["SCISSORS", "SCISSORS  "])
    }
  }  else if (event.target.id === "rock") {
    if (random === "scissors") {
      setScore(score + 1)
      setGame(false)
      setShowResult("YOU WIN")
      setResult(["ROCK", "SCISSORS"])
    } else if (random === "paper") {
      setScore(score - 1)
      setGame(false)
      setShowResult("YOU LOSE")
      setResult(["ROCK", "PAPER"])
    } else if (random === event.target.id) {
      setGame(false)
      setShowResult("DRAW")
      setResult(["ROCK", "ROCK"])
    }
  }
  }

  const startAgain = () => {
    setShowResult(false)
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
        {showResult && <Results startAgain={startAgain} showResult={showResult} result={result}/> }
        {game && <Game startGame={startGame}/>}
        </div>
        <div>
            <button className="rules-btn" onClick={showRules}>Rules</button>
        </div>
    </div>
)
}

export default App;

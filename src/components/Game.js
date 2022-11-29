import React from "react";


export default function Game(props) {
    return (
        <div>
            <button className="game-btn" id={"paper"} onClick={props.startGame}>Paper</button>
            <button className="game-btn" id={"scissors"} onClick={props.startGame}>Scissors</button>
            <button className="game-btn" id={"rock"} onClick={props.startGame}>Rock</button> 
            </div>
    )
}
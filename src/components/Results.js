import React from "react";
import "./Results.css"


export default function Results(props) {

    return (
        <div>
            {props.showResult === "YOU WIN" && <h1 className="res">YOU WIN</h1>}           
            {props.showResult === "YOU LOSE" && <h1 className="res">YOU LOSE</h1>}
            {props.showResult === "DRAW" && <h1 className="res">DRAW</h1>}
            <h1 className="results">You have {props.result[0]} and your opponent has {props.result[1]}</h1>
            <button onClick={props.startAgain} className="again-btn">Play again</button>
            </div>

    )
}
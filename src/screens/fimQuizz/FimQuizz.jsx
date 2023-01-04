
import React from "react";
import { useState } from "react";
import Img from "../../img/logo.png"

import "./FimQuizz.css"
import Quizz from "../quizz/Quizz";

export default function FimQuizz(props){

    var [oldScore, setOuldScore] = useState(JSON.parse(localStorage.getItem("score")))
    var [reset, setReset] = useState(false)
    
    function saveNewScore(){
        localStorage.setItem(
            "score",  JSON.stringify({
                score: props.hits, 
                questions: props.questions
            })
            )
        window.alert("Score Salvo")
    }

    return(
        <div className="container">
            <h1>SEU RESULTADO!</h1>
            <h1 className="result">RESULT!</h1>
            <p>Você acertou {props.hits} questões de {props.questions}</p>
            {
                !localStorage.score &&
                <div>
                    {props.resetButton}
                    <button className="btn1" 
                            onClick={()=>{localStorage.setItem("score", JSON.stringify({
                                score: props.hits, 
                                questions: props.questions
                            }))}}
                            >Salvar</button>
                </div> 
            }
            {
                localStorage.score &&
                <>
                    <p>Seu score anterior era de {oldScore.score}</p>
                    <div>
                        {props.resetButton}
                        <button className="btn1" onClick={()=>saveNewScore()}>Salvar novo score</button>
                    </div>
                </> 
            }
            <img src={Img} />
        </div>
    )
}
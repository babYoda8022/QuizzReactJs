import React from "react";
import "./QuizzPergunta.css"

export default function QuizPergunta(props){
    return(
       <button onClick={props.funcao} className="buttonQuiz" id={props.correct}> { props.name } </button>
    )
}
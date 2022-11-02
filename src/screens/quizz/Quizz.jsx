
import { React, useState } from "react";
import QuizzPergunta from "../../components/QuizzPergunta";
import Img from "../../img/logo.png"
import "./Quizz.css"
import { questions } from "../../data/questions";

export default function Quizz(){

    var [button, setButton] = useState(0)
    var [corret, setCorrect] = useState();

    function click(){
        setCorrect(
            corret = "True"
        )
    }

    return(
        <div class="container">
            <h1>PERGUNTA</h1>
            <p>{ questions[button]["question"] }</p>
            <QuizzPergunta name={questions[button]["options"][0]} funcao={click}/>
            <QuizzPergunta name={questions[button]["options"][1]} funcao={click}/>
            <QuizzPergunta name={questions[button]["options"][2]} funcao={click}/>
            <QuizzPergunta name={questions[button]["options"][3]} funcao={click}/>
            <img src={Img} className="quizImg" />
        </div>
    )
}
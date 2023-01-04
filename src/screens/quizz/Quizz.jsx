
import { React, useState, useEffect } from "react";
import Img from "../../img/logo.png"
import "./Quizz.css"
import FimQuizz from "../fimQuizz/FimQuizz"
import { questions } from "../../data/questions";

export default function Quizz() {

    var [index, setIndex] = useState(0)

    var [next, setNext] = useState(false);
    var [oneCLick, setOneClick] = useState("True")
    var [show, setShow] = useState("")
    var [hits, setHits] = useState(0)
    var [quizzEnd, setQuizzEnd] = useState(false)

    function incrementing() {
        if (questions[index + 1] != undefined) {
            if (next) {
                setIndex(
                    index += 1
                )
                setNext(e => false)
                setShow(e => "false")
                setOneClick(e => true)
            }
        } else {
            setQuizzEnd(e => true)
        }
    }

    function validQuestion(question, answer) {
        if (question == answer) {
            setHits(e => e + 1)
        }
        setShow(true)
        setOneClick(e => false)
        setNext(true)
    }

    return (
        <div class="container">
            {
                quizzEnd == false &&
                <>
                    <h1>PERGUNTA</h1>
                    <p>{questions[index]["question"]}</p>
                    {
                        questions[index]["options"].map((item) => {
                            if (show == true) {
                                if (item == questions[index]["answer"]) {
                                    return <button className="buttonQuiz" id="True">{item}</button>
                                }
                                return <button className="buttonQuiz" id="False">{item}</button>
                            }
                            return <button className="buttonQuiz"
                                onClick={() => validQuestion(item, questions[index]["answer"])}>{item}</button>
                        })
                    }
                    {
                        show == true && questions[index + 1] != undefined &&
                        <button onClick={incrementing}>Próxima pergunta</button>
                    }
                    {
                        show == true && questions[index + 1] == undefined &&
                        <button onClick={incrementing}>Finalizar</button>
                    }
                    <img src={Img} className="quizImg" />
                </>
            }
            {
                quizzEnd &&
                <FimQuizz hits={hits} questions={questions.length}/>
            }
        </div>
    )
}
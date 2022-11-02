
import React from "react";
import Img from "../../img/logo.png"
import "./FimQuizz.css"

export default function FimQuizz(){
    return(
        <div className="container">
            <h1>SEU RESULTADO!</h1>
            <h1 className="result">RESULT!</h1>
            <p>Você acertou x questões de x</p>
            <div>
                <button className="btn1">Reiniciar</button>
                <button className="btn1">Salvar</button>
            </div>
            <img src={Img} />
        </div>
    )
}
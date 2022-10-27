import React from "react";
import "./Wellcome.css"
import Img from "../../img/logo.png"

export default function Wellcome() {
    return (
      <div class="container">
        <img src={Img} alt="" class="img"/>
        <h1>QUIZ DE PROGRAMAÇÃO</h1>
        <button>INICIAR TESTE</button>
      </div>
    )
  }
  
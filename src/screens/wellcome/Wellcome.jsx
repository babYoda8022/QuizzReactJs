import { useState } from "react";
import "./Wellcome.css"
import Img from "../../img/logo.png"
import Quizz from "../quizz/Quizz";


export default function Wellcome() {

  var [start, setStart] = useState(false)

  return (
    <div class="container">
      {
        start == false &&
        <>
          <img src={Img} alt="" class="img" />
          <h1>QUIZ DE PROGRAMAÇÃO</h1>
          <button onClick={()=>{setStart(e => true)}}>INICIAR TESTE</button>
        </>
      }
      {
        start &&
        <>
          <Quizz></Quizz>
        </>
      }
    </div>
  )
}

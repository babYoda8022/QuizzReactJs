import { useState } from "react";
import "./Wellcome.css"
import Img from "../../img/logo.png"
import Quizz from "../quizz/Quizz";


export default function Wellcome() {

  var [start, setStart] = useState(false)

  function teste(){
    window.alert(import.meta.env.VITE_REACT_APP_BASE_URL)
  }

  return (
    <div class="container">
      {
        start == false &&
        <>
          <img src={Img} alt="" class="img" />
          <h1>QUIZ DE PROGRAMAÇÃO</h1>
          <button onClick={()=>{teste()}}>INICIAR TESTE</button>
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

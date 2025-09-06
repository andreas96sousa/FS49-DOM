
import { useState } from "react";
import {ReactLogo} from "./ReactLogo"

function App() {  
  const [counter, setCounter] = useState(0)
  
  function diminuir(){
    setCounter(prevs => prevs - 1)
    if(counter <= 0 ){
      contador.style.color = 'rgb(255, 114, 59)'
    } else if (counter == 1){
      contador.style.color = 'white'

    }
  }

  function aumentar(){
    setCounter(prevs => prevs + 1)
    if(counter >= 0 ){
      contador.style.color = 'rgb(59, 248, 255)'
    } else if (counter == -1){
      contador.style.color = 'white'

    }
  }

  function resetar(){
    setCounter(0)
    contador.style.color = 'white'
  }

  return (
    <>
      <ReactLogo />
      <h1>CONTADOR</h1>
      <span id="contador">{counter}</span>
      <div className="buttons">
        <button onClick={diminuir}>Diminuir</button>
        <button onClick={resetar}>Resetar</button>
        <button onClick={aumentar}>Aumentar</button>
      </div>
    </>
  )
}
export default App

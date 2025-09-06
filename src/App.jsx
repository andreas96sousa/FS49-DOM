
import { useState } from "react";
import {ReactLogo} from "./ReactLogo"

function App() {
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState('white')
  
  function diminuir(){
    const newCounter = counter - 1;
    setCounter(newCounter);
    if(newCounter > 0){
      setColor('rgb(59, 248, 255)');
    } else if(newCounter < 0){
      setColor('rgb(255, 114, 59)');
    } else {
      setColor('white');
    }
  }

  function aumentar(){
    const newCounter = counter + 1;
    setCounter(newCounter);
    if(newCounter > 0){
      setColor('rgb(59, 248, 255)');
    } else if(newCounter < 0){
      setColor('rgb(255, 114, 59)');
    } else {
      setColor('white');
    }
  }

  function resetar(){
    setCounter(0);
    setColor('white');
  }

  return (
    <>
      <ReactLogo />
      <h1>CONTADOR</h1>
      <span id="contador" style={{color}}>{counter}</span>
      <div className="buttons">
        <button onClick={diminuir}>Diminuir</button>
        <button onClick={resetar}>Resetar</button>
        <button onClick={aumentar}>Aumentar</button>
      </div>
    </>
  )
}
export default App



export function Reset(){
    function reset(){
        counter.textContent = 0
        counter.style.color = "white"

    }

  return(
    <button onClick={reset}>Resetar</button>
  )
}

export function Decrease(){
    function decrease(){
        let num = Number(counter.textContent)
        num--
        counter.textContent = num
        if(num<0){
            counter.style.color = "red"
        }
        if(num==0){
            counter.style.color = "white"
        }
    }

  return(
    <button onClick={decrease}>Diminuir</button>
  )
}

export function Increase(){
    function increase(){
        let num = Number(counter.textContent)
        num++
        counter.textContent = num
        if(num>0){
            counter.style.color = "rgb(62, 255, 159)"
        }
        if(num==0){
            counter.style.color = "white"
        }
    }

  return(
    <button onClick={increase}>Aumentar</button>
  )
}

import {Reset, Decrease, Increase} from "./buttons"
import {ReactLogo} from "./ReactLogo"

function App() {
  let counter = document.querySelector("#counter")

  return (
    <>
      <ReactLogo />
      <h1>Contador</h1>
      <span id="counter">0</span>
      <div className="buttons">
        <Decrease />
        <Reset />
        <Increase />
      </div>
    </>
  )
}
export default App

import { useState } from 'react';
import CountryApi from './assets/Components/Countries/CountryApi'
import Multiply from './assets/Components/Multiply/Multiply';
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <div>{counter}</div>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Aunmentar</button>
      <button onClick={() => setCounter(counter - 1)}>Disminuir</button>
      <br />
      <br />
      <Multiply counter={counter}/>
      <br />
      <button onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"}</button>
      <br />
      <br />
      {show ? <CountryApi/> : <></>}
    </div>
  )
}

export default App

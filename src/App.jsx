import { useState } from 'react';
import CountryApi from './assets/Components/CountryApi'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>{show ? "Ocultar" : "Mostrar"}</button>
      {show ? <CountryApi/> : <></>}
    </div>
  )
}

export default App

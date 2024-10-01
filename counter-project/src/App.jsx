import { useState } from 'react'
import './App.css'

function App() {
  const [counter , setCounter] = useState(0);
const addValue = () => {
  setCounter(counter + 1);
}
const removeValue = () => {
  setCounter(counter - 1);
}
  return (
    <>
      <h1>
        React Revise
      </h1>
    <h1>Counter Value : {counter}</h1>
    <button onClick={addValue}>Add value</button> {" "}
    <button onClick={removeValue}>remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='text-3xl bg-green-600 p-3 rounded-md'>Here is my  Tailwind project</h1>
      <Card username="Sourav"/>
      <Card username='Devid' post=' engineer'/>
      <Card/>
    </>
  )
}

export default App

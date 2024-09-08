import { useState } from 'react'
import './App.css'
import Praduct from './Praduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Praduct/>
    </>
  )
}

export default App

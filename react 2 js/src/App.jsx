import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import Portfoli from './Portfoli'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo/>
      <Portfoli/>
    </>
  )
}

export default App

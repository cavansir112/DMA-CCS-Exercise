import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'
import Home from './Home'
import About from './About'
import MySkils from './MySkils'
import Funfacts from './Funfacts'
import Services from './Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main">
      <div className="container h-100 px-5">
        <div className="row h-100 ">
          <div className="col-3 px-0 py-5 h-100">
           <Menu/>
          </div>
          <div className="col-9 pl-5 py-5 main-section">
            <Home/>
            <About/>
            <MySkils/>
            <Funfacts/>
            <Services/>
          </div>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default App

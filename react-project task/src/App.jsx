import { useState,useEffect } from 'react'
import './App.css'
import Menu from './menu'
import Home from './Home'
import About from './About'
import MySkils from './MySkils'
import Funfacts from './Funfacts'
import Services from './Services'
import Portfolio from './Portfolio'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="main">
      <div className="container h-100 px-5">
        <div className="row h-100 ">
          <div className="col-3 px-0 py-5 h-100">
           <Menu/>
          </div>
          <div className="col-9 pl-5 py-5 main-section">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/about" element={<MySkils />} />
              <Route path="/about" element={<Funfacts />} /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
      
    </Router>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import BooksSection from './companent/BooksSection'
import Navbar from './companent/Navbar'
import Admin from './companent/Admin'
import AdminBooks from './companent/AdminBooks'
import AdminAuthers from './companent/AdminAuthers'
import AdminJhaneras from './companent/AdminJhaneras'
import OpenPhage from './companent/OpenPhage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<BooksSection />}/>
            <Route path="/open-phage" element={<OpenPhage />} />
            <Route path="/admin" element={<Admin />} >
              <Route path="" element={<AdminBooks />} />
              <Route path="authors" element={<AdminAuthers />} />
              <Route path="jhaneras" element={<AdminJhaneras />} />
            </Route>
        </Routes>
      </Router>
      
    </>
      
  )
}

export default App

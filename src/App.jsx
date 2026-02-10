import React from 'react'
import Navbar from "./components/Navbar.jsx"
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'

const App = () => {
  return (
    <div>
      <ScrollTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App

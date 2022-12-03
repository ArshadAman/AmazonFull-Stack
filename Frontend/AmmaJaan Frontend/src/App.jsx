import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Home from './components/HomePage/Home'
import NavBar from './components/NavBar'
import NavCat from './components/NavCat'

function App() {
  return (
    <div className="App scroll-smooth" id='top'>
      <NavBar/>
      <NavCat/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App

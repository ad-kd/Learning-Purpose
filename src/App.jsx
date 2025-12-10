import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Hero from './components/home-component/hero.jsx'
import Counts from './components/home-component/counts.jsx'
import axios from 'axios' 


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Counts />
      <Footer />
    </div>
  )
}

export default App;
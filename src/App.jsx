import { useState, useRef } from 'react'
import NavBar from './components/Navbar'
import Cursor from './components/cursor'
import Hero from './components/hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import ScrollBars from './components/ScrollBars'

function App() {
  const containerRef = useRef(null)

  return (
    <div className="app" ref={containerRef}>
      <ScrollBars containerRef={containerRef} />
      <Cursor />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

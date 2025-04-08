import { useState } from 'react'
import NavBar from './components/Navbar'
import Cursor from './components/cursor'
import Hero from './components/hero'
import About from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cursor />
      <NavBar />
      <Hero />
      <About />
    </>
  )
}

export default App

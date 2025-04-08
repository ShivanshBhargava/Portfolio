import { useState, useEffect } from 'react'
import NavBar from './components/Navbar'
import Cursor from './components/cursor'
import Hero from './components/hero'
import About from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app-container">
      <Cursor />
      <NavBar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            {/* Projects will be added here */}
          </div>
        </section>
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            {/* Skills will be added here */}
          </div>
        </section>
        <section id="contact" className="section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-container">
            {/* Contact form will be added here */}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

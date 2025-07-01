import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { useEffect } from 'react'

// Direct page imports for instant loading
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  useEffect(() => {
    // Set the document title for the entire app
    document.title = 'SlythosIT'
    
    // Preload critical resources
    const preloadLink = document.createElement('link')
    preloadLink.rel = 'preload'
    preloadLink.href = '/team/sadat3.jpg'
    preloadLink.as = 'image'
    document.head.appendChild(preloadLink)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

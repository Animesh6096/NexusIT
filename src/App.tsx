import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { useEffect, Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

// Page imports will go here
import MainLayout from './layouts/MainLayout'
import { 
  Home, 
  About, 
  Projects, 
  Services, 
  Team, 
  Careers, 
  Contact, 
  NotFound 
} from './utils/lazyImports'

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <LoadingSpinner size="lg" className="text-primary mx-auto mb-4" />
      <p className="text-gray-600 dark:text-gray-400">Loading page...</p>
    </div>
  </div>
)

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
            <Route index element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            } />
            <Route path="services" element={
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            } />
            <Route path="projects" element={
              <Suspense fallback={<PageLoader />}>
                <Projects />
              </Suspense>
            } />
            <Route path="team" element={
              <Suspense fallback={<PageLoader />}>
                <Team />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            } />
            <Route path="careers" element={
              <Suspense fallback={<PageLoader />}>
                <Careers />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

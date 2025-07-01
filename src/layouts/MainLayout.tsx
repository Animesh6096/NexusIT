import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import SkipToMainContent from '../components/SkipToMainContent'
import { OfflineNotice } from '../components/ErrorHandling'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToMainContent />
      <OfflineNotice />
      <Navbar />
      <main 
        className="flex-grow" 
        id="main-content"
        tabIndex={-1}
        role="main"
        aria-label="Main content"
      >
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default MainLayout
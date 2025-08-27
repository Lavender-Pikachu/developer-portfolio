import { useState } from 'react'
import './App.css'
import Navbar from './ui/Navbar'
import MobileMenu from './ui/MobileMenu'
import Loading from './ui/LoadingScreenAnimation'
import AnimationWaves from './ui/AnimationWaves'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import { Projects } from './sections/Projects'
import Footer from './sections/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <div className="text-3xl font-bold">
        {!isLoading&&<Loading onComplete={()=> setIsLoading(true)}/>}
        <Navbar isMenuOpen = {isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
        <AnimationWaves/>
        <About />
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App

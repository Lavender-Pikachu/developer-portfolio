import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Loading from './ui/LoadingScreenAnimation'
import Home from './components/Home'
import AnimationWaves from './components/AnimationWaves'
import About from './components/About'
import Contact from './components/Contact'

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
        <Contact/>
      </div>
    </>
  )
}

export default App

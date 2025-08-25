import { MdMenu } from "react-icons/md"
import Logo from "./Logo"

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <nav className="fixed top-0 w-full z-40 bg[rgba(10,10,10, 0.8)]
      backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
           <Logo />
           {!isMenuOpen&&<div onClick={()=>setIsMenuOpen(prev => !prev)}
           className="fixed text-2xl top-5 right-7 z-40 md:hidden cursor-pointer font-mono">
            <MdMenu/>
           </div>}
           <div className="flex md:flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home"
                  className="text-gray-300 text-lg hover:text-xl hover:text-white
                  transition-all
                  ">
                  Home
                </a>
                <a href="#about"
                  className="text-gray-300 text-lg hover:text-xl hover:text-white
                  transition-all
                  ">
                  About
                </a>
                <a href="#Experience"
                  className="text-gray-300 text-lg hover:text-xl hover:text-white
                  transition-all
                  ">
                  Experience
                </a>
                <a href="#projects"
                  className="text-gray-300 text-lg hover:text-xl hover:text-white
                  transition-all
                  ">
                  Projects
                </a>
                <a href="#contact"
                  className="text-gray-300 text-lg hover:text-xl hover:text-white
                  transition-all
                  ">
                    Contact
                </a>
              </div>
           </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

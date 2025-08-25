import { RxCross2 } from "react-icons/rx"

const MobileMenu = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <div className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out gap-15 ${isMenuOpen? "h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}`}>
      <button onClick={()=>setIsMenuOpen(false)}
      className="fixed  top-5 right-7 text-2xl focus:outline-none cursor-pointer"
      aria-label="Close Menu"
      >
        <RxCross2 />
      </button>
      <a href="#home"
      onClick={()=>setIsMenuOpen(false)}
                  className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
                  Home
                </a>
                <a href="#about"
                onClick={()=>setIsMenuOpen(false)}
                  className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
                  About
                </a>
                <a href="#Experience"
                  onClick={()=>setIsMenuOpen(false)}
                  className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
                  Experience
                </a>
                <a href="#projects"
                onClick={()=>setIsMenuOpen(false)}
                  className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
                  Projects
                </a>
                <a href="#contact"
                onClick={()=>setIsMenuOpen(false)}
                  className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen?"opacity-100 translate-y-0":"opacity-0 translate-y-5"}`}>
                    Contact
                </a>

    </div>
  )
}

export default MobileMenu

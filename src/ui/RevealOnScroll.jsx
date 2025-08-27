import {useEffect, useRef} from 'react'

export const RevealOnScroll = ({children}) => {
  const ref = useRef(null)
  useEffect(()=>{
    //const observer = new IntersectionObserver(([entry])=>{...}, options)
    // IntersectionObserver是浏览器提供的API，可以检测某个元素是否进入或离开视口
    //options - threshold:0.2 -> 当元素至少有20%出现在视口时，就算进入
    //        - rootMargin:"0-x 0-x -50px 0px"-> 提前50px就触发
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          ref.current.classList.add("visible")
        }
      },
    {threshold: 0.2,rootMargin:"0px 0px -50px 0px"}
  )
    if(ref.current){
      observer.observe(ref.current)
    }

    return ()=> {
      if(ref.current){
        observer.unobserve(ref.current)
      }
      observer.disconnect()
    }
  },[])

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
  }


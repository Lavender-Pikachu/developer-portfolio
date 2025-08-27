import React from 'react'
import { FaQq } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section>
      <div className='min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10'>
        <div className='flex gap-10 p-4 justify-center text-white'>
          <a href="#"
            className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white'
            target='_blank'
          >
            <FaQq/>
          </a>
          <a href=""
             className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white'
             target='_blank'
          >
            <FaSquareGithub/>
            </a>
        </div>
        <p>© 2025 LavPika. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer

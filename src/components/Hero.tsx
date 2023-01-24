import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="h-screen text-center text-white flex justify-center items-center overflow-hidden hero-main">
      <div>
      <h1 className='m-4 text-9xl font-bold flex flex-col font-["Cinzel"]'><span>New</span><span>Vision</span><span>Band</span></h1>
      <p className='m-4  text-2xl font-thin'>Come and enjoy jazz, blues and gospel music with us!!!</p>
      <button className='text-2xl flex mx-auto items-center px-4 py-2 border-2 gap-2 border-white rounded hover:text-red-400 hover:border-red-400 hover:bg-gray-600'>Hire us <span><AiOutlineArrowRight/></span></button>
      </div>
    </div>
  )
}

export default Hero
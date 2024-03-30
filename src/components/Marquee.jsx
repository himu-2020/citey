import { motion } from 'framer-motion';
// import React from 'react'

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-gray-900">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1 className='text-[20vw] leading-none font-FoundersGrotesk-Semibold  uppercase'>We are Citey</motion.h1>
        <motion.h1 className='text-[20vw] leading-none font-FoundersGrotesk-Semibold  uppercase'>We are Citey</motion.h1>
      </div>
    </div>
  );
}

export default Marquee
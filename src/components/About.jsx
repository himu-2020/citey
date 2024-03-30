// import React from 'react'

function About() {
  return (
    <div className="w-full p-20 text-[3vw] leading-[3.5vw] tracking-tight bg-yellow-400 rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-NeueMontreal-Regular">
        Citey serves as a strategic ally to rapidly expanding technology
        enterprises seeking to secure funding, market their products, articulate
        intricate concepts, and attract top-tier talent.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-16 border-yellow-200">
        <div className="w-1/2">
          <h1 className="text-3xl md:text-5xl">Our approach:</h1>
          <button className="uppercase flex gap-10 items-center px-6 py-4 bg-zinc-950 mt-7 rounded-full text-white text-lg md:text-xl">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-yellow-500">
            
        </div>
      </div>
    </div>
  );
}

export default About;
// import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    //   main div start
    <div className="w-full h-screen bg-zinc-950 pt-1">
      {/* first div start*/}
      <div className="textstructure mt-40 px-14">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (<div className="mr-[1vw] w-[8vw] rounded-md h-[6vw] relative -top-0 bg-red-500"></div>)}
              <h1 className="uppercase text-[144px] leading-[7vw] font-FoundersGrotesk-Semibold font-bold">
                {item}
                </h1>
                </div>
            </div>
          );
        })}
      </div>
      {/* end of first div */}
      {/* second div start*/}
      <div className="border-t-[1px] border-zinc-800 mt-20 font-NeueMontreal-Regular flex justify-between items-center py-4 px-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md  tracking-tight leading-none" key={index}>
            {item}
          </p>
        ))}
        {/* third div start */}
        <div className="start flex items-center gap-2">
          <div className="px-3 py-1 border-[1px] border-zinc-400 font-NeueMontreal-Regular font-light text-md capitalize rounded-full">
            START THE PROJECT
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
        {/* end of third div */}
      </div>
      {/* end of second div */}

      {/*  main div end  */}
    </div>
  );
}

export default LandingPage;

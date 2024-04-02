// import React from 'react'
import { motion } from "framer-motion";

function Feature() {
  return (
    <div className="w-full py-16">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-7xl font-NeueMontreal-Regular tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-6 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-yellow-400 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"FYDE".split("").map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <span>{item}</span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img1.png"
                alt="img1"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] overflow-hidden">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-yellow-400 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"VISE".split("").map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <span>{item}</span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img2.jpg"
                alt="img2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-6 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-yellow-400 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"TRAWA".split("").map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <span>{item}</span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img3.jpg"
                alt="img3"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] overflow-hidden">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute text-yellow-400 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"BEAN".split("").map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <span>{item}</span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img4.png"
                alt="img4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

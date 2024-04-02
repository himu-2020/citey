// import React from 'react'
import { motion, useAnimation } from "framer-motion";

function Feature() {
  const card = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const handleHover = (index) => {
    card[index].start({ y: "0" });
  };

   const handleHoverEnd = (index) => {
     card[index].start({ y: "100%" });
   };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-12">
        <h1 className="text-7xl font-NeueMontreal-Regular tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-6 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-yellow-400 right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={card[0]}
                    transition={{
                      easy: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img1.png"
                alt="img1"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-yellow-400 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={card[1]}
                    transition={{
                      easy: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img2.jpg"
                alt="img2"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-6 mt-10">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-yellow-400 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={card[2]}
                    transition={{
                      easy: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img3.jpg"
                alt="img3"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-yellow-400 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-bold text-6xl">
                {"BEAN".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={card[3]}
                    transition={{
                      easy: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="/images/img4.png"
                alt="img4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

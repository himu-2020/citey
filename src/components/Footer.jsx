// import React from 'react'

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-950 p-20 font-FoundersGrotesk-Semibold">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[9vw] uppercase leading-none -mb-10">EYE-</h1>
          <h1 className="text-[9vw] uppercase leading-none -mb-10">OPENING</h1>
        </div>
        <img
          className="w-20 -mb-16"
          src="/images/logo.png"
          alt="citey"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-[8vw] uppercase leading-none -mb-10">
          Presentations
              </h1>
              <div className="details font-NeueMontreal-Regular mt-10">
                  <a className="block text-xl font-light" href="#">Instagram</a>
                  <a className="block text-xl font-light" href="#">Facebook</a>
                  <a className="block text-xl font-light" href="#">Twitter</a>
                  <a className="block text-xl font-light" href="#">Dribble</a>
              </div>
      </div>
    </div>
  );
}

export default Footer;

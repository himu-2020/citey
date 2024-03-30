// import React from 'react'

function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
          <div className="relative w-full h-full bg-cover bg-center bg-[url('assets/images/eyes.png')]">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/2 bg-green-500">
          <div className="w-[15vw] h-[15vw] bg-red-500"></div>
              </div>
      </div>
    </div>
  );
}

export default Eyes
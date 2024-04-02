// import React from 'react'

function Information() {
  return (
    <div className="w-full h-screen bg-gray-900 items-center px-28 flex gap-5">
      <div className="infocontain h-[50vh] w-1/2">
        <div className="info relative rounded-xl w-full h-full bg-yellow-700 flex items-center justify-center">
          <img className="w-52" src="/images/logo.png" alt="citey" />
          <button className="absolute px-5 py-1 rounded-full border-2 border-yellow-500 left-10 bottom-10 text-yellow-500">
            &copy;2023-2024
          </button>
        </div>
      </div>
      <div className="infocontain flex gap-5 h-[50vh] w-1/2">
        <div className="info relative flex items-center justify-center rounded-xl w-1/2 h-full bg-yellow-900">
          <img className="w-46" src="/images/logo1.svg" alt="clutch" />
          <button className="absolute px-5 py-1 rounded-full border-2 border-yellow-500 left-4 bottom-10 text-yellow-500">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="info relative flex items-center justify-center rounded-xl w-1/2 h-full bg-yellow-900">
          <img className="w-36" src="/images/logo2.png" alt="Alumni" />
          <button className="absolute px-5 py-1 rounded-full border-2 border-yellow-500 left-4 bottom-10 text-yellow-500">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;

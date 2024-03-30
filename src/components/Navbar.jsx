// import React from "react";

function Navbar() {
  return (
<<<<<<< HEAD
    <div className="fixed z-[999] w-full px-14 py-2 font-NeueMontreal-Regular flex justify-between items-center">
      <div className="text-transparent bg-gradient-to-br from-red-500 via-blue-500 to-green-500 bg-clip-text text-3xl font-bold">
        <img className="w-32" src="/images/logo.png" alt="Citey" />
=======
    <div className="fixed z-[999] w-full px-20 py-4 font-NeueMontreal-Regular flex justify-between items-center">
      <div className="text-transparent bg-gradient-to-br from-red-500 via-blue-500 to-green-500 bg-clip-text text-3xl font-bold">
        <img className="w-28" src="/images/logo.png" alt="Citey" />
>>>>>>> b442dc9af6d0b3732734b8a73d7f1776963bcb53
      </div>

      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact us"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg font-light ${index === 4 && "ml-32"}`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;

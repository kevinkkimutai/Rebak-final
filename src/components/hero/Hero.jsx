import React from "react";

function Hero() {
  return (
    <div className="containe -mt-12 text-center ms-0 ">
      
          <h1 className="mb-5 txt font-serif font-extrabold  text-black text-4xl md:text-5xl">
          Welcome to Rebak
          </h1>
          <p className="mb-8 font-serif  font-medium  text-body-color  text-white dark:opacity-90 text-xl md:text-3xl">
          Your trusted partner for premium fencing solutions. Explore our range tailored to your needs. 
          </p>
          <div className="flex  items-center justify-center space-y- sm:flex-row sm:space-x-4 sm:space-y-0">
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get Your Quote</button>
          <button type="button" className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact Us</button>
           
          </div>
     
  </div>
  )
}

export default Hero
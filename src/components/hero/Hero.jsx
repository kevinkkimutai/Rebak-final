import React from "react";

function Hero() {
  return (
    <div className="containe  ms-0 ">
    <div className="mx-4 flex flex-wrap">
      <div className="w-full ">
        <div
          className="wow fadeInUp mx-auto max-w-[800px] text-center "
          data-wow-delay=".2s"
        >
          <h1 className="mb-5 txt font-serif font-extrabold leading-tight text-black text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          Welcome to Rebak
          </h1>
          <p className="mb-8 font-serif  font-medium !leading-relaxed text-body-color  text-gray-700 dark:opacity-90 text-xl md:text-2xl">
          Your trusted partner for premium fencing solutions. Explore our range tailored to your needs. With expertise and dedication, we enhance property safety and aesthetics. Start your journey to a secure and stylish property today.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get Your Quote</button>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
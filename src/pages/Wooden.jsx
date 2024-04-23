import React from "react";
import chain from "../assets/wood/perimeter fencing 2.jpg"
import chain2 from "../assets/wood/barb.jpg";
import chain3 from "../assets/wood/sample repair fence.jpg";

import chain5 from "../assets/wood/sample wooden fence.jpeg"

function Wooden() {
  return (
    <div className="mt-16">
         
    <nav className="flex mx-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-md font-semibold font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <a href="/wooden" className="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Wooden</a>
          </div>
        </li>
        
      </ol>
    </nav>
    <div className="border mt-4 mx-8"></div>
    <section
        id="home"
        className="wooden relative z-10 overflow-hidden pt-[120px] pb-1 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
    
       <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/shape.sg" alt="shape" className="w-full h-screen opacity-30 md:opacity-10 bg-gray-600" />
        
      </div>
      
      </section>

    <section className="relative z-10 py-4 md:py-10 lg:py-10 bg-white mx-1">
    <div className="containe text-center ms-0 ">
      
      <h1 className="mb-5 txt font-serif font-extrabold  text-black text-4xl md:text-5xl">
      Wooden Fencing Solutions
      </h1>
      <p className="mb-8 font-serif  font-medium  text-body-color  text-gray-500 dark:opacity-90 text-xl md:text-2xl">
      Discover the durability and security of our Wooden fencing solutions, offering reliable protection for your property.
      </p>
    
 
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 object-cover" >
    <div>
        <img className="max-h-56 max-w-full rounded-lg w-full h-full" src={chain} alt="" />
    </div>
    <div>
        <img className="max-h-56 w-full h-full max-w-full rounded-lg" src={chain5} alt="" />
    </div>
    <div>
        <img className="max-h-56 w-full h-full max-w-full rounded-lg" src={chain2} alt="" />
    </div>
    <div>
        <img className="max-h-56 w-full h-full  max-w-full rounded-lg" src={chain3} alt="" />
    </div>
  
</div>


<section className="relative z-10 py-4 md:py-10 lg:py-10 bg-white mx-1">
<div className="w-full p mt-5  text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Stay Connected with Rebak Fencing Solutions</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Keep projects moving forward with Rebak. Explore our fencing solutions today.</p>
    <div className="flex  items-center justify-center space-y- sm:flex-row sm:space-x-4 sm:space-y-0">
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get Your Quote</button>
      <a href="/contact">
      <button type="button"  className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Contact Us</button>
      </a>
      </div>
</div>
</section>


    <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/src/assets/shape.svg" alt="shape" className="w-full opacity-5" />
      </div>
      </section>
    </div>
  )
}

export default Wooden

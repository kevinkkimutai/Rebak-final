import React from "react";
import param from "../assets/services/perimeterfence.jpg";
import barbed from "../assets/services/barbedwire.jpg";
import wooden from "../assets/services/woodenfence.jpg";
import chainlink from "../assets/services/razor-chain.jpg";
import construct from "../assets/construct/gate2 (3).jpg";

function Services() {
  return (
    <div className="contain mx-1 md:border-t md:border-body-color/[.15] mb-2">
  <div className="mx-auto mb-5 max-w-[810px] text-center lg:mb-5 md:mt-4">
            
            <h2 className="mb-2 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
            Our Fencing Services
            </h2>
          <p className="text-lg text-gray-700">Explore our range of expert fencing solutions designed to enhance your property&apos;s safety and aesthetics.</p>
            
          </div>
    <div className="grid md:grid-cols-5 grid-cols-2 gap-2 mx-2">
  

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={param} alt="" />
    </a>
    <div className="p-1 text-center">
        
        <p className=" font-Bold font-serif text-2xl text-gray-700 dark:text-gray-400">Perimeter Fence</p>
       
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={barbed} alt="" />
    </a>
    <div className="p-1 text-center">
        
        <p className="  font-Bold font-serif text-2xl text-gray-700 dark:text-gray-400">Barbed Fence</p>
       
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={construct} alt="" />
    </a>
    <div className="p-1 text-center">
        
        <p className=" font-Bold font-serif text-2xl text-gray-700 dark:text-gray-400">Gate Fence</p>
       
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={wooden} alt="" />
    </a>
    <div className="p-1 text-center">
        
        <p className="  font-Bold font-serif text-2xl text-gray-700 dark:text-gray-400">Wooden Fence</p>
       
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={chainlink} alt="" />
    </a>
    <div className="p-1 text-center">
        
        <p className="font-Bold font-serif text-2xl text-gray-700 dark:text-gray-400">Chainlink Fence</p>
       
    </div>
</div>

  </div>
  </div>
  )
}

export default Services
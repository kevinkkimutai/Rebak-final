import React from "react";
import param1 from "../assets/images/sample perimeter fence.jpg";
import sample1 from "../assets/images/sample1.jpg";
import electric from "../assets/images/sample electric 2.jpg";
import chainlink3 from "../assets/images/sample chainlink 3.jpg";

function Blog() {
  return (
    <div className="contain mx-3 md:border-t md:border-body-color/[.15]">

<div className="mx-auto mb-5 max-w-[810px] text-center lg:mb-10 md:mt-10 mt-4">
            
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
            Fence Insights: Tips, Trends, and More!
            </h2>
          <p className="text-lg text-gray-700">Explore fencing tips, industry insights, and company updates in our blog. Stay informed, inspired, and discover new ways to enhance your property with our expert advice.</p>
            
          </div>
    <div className="grid md:grid-cols-4 grid-cols-1 gap-2 ">
  

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <img className="rounded-t-lg" src={param1} alt="" />
    
    <div className="p-2">
        
        <p className=" font-normal text-gray-700 dark:text-gray-400">Rebak prioritizes customizing fences, involving clients in every step.</p>
       
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
        <img className="rounded-t-lg" src={sample1} alt="" />
   
    <div className="p-2">
        
        <p className=" font-normal text-gray-700 dark:text-gray-400">Rebak Solutions ensures customer safety with reliable fencing concepts that meet market expectations.</p>
       
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 
        <img className="rounded-t-lg" src={electric} alt="" />
  
    <div className="p-2">
        
        <p className=" font-normal text-gray-700 dark:text-gray-400">A quality fence not only enhances property safety but also elevates your status. </p>
       
    </div>
</div>

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
 
        <img className="rounded-t-lg" src={chainlink3} alt="" />
    
    <div className="p-2">
        
        <p className=" font-normal text-gray-700 dark:text-gray-400">A chainlink fence enhances property safety and maximizes land value.</p>
       
    </div>
</div>

  </div>
  </div>
  )
}

export default Blog
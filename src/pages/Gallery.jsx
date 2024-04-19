import React from 'react';
import perif2 from "../assets/images/perimeter fencing 2 (2).jpg";
import perif from "../assets/images/sample perimeter fence.jpg";
import chain2 from "../assets/images/sample chainlink 2.jpg";
import wood from "../assets/images/sample wooden fence.jpeg";
import homef from "../assets/images/sample home fence.jpg";
import chain3 from "../assets/images/sample chainlink 3.jpg";
import chain4 from "../assets/images/sample chainlink 4.jpg";
import barb1 from "../assets/images/barb (1).jpg";


function Gallery() {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-0 md:pt-16 ">
        <nav className="flex mx-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a href="/" className="inline-flex items-center text-md font-semibold  text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
            <a href="/gallery" className="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Gallery</a>
          </div>
        </li>
        
      </ol>
    </nav>
<div className="border mt-4 mx-8"></div>
    <div className="md:mx-auto text-center max-w-3xl mt-4 mx-2 md:px-8 " data-wow-delay=".1s">
    <h2 className="mb-3 text-2xl font-bold !leading-tight text-black sm:text-4xl md:text-[35px] font-serif">
    Inspiring Fencing Projects
    </h2>
    <p className="text-md text-gray-700 md:text-lg font-serif">
    Explore our gallery of stunning fencing installations for inspiration and ideas.
    See how we&apos;ve transformed properties with our quality craftsmanship and innovative designs.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-10 md:mx-8 mx-2 md:mb-10">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={perif2} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={perif} alt="" />
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={chain2} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={wood} alt="" />
        </div>
       
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={homef} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={chain3} alt="" />
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={chain4} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={barb1} alt="" />
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={chain2} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={wood} alt="" />
        </div>
       
    </div>
    
</div>
    </section>
  )
}

export default Gallery
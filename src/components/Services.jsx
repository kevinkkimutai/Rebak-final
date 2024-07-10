import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import param from "../assets/services/perimeterfence.jpg";
import barbed from "../assets/services/barbedwire.jpg";
import wooden from "../assets/services/woodenfence.jpg";
import chainlink from "../assets/services/razor-chain.jpg";
import construct from "../assets/construct/gate2 (3).jpg";
import concrete from "../assets/concrete/concrete1.jpeg";


// JSON array with service data
const servicesData = [
    { id: 1, name: "Perimeter Fence", image: param },
    { id: 2, name: "Barbed Fence", image: barbed },
    { id: 3, name: "Concrete Fence", image: concrete },
    { id: 4, name: "Gate Fence", image: construct },
    { id: 5, name: "Wooden Fence", image: wooden },
    { id: 6, name: "Chainlink Fence", image: chainlink },
  ];

function Services() {
    const glideRef = useRef(null);

    useEffect(() => {
      const config = {
        type: 'carousel',
        startAt: 0,
        perView: 5,
        gap: 8,
        autoplay: 2000,
        hoverpause: true,
        breakpoints: {
          1240: { perView: 5 },
          1114: { perView: 4 },
          900: { perView: 3 },
          760: { perView: 2 },
        },
      };
  
      const glideInstance = new Glide(glideRef.current, config);
      glideInstance.mount();
  
      return () => {
        glideInstance.destroy();
      };
    }, []);
  return (
    <div className="contain mx-1 md:border-t md:border-body-color/[.15] mb-2">
  <div className="mx-auto mb-5 max-w-[810px] text-center lg:mb-5 md:mt-4">
            
            <h2 className="mb-2 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
            Our Fencing Services
            </h2>
          <p className="text-lg text-gray-700">Explore our range of expert fencing solutions designed to enhance your property&apos;s safety and aesthetics.</p>
            
          </div>

{/* glide */}
<div className="">
      
      <div
        ref={glideRef}
        className="glide md:px-16 overflow-hidden relative w-full"
      >
        <div className="glide__track h-full" data-glide-el="track">
          <ul className="glide__slides flex">
          {servicesData.map((service) => (
             
              <li className="glide__slide py-2" key={service.id}>
             
             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="rounded-t-lg"src={service.image} alt={service.name} />
                </a>
                <div className="p-1 text-center">
                    <p className="font-Bold font-serif text-2xl text-gray-700 dark:text-gray-400">{service.name}</p>
                </div>
            </div>
                  
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left"  aria-label="Previous" data-glide-dir="<">
            <svg className="w-8 t text-white rounded-lg  hover:bg-green-700 bg-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
            </svg>
            </button>
            <button className="glide__arrow glide__arrow--right"  aria-label="Next" data-glide-dir=">">
            <svg className="w-8 t text-white rounded-lg  hover:bg-green-700 bg-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>

            </button>
        </div>
      </div>
          
    </div>
  
  </div>
  )
}

export default Services
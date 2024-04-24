import React from "react";
import { Blog, Features } from "../components"

function ServicePage() {
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
            <a href="/services" className="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Services</a>
          </div>
        </li>
        
      </ol>
    </nav>
    <div className="border mt-4 mx-8"></div>
    <section className="relative z-10 py-16 md:py-10 mt-4  mx-4">
    <Features/>
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/shape.svg" alt="shape" className="w-full h-screen opacity-10 bg-transparent" />
      
        
      </div>
      
    </section>

    <section className="relative z-10 py-4 md:py-10 lg:py-10 bg-white">
    <Blog />
    <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/shape.svg" alt="shape" className="w-full opacity-5" />
      </div>
      </section>
    </div>
  )
}

export default ServicePage
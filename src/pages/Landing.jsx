import React from "react"
import { About, AboutTwo, Blog, Features } from "../components";
import Hero from "../components/hero/Hero";
import som from "../assets/4-2.jpg";
import chain1 from "../assets/chain1.png";


function Landing() {

  return (
    <>
      {/* <section
        id="home"
        className=" hero relative z-10 overflow-hidden pt-[120px] pb-1 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] h-screen"
      >
       <Hero />
       <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/shape.sg" alt="shape" className="w-full h-screen opacity-65 md:opacity-35 bg-gray-600" />
        
      </div>
      
      </section> */}
      <section
        id="home"
        className="relative hero z-10 overflow-hidden h-screen pt-[150px] md:pt-[50px] md:grid md:grid-cols-2"
      >
  
       <div className="absolute md:relative bottom-0 left-0 right-0 z-[-1]">
        <img src={som} alt="shape" className="w-full h-screen opacity-65 md:opacity-100 bg-gray-600" />
      </div>
      <div className="md:mt-30 md:my-28">
     <Hero />
     </div>
      </section>

      
    <section className="relative z-10 py-1 md:py-10 bg-white ">
        <About />
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src={chain1} alt="shape" className="w-full opacity-15" />
      </div>
    </section>

    <section className="relative z-10 py-16 md:py-10 lg:py-10 bg-gray-300">
    <Features/>
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/shape.svg" alt="shape" className="w-full h-screen opacity-10 bg-transparent" />
      
        
      </div>
      
    </section>

    <section className="relative z-10 py-16 md:py-10 lg:py-10 bg-white">
        <AboutTwo />
        <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/shape.svg" alt="shape" className="w-full opacity-10" />
      </div>
    </section>

    <section className="relative z-10 py-4 md:py-10 lg:py-10 bg-white">
    <Blog />
    <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/shape.svg" alt="shape" className="w-full opacity-5" />
      </div>
      </section>


    </>
  );
}

export default Landing;
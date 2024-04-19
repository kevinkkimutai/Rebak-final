import React from "react";
import fence from "../assets/fence.png";
const About = () => {
    const List = ({ text }) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
          <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-blue-500">
          <i className='bx bx-check-double text-green-400'></i>
          </span>
          {text}
        </p>
      );
  return (
    <div className=" md:mx-6 mx-2 md:border-t md:border-body-color/[.15]">

       <div className="mx-auto mb-5 max-w-[810px] text-center lg:mb-20 md:mt-4">
            
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
              Meet Rebak Solutions
              </h2>
            <p className="text-lg text-gray-700">Get to know Rebak—your fencing solution experts. Learn about our dedication to crafting custom fences for safety and style. Trust us for quality fencing in Kenya.</p>
              
            </div>
    <div className="border-b border-body-color/[.15] ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div className="w-full ">
             <div
    className="mx-auto "
    data-wow-delay=".1s"
  >
    <h2 className="mb-3 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[35px]">
    Crafting Custom Fencing Solutions
    </h2>
    <p className="text-base text-black md:text-lg">
    Rebak, your trusted source for top-quality fencing solutions in Kenya. 
    We specialize in crafting durable, customizable fences tailored to your needs. 
    Our expert team ensures professional installation for security, privacy, and aesthetic enhancement. 
    Trust us to safeguard your property with style and reliability.
    </p>
  </div>

          <div
            className="wow fadeInUp mb-1 mt-4 lg:mb-0"
            data-wow-delay=".15s"
          >
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="w-full px-3  text-black">
                <List text="Barbed Wire" />
                <List text="Chain-Links" />
                <List text="Wooden Fence" />
              </div>

              <div className="w-full px-3  text-black md:block hidden">
                <List text="Concrete chain-link fence" />
                <List text="Perimeter Fence" />
                <List text="Home Fence" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div 
            className="mb-10"
            data-wow-delay=".2s"
          >
            <img
               src={fence}
              alt="about-imae"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
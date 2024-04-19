import React from "react";
import paramfence from "../assets/images/perimeter fencing 2 (2).jpg";
import paramfence2 from "../assets/images/sample perimeter fence.jpg";
import chainlink2 from "../assets/images/sample chainlink 2.jpg";
import wooden1 from "../assets/images/sample wooden fence.jpeg";
import home1 from "../assets/images/sample home fence.jpg";
import chainlink3 from "../assets/images/sample chainlink 3.jpg";
import chainlink4 from "../assets/images/sample chainlink 4.jpg";
import barb1 from "../assets/images/barb (1).jpg"

const AboutTwo = () => {
  return (
    <section className=" mx-4 md:mb-4">
    <div className="w-full ">
            <div className="mx-auto mb-5 max-w-[810px] text-center lg:mb-10">
            
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
              Explore a showcase of craftsmanship
              </h2>
            <p className="text-lg text-gray-700">Discover our portfolio of stunning fencing projects. Explore a showcase of craftsmanship, design inspiration, and quality installations. Let our gallery inspire your next fencing solution.</p>
              
            </div>
          </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
          

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={paramfence} alt="one" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={paramfence2} alt="" />
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={chainlink2} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={wooden1} alt="" />
        </div>
       
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={home1} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={chainlink3} alt="" />
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={chainlink4} alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={barb1} alt="" />
        </div>
        
    </div>
</div>

          <div className="w-full px-4 ">
            <div className="w-full">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Quality Craftsmanship
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We take pride in our craftsmanship, ensuring each fence we install is built to last. 
                Our attention to detail and use of high-quality materials result in durable and aesthetically pleasing fences.
                </p>
              </div>
              <div className="mb-">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Customer Satisfaction
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Customer satisfaction is our top priority. We go above and beyond to ensure you are delighted with the final outcome. 
                Our commitment to excellence has earned us rave reviews from satisfied customers.
                </p>
              </div>
             
            </div>
          </div>
        </div>
  

   
    </section>
  );
};

export default AboutTwo;
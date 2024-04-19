import ContactDetails from "./ContactDetails";
import Map from "./Map";
import NewsLatterBox from "./NewsLatterBox";

function ContactPage() {
  return (
<div>
<section id="contact" className="overflow-hidden pt-16 md:py-0 md:pt-16 ">
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
            <a href="/contact" className="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Contact</a>
          </div>
        </li>
        
      </ol>
    </nav>
    <div className="border mt-4 mx-8"></div>
      <div className="containe mx-4 md:mx-8 mt-4">
        <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:mb-0 mb-4 lg:w-5/12 xl:w-4/12">
            <ContactDetails />
          </div>
          <div className="w-full lg:w-7/12 xl:w-8/12 mx-4 md:mx-0">
            <div
              className="mb-10 rounded-lg bg-gray-300 px-8 py-11 shadow-three  sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[38px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-2 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form className="w-full mx-auto pb-4 md:pb-2">
                <div className="grid grid-cols-2 gap-4">
  <div className="mb-5 ">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your fullName" required />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
  </div>
  </div>

  <div className="mb-5">
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
  <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message..."></textarea>
</div>

  <button type="submit" className="text-white bg-blue-700 float-right hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Ticket</button>
</form>
            </div>
          </div>
          
        </div>
      </div>
     
    </section>

<section id="contact" className="overflow-hidden md:mb-4 ">

      <div className="contain mx-4 md:mx-8 mb-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 mb-4 md:mb-0">
          <Map />
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
     
    </section>
    </div>
  );
}

export default ContactPage;

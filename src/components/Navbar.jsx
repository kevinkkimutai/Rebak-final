import { useState } from "react";


const Navbar = ({ handleLogout }) => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMenuItemClick = (item) => {
    // Add functionality for handling menu item clicks here
    console.log(`Clicked on ${item}`);
    // For example, you can add logic to navigate to different pages based on the item clicked
    // You can also add logout functionality or other actions here
    closeDropdown(); // Close the dropdown after an item is clicked
  };




  return (
  

<nav className="bg-green-700 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">

  <div className="max-w-screen flex flex-wrap items-center justify-between mx-aut p-2">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.jpg" className="h-8 w-8 rounded-xl" alt="Rebak Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white flex">Rebak <span className="hidden md:block ms-2"> Solutions</span></span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">

  <div className="hidden md:block">
  <ul className="ul1">
      <li className="mt- flex">
  <svg xmlns="http://www.w3.org/2000/svg" width="24"  viewBox="0 0 512 512" className="bx-tada">
    <path fill="orange" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/>
  </svg>
  <span className="ms-2 me-1 text-white font-serif font-semibold text-lg border-b-2 border-orange-400">+254 707 414 664</span>
</li> 
  <li><a href="https://web.facebook.com/people/Rebak-Fencing-Solutions/100087678855591/" className="bg-blue-700"><i className="fab fa-facebook-f icon"></i></a></li>
  <li><a href="https://www.instagram.com/rebak_fencing_solutions/" className="bg-pink-900"> <i className="fa-brands fa-tiktok icon"></i></a></li> 
  <li><a href="https://api.whatsapp.com/send/?phone=254707414664" className="bg-green-500"><i className='fa-brands fa-whatsapp  font-bold icon'></i></a></li>
  <li><a href="https://twitter.com/FencingRebak" className="bg-black"><i className="fa-brands fa-x-twitter icon"></i></a></li> 
</ul>
  </div>
      <button onClick={toggleDropdown} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400  dark:focus:ring-gray-600">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={` ${isDropdownOpen ? '' : 'hidden'} items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-700" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="/services" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
      </li>
      <li>
        <a href="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
      <ul className="ul1 justify-center flex mx-auto mt-5 bg-green-600 w-full p-2 rounded md:hidden">
  <li><a href="https://web.facebook.com/people/Rebak-Fencing-Solutions/100087678855591/" className="bg-blue-700"><i className="fab fa-facebook-f icon"></i></a></li>
  <li><a href="https://www.instagram.com/rebak_fencing_solutions/" className="bg-pink-900"> <i className="fa-brands fa-tiktok icon"></i></a></li> 
  <li><a href="https://api.whatsapp.com/send/?phone=254707414664" className="bg-green-500"><i className='fa-brands fa-whatsapp  font-bold icon'></i></a></li>
  <li><a href="https://twitter.com/FencingRebak" className="bg-black"><i className="fa-brands fa-x-twitter icon"></i></a></li> 
</ul>
    </ul>
   
  </div>
  </div>
</nav>


  );
};

export default Navbar;
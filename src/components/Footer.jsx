

const Footer = () => {
  return (
   

<div className="relative  ">
    <footer className="bg-green-800 ">
    <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
  
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.jpg" className="h-8 rounded-xl" alt="Rebak Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hite">Rebak Fencing Solutions</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0  justify-center">
                <li>
                    <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/gallery" className="hover:underline me-4 md:me-6">Gallery</a>
                </li>
                <li>
                    <a href="/chainlink" className="hover:underline me-4 md:me-6">Services</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contact</a>
                </li>
            </ul>
            
        </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between mx-auto text-center">
          <span className="text-sm text-gray-100 sm:text-center ">© 2024 <a href="/" className="hover:underline">Rebak Fencing Solutions™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 ">
            <ul className="ul1  sm:justify-center flex mx-auto">
  <li><a href="https://web.facebook.com/people/Rebak-Fencing-Solutions/100087678855591/" className="bg-blue-700"><i className="fab fa-facebook-f icon"></i></a></li>
  <li><a href="https://www.instagram.com/rebak_fencing_solutions/" className="bg-pink-900"> <i className="fa-brands fa-tiktok icon"></i></a></li> 
  <li><a href="https://api.whatsapp.com/send/?phone=254707414664" className="bg-green-500"><i className='fa-brands fa-whatsapp  font-bold icon'></i></a></li>
  <li><a href="https://twitter.com/FencingRebak" className="bg-black"><i className="fa-brands fa-x-twitter icon"></i></a></li> 
</ul>
          </div>
      </div>
    </div>
    
</footer>

</div>

  )
}
export default Footer;

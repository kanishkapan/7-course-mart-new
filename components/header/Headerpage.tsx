import React from 'react';


const Headerpage = () => {
  return (
    <header className="relative w-full h-screen text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="./images/placeholder.jpg" // Replace this with your image path
          alt="Store Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Navigation Bar */}
      <div className="relative z-10 flex justify-between items-center px-6 sm:px-10 py-4 sm:py-6 bg-transparent">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <img
            src="./images/logo-removebg-preview.png" // Replace this with your logo path
            alt="Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-cover filter brightness-75 contrast-125"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wider drop-shadow-lg">
            7 Course Mart
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-6 md:space-x-10">
          <a href="/" className="hover:underline font-bold tracking-wide">
            About
          </a>
          <a href="#product" className="hover:underline font-bold tracking-wide">
            Product
          </a>
          <a href="#brands" className="hover:underline font-bold tracking-wide">
            Brands
          </a>
          <a href="/lml" className="hover:underline font-bold tracking-wide">
            Franchise
          </a>
          <a href="#contact" className="hover:underline font-bold tracking-wide">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 sm:px-10 md:px-20 text-left">
        <h2 className="text-4xl sm:text-5xl md:text-7xl  leading-tight font-extrabold font-Michroma tracking-tight mb-4 sm:mb-6 drop-shadow-lg">
        Find Us at 7 Course Mart -  <br /> Your Go-To Destination! 
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-2xl font-light tracking-wide drop-shadow-lg">
        We're open every day from [Opening Hours], <br className="hidden sm:block" />
        making it easy for you to drop by anytime 
        
        </p>
      </div>
    </header>
  );
};

export default Headerpage;

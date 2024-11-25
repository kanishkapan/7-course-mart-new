import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75"
        style={{
          backgroundImage:
            "url('G:/IET DAVV/hackethon/7-course-mart-new/public/Images/Images/IMG_20241119_173733.jpg')",
        }}
      ></div>

      {/* Navigation Bar */}
      <div className="relative z-10 flex justify-between items-center px-6 sm:px-10 py-4 sm:py-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full" /> {/* Logo placeholder */}
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wider">
            7 Course Mart
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-6 md:space-x-10">
          <a href="#about" className="hover:underline font-bold tracking-wide">
            About
          </a>
          <a href="/gfg" className="hover:underline font-bold tracking-wide">
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
        <h2 className="text-4xl sm:text-5xl md:text-7xl leading-tight font-extrabold font-Michroma tracking-tight mb-4 sm:mb-6">
          If it's not Unique <br /> it's not here!!!
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-2xl font-light tracking-wide">
          7 Course Mart brings you exclusive international beverages <br className="hidden sm:block" />
          and packaged foods, now available in India for the first time!
        </p>
      </div>
    </header>
  );
};

export default Header;

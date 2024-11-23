import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full h-screen text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Background Image */}
      <img
        src="./images/placeholder.jpg"
        alt="Store Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Navigation Bar */}
      <div className="flex justify-between items-center px-10 py-6 bg-transparent z-10">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="./images/logo-removebg-preview.png" // Replace this URL with your logo image URL
            alt="Logo"
            className="w-10 h-10 object-cover filter brightness-75 contrast-125"
          />
          <h1 className="text-2xl font-extrabold drop-shadow-lg tracking-wider">7 Course Mart</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-14">
          <div className="flex space-x-14">
            <a href="#about" className="hover:underline font-bold tracking-wide drop-shadow-lg">About</a>
            <a href="#product" className="hover:underline font-bold tracking-wide drop-shadow-lg">Product</a>
          </div>
          <div className="flex ml-4 space-x-14">
            <a href="#brands" className="hover:underline font-bold tracking-wide drop-shadow-lg">Brands</a>
            <a href="#franchise" className="hover:underline font-bold tracking-wide drop-shadow-lg">Franchise</a>
            <a href="#contact" className="hover:underline font-bold tracking-wide drop-shadow-lg">Contact</a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start justify-center h-full px-10 md:px-20 text-left z-10">
        <h2 className="text-5xl sm:text-7xl font-extrabold leading-tight drop-shadow-2xl tracking-tight mb-6 font-michroma">
          If it's not Unique <br /> it's not here!!!
        </h2>
        <p className="mt-6 text-lg sm:text-3xl font-thin drop-shadow-lg tracking-wide font-michroma">
          7 Course Mart brings you exclusive international beverages <br />
          and packaged foods, now available in India for the first time!
        </p>
      </div>
    </header>
  );
};

export default Header;
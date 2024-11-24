import React from "react";

const Middle = () => {
  return (
    <div className="relative bg-white h-screen flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        src="./Images/image-removebg-preview (1).png" // Update path as per your project folder
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Main Content - Text shifted to the left */}
      <div className="absolute left-20 z-10 px-4 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-black font-serif mb-4">
          Be Your Own Boss
          <br />
          With 7 Course Mart!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Partner with us and enjoy unmatched guidance, marketing support, and
          access to a loyal customer base.
          <br />
          Start your journey now!
        </p>
      </div>

      {/* Instagram Logo at the right */}
      <div className="absolute right-15 top-1/2 transform -translate-y-1/2 z-10">
        <img
          src="./images/images/IMG_20241119_175952" // Ensure this path is correct for your project
          alt="Instagram Logo"
          className="h-[300px]"
        />
        <p className="text-center text-lg font-bold text-black mt-2">
          Instagram
        </p>
      </div>
    </div>
  );
};

export default Middle;
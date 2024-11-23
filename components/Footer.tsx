import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">If you have any question, Let us help you!</h2>
          <p className="text-gray-400 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="mt-6">
            {/* Add a reference image */}
            <Image
              src="/bottles.jpg" // Replace this with the actual image in your public folder
              alt="Bottles"
              width={200}
              height={150}
              className="rounded"
            />
          </div>
          <p className="text-gray-500 mt-4">Copyright Tanah Air Studio</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">7 Course Mart</h2>
          <p className="text-gray-400 mb-4">
            We're open every day from [Opening Hours], making it easy for you to drop by anytime!
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
          </div>

          <div className="text-gray-400">
            <p>Ground floor - S-1, Samridhi Elite 1 Ariha enclave,</p>
            <p>Alka Puri, Tejpur Gadbadi, Indore, Madhya Pradesh 452012</p>
            <p className="mt-4">Scheme Number 78, Aranya Nagar, Scheme 78, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

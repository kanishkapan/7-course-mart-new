import React from 'react';
// import quote from '@/images/images-removebg-preview (2).png/'
const ProfileShowcase = () => {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        {/* Header Section with quote images */}
        <div className="flex items-center justify-center mb-16 gap-4">
          <img 
            src="/quote.png"
            alt="Opening quote"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-normal" style={{ fontFamily: 'Microma, sans-serif' }}>
            Your Words, Our Hype!
          </h1>
          <img 
            src="/quote.png"
            alt="Closing quote"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large Left Image */}
          <div className="col-span-12 md:col-span-4 row-span-2">
            <div className="rounded-lg overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Profile 1"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Top Right Images */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Profile 2"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Profile 3"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="col-span-12 md:col-span-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Profile 4"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-8 text-center">
          <button 
            className="inline-flex items-center justify-center space-x-2 bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Microma, sans-serif' }}
          >
            <span className="font-semibold">Join our community</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileShowcase;

// Add this to your global CSS or page
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Microma&display=swap');
`;
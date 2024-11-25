import React from 'react';

const Video = () => {
  return (
    <main className="relative w-full text-white overflow-hidden">
      {/* Aspect Ratio Wrapper */}
      <div className="relative  w-full" style={{ paddingTop: '100.25%' }}>
        {/* Video Element */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./images/7 course mart Banner F1.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
    </main>
  );
};

export default Video;

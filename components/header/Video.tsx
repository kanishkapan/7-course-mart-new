import React from 'react';

const Video   = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video 
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="./images/7 course mart Banner F1.mp4" type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </main>
  );
};

export default Video;
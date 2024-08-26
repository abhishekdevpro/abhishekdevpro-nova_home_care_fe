import React from 'react';
import { FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gray-100">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://wedesignthemes.s3.amazonaws.com/thatha/Slider+VDO+02+HD.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end">
        <div className="max-w-full px-6 lg:px-8">
          <div className="text-white lg:w-1/2">
            <h2 className="text-sm text-teal-400 font-semibold tracking-wide uppercase">Welcome To Nova Home Care</h2>
            <h1 className="mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Memories Blossom And</span>
              <span className="block text-teal-400">Hearts Flourish</span>
            </h1>
            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:justify-start">
              <div className="rounded-md bg-white bg-opacity-20 p-4">
                <h3 className="text-lg font-medium">Our Mission</h3>
                <p className="mt-2 text-base">
                  To provide compassionate, respectful care that enriches lives and fosters independence.
                </p>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md bg-white bg-opacity-20 p-4">
                <h3 className="text-lg font-medium">Our Vision</h3>
                <p className="mt-2 text-base">
                  To be a leading homecare provider, known for quality, personalized care, and innovative solutions.
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
              >
                <FaPlay className="mr-2" /> Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

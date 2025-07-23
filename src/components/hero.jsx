import React, { useState } from "react";
import bg from "../assets/bg.svg";
import bird from "../assets/bird.svg";
import hoverBird from "../assets/hoverBird.svg";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-30 flex items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300">
        {/* Left Content */}
        <div
          className={`flex flex-col items-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl transform transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              CREATIVE
            </h1>
            <p className="text-gray-300 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl italic font-light mt-1 sm:mt-2">
              SUCCESS
            </p>
          </div>

          {/* Play Button */}
          {!isHovered && (
            <button className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 border border-purple-400 rounded-md text-white text-sm sm:text-base md:text-lg font-medium hover:bg-purple-700 transition mb-4 sm:mb-6 md:mb-8">
              <span className="bg-purple-600 rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <polygon points="6,4 16,10 6,16" />
                </svg>
              </span>
              Play now
            </button>
          )}

          <p className="text-white text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm">
            Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.
          </p>
        </div>

        {/* Bird with hover */}
        <div className="hidden xl:flex xl:flex-1 xl:justify-center xl:items-center">
          <img
            src={isHovered ? hoverBird : bird}
            alt="Bird"
            className="w-[35vw] mr-100 max-w-lg xl:max-w-xl 2xl:max-w-2xl z-20 opacity-100 transition-transform duration-300 hover:scale-130"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>

      {/* Bottom right text */}
      <div
        className={`absolute bottom-6 sm:bottom-8 md:bottom-12 right-4 sm:right-6 md:right-8 lg:right-12 text-right z-30 transform transition-transform duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      >
        <p className="text-purple-400 text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl italic font-light">
          SUCCESS
        </p>
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          CREATIVE
        </h2>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import bg from "../assets/bg.svg";
import bird from "../assets/bird.svg";
import hoverBird from "../assets/hoverBird.svg";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
<div
  className={`absolute inset-0 w-full h-full z-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
    isHovered ? "opacity-50 translate-y-[-40px]" : "opacity-100 translate-y-0"
  }`}
  style={{ backgroundImage: `url(${bg})` }}
/>


      {/* Main Content Wrapper */}
      <div className="relative z-30 flex flex-col xl:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-12 gap-10 xl:gap-0 transition-all duration-700 ease-in-out">
        {/* Left Content */}
        <div
          className={`flex flex-col items-center xl:items-start text-center xl:text-left transform transition-transform duration-700 ease-in-out ${
            isHovered
              ? "scale-90 xl:translate-x-[-30px] xl:translate-y-[20px]"
              : "scale-100 translate-x-0 translate-y-0"
          } max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl`}
        >
          <div className="mb-4 sm:mb-6 md:mb-8">
            <p className="text-purple-400 text-3xl sm:text-4xl md:text-6xl lg:text-7xl italic font-light">
              CREATIVE
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              SUCCESS
            </h2>
          </div>

          <button
            className={`flex items-center gap-3 px-6 py-3 border bg-black/20 border-purple-400 rounded-md text-white text-base md:text-lg font-medium
              hover:bg-gradient-to-r hover:from-rose-100 hover:to-purple-900 hover:text-black
              transition-all duration-700 ease-in-out mb-6 transform ${
                isHovered ? "scale-90" : "scale-100"
              }`}
          >
            Play now
          </button>

          <p className="text-white text-sm sm:text-base max-w-xs sm:max-w-sm">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated to every trader at every level.
          </p>
        </div>

        {/* Bird Image */}
        <div
          className="flex justify-center items-center xl:flex-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? hoverBird : bird}
            alt="Bird"
            className={`w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] xl:w-[40vw] max-w-[650px] transition-transform duration-700 ease-in-out ${
              isHovered ? "scale-125" : "scale-100"
            }`}
          />
        </div>

        {/* Bottom/Right Text (stacked below bird on mobile) */}
        <div
          className={`text-center xl:text-right transform transition-transform duration-700 ease-in-out ${
            isHovered
              ? "scale-90 xl:translate-x-[30px] xl:translate-y-[20px]"
              : "scale-100 translate-x-0 translate-y-0"
          }`}
        >
          <p className="text-purple-400 text-3xl sm:text-4xl md:text-6xl lg:text-7xl italic font-light">
            SUCCESS
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
            CREATIVE
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

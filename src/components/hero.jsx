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
        className={`absolute inset-0 w-full h-full z-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-20" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-30 flex items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-700 ease-in-out">
        {/* Left Content */}
        <div
          className={`flex flex-col items-start transform transition-transform duration-700 ease-in-out ${
            isHovered
              ? "scale-90 translate-x-[-30px] translate-y-[20px]"
              : "scale-100 translate-x-0 translate-y-0"
          } max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl`}
        >
          <div className="mb-4 sm:mb-6 md:mb-8 transition-all duration-700 ease-in-out">
            <p className="text-purple-400 text-2xl sm:text-3xl md:text-5xl lg:text-8xl xl:text-7xl italic font-light transition-all duration-700 ease-in-out">
              CREATIVE
            </p>
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-700 ease-in-out">
              SUCCESS
            </h2>
          </div>

          <button
            className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 border bg-black/20 border-purple-400 rounded-md text-white text-sm sm:text-base md:text-lg font-medium
  hover:bg-gradient-to-r hover:from-rose-100 hover:to-purple-900 hover:text-black
  transition-all duration-700 ease-in-out mb-4 sm:mb-6 md:mb-8 transform ${
    isHovered ? "scale-90" : "scale-100"
  }`}
          >
            Play now
          </button>

          <p className="text-white text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm transition-all duration-700 ease-in-out">
            Buy, sell, and grow your crypto with CoinFlip, the platform
            dedicated to every trader at every level.
          </p>
        </div>

        {/* Bird Image */}
        <div className="hidden xl:flex mr-90 mt-10 xl:flex-1 xl:justify-center xl:items-center">
          <img
            src={isHovered ? hoverBird : bird}
            alt="Bird"
            className={`w-[35vw] max-w-lg xl:max-w-xl 2xl:max-w-2xl z-20 opacity-100 transform transition-transform duration-700 ease-in-out ${
              isHovered ? "scale-125" : "scale-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>

      {/* Bottom Right Text */}
      <div
        className={`absolute bottom-6 sm:bottom-8 md:bottom-12 right-4 sm:right-6 md:right-8 lg:right-12 text-right z-30 transform transition-transform duration-700 ease-in-out ${
          isHovered
            ? "scale-90 translate-x-[30px] translate-y-[20px]"
            : "scale-100 translate-x-0 translate-y-0"
        }`}
      >
        <p className="text-purple-400 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl italic font-light transition-all duration-700 ease-in-out">
          SUCCESS
        </p>
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-700 ease-in-out">
          CREATIVE
        </h2>
      </div>
    </section>
  );
};

export default Hero;

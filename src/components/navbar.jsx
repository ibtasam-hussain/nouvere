import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "top-0 w-full rounded-none bg-black/80 backdrop-blur-sm"
          : "top-[10px] left-1/2 -translate-x-1/2 w-[calc(100%-20px)] max-w-7xl rounded-xl bg-black/60 backdrop-blur-sm"
      }`}
    >
      <nav className="flex h-20 items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Nouvera Logo"
            width={50}
            height={50}
            className="h-24 w-40"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
          >
              Join Us
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
          >
            Speakers
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
          >
            Sponsors
          </a>
          <a
            href="#"
            className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
          >
            Gallery
          </a>
        </div>

        {/* Contact Us Button */}
        <button className="hidden md:block bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
          Contact Us
        </button>

        {/* Mobile Menu Toggle Placeholder */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
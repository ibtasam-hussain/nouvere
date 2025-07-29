import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { ChevronRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-sm ${
        scrolled ? "bg-black/80" : "bg-black/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Nouvere Logo"
            className="h-10 w-auto"
          />
         
        </div>

        {/* Center: Navigation Links with rounded background */}
        <div className="hidden md:flex items-center gap-6 bg-black/40 border border-white/20 px-6 py-2 rounded-full">
          {["Home", "Works", "Studio", "News"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-sm font-medium hover:text-purple-400 transition-colors"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Right: Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-white text-black font-medium text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-900 hover:text-white transition-all duration-300">
            Start Project <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Icon */}
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
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

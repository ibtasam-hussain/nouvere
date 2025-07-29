"use client";

import { isPrimaryPointer } from "framer-motion";
import { Check, X } from "lucide-react";
import React, { useState } from "react";

export default function PackagesSection() {
  const [isOpen, setIsOpen] = useState(false);

const packages = [
  {
    title: "Launch",
    description:
      "Our launch package is perfect for brands looking to make a significant impact with a smaller investment. Ideal for those just getting started or testing new strategies.",
    price: "$6,300",
    features: ["12 video ads", "12 video ads", "12 video ads", "12 video ads", "12 video ads", "12 video ads"],
    isPopular: false,
  },
  {
    title: "Accelerate",
    description:
      "Our launch package is perfect for brands looking to make a significant impact with a smaller investment. Ideal for those just getting started or testing new strategies.",
    price: "$6,300",
    features: ["12 video ads", "12 video ads", "12 video ads", "12 video ads", "12 video ads", "12 video ads"],
    isPopular: true,
  },
  {
    title: "Dominate",
    description:
      "Our launch package is perfect for brands looking to make a significant impact with a smaller investment. Ideal for those just getting started or testing new strategies.",
    price: "$6,300",
    features: ["12 video ads", "12 video ads", "12 video ads", "12 video ads", "12 video ads", "12 video ads"],
    isPopular: false,
  },
];


  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 md:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
  <div>
    <button className="text-xs px-4 py-1 border border-[#ffffff30] text-white rounded-full mb-4 hover:bg-white hover:text-black transition-all">
      ← OUR PACKAGES
    </button>
    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold max-w-xl">
      Our user-centered design encourages{" "}
      <span className="text-white/60 font-normal">productivity</span>{" "}
      & <span className="text-green-400 font-normal">boosts revenue</span>.
    </h2>
  </div>
</div>


        {/* Packages Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {packages.map((pkg, index) => (
    <div
      key={index}
      className={`relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl border ${
        pkg.isPopular
          ? "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 border-purple-500"
          : "bg-black/30 border-white/10"
      }`}
    >
      {/* Popular Badge */}
      {pkg.isPopular && (
        <span className="absolute top-4 right-4 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold">
          POPULAR
        </span>
      )}

      <div className="space-y-4">
        <h3 className="text-xl text-white font-semibold">{pkg.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{pkg.description}</p>

        <h4 className="text-4xl text-purple-300 font-bold pt-2">{pkg.price}</h4>

        <ul className="space-y-2 pt-2">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
              <Check className="w-4 h-4 text-purple-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`mt-6 text-sm w-full px-4 py-3 rounded-full font-medium transition-all ${
          pkg.isPopular
            ? "bg-white text-black hover:bg-white/80"
            : "bg-black border border-white text-white hover:bg-white hover:text-black"
        }`}
      >
        Schedule a Consultation
      </button>
    </div>
  ))}
</div>

      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-purple-900 to-black p-6 sm:p-8 w-[90%] max-w-md rounded-2xl border border-purple-400 shadow-2xl text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-pink-400 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Get a Quote</h3>
            <form className="space-y-4">
              {/* Select Package Dropdown */}
              <div>
                <label
                  htmlFor="package"
                  className="block mb-1 text-sm font-medium text-gray-300"
                >
                  Select Package
                </label>
                <select
                  id="package"
                  name="package"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a package
                  </option>
                  {packages.map((pkg, i) => (
                    <option key={i} value={pkg.title}>
                      {pkg.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name Input */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Message Area */}
              <textarea
                placeholder="Tell us about your needs..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import { Check, X } from "lucide-react";
import React, { useState } from "react";

export default function PackagesSection() {
  const [isOpen, setIsOpen] = useState(false);

  const packages = [
    {
      title: "VISIBILITY BOOST PACKAGE",
      description:
        "Ideal for sponsors seeking brand exposure and audience engagement.",
      features: [
        "Prime Viewing Time Arrangement – your brand featured in high-traffic slots",
        "Public Relations Outreach – gain positive media coverage through our PR network",
        "Brand Shout-Outs – across our channels and partner networks",
      ],
      buttonText: "Get a Quote",
    },
    {
      title: "PREMIUM PARTNERSHIP PACKAGE",
      description:
        "Designed for brands seeking maximum reach and growth, with measurable ROI over a 3-month campaign.",
      features: [
        "All benefits of Package 1 and Package 2",
        "Complete digital marketing strategy & execution for 3 months",
        "Production and distribution across all digital platforms (Facebook, Instagram, YouTube, TikTok, and more)",
        "Ongoing performance tracking and monthly reporting",
        "Website Development – design and develop a custom website aligned with your brand goals",
      ],
      buttonText: "Get a Quote",
    },
    {
      title: "BRAND BUILDER PACKAGE",
      description:
        "Ideal for who want a consistent, high-quality content rollout to drive deeper engagement.",
      features: [
        "One professionally produced advertisement",
        "Two engaging social media reels",
        "Ten curated social media posts",
        "Behind-the-Scenes (BTS) video coverage",
      ],
      buttonText: "Get a Quote",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-16 px-4 sm:px-6 md:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            OUR PACKAGES
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative group transition-all duration-500 ease-in-out bg-gray-900/50 hover:bg-gradient-to-br hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 hover:scale-[1.02] backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Card Content */}
              <div className="flex-1 space-y-5">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {pkg.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {pkg.buttonText}
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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

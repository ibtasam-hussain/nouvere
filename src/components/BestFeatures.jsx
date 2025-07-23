"use client";

import { Monitor, Palette, Presentation, FileText } from "lucide-react";
import { useState } from "react";

export default function BestFeatures() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Monitor,
      title: "Web & Mobile Design",
      description: "Tempore corrupti temporibus fuga earum asperiores fugit.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Presentation,
      title: "Social Media Marketing",
      description: "Tempore corrupti temporibus fuga earum asperiores fugit.",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: FileText,
      title: "Document Legal Policy",
      description: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20 fade-in-up delay-200">
          <p className="text-gray-400 text-sm font-medium tracking-[0.2em] uppercase mb-6">
            BEST FEATURES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">
            We are a new digital product<br />
            development agency
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex items-start space-x-6 hover:bg-gray-800/30 transition-all duration-500 rounded-xl p-6 -m-6 cursor-pointer border border-transparent hover:border-gray-700/50 fade-in-up"
                style={{ animationDelay: `${600 + index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                    {hoveredCard === index && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-lg opacity-20 blur-sm`}
                      ></div>
                    )}
                    <Icon
                      className="w-8 h-8 text-white group-hover:text-cyan-300 transition-colors duration-300 relative z-10"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

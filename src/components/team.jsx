import React, { useState } from "react";

const OurTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Marcus Chen",
      position: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Ryan Hicks",
      position: "Client Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Miller",
      position: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Emily Davis",
      position: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "John Smith",
      position: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Emily Davis",
      position: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "John Smith",
      position: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-xs font-medium tracking-[0.2em] uppercase mb-8">
            OUR TEAM
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              An original team of creators
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              designers
            </span>
            <span className="text-pink-400"> & </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              dreamers.
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-none aspect-[3/4] bg-white">
                {/* Image */}
             <img
  src={member.image}
  alt={member.name}
  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
/>


                {/* Hover Overlay - Only for hovered card */}
                {hoveredMember === member.id && (
                  <>
                    {/* Blue accent border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />

                    {/* Pink accent line */}
                    <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-pink-500 to-red-400" />

                    {/* Name and Position */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-300">{member.position}</p>
                    </div>

                    {/* Spinning Circle - Top Right */}
                    <div className="absolute top-6 right-6">
                      <div className="relative w-20 h-20">
                        {/* Spinning outer circle */}
                        <div className="absolute inset-0 animate-spin-slow">
                          <svg className="w-20 h-20" viewBox="0 0 80 80">
                            <defs>
                              <path
                                id={`circle-${member.id}`}
                                d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                                fill="none"
                              />
                            </defs>
                            <text className="text-[15px] fill-white font-medium">
                              <textPath
                                href={`#circle-${member.id}`}
                                startOffset="0%"
                              >
                                {member.position}
                              </textPath>
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurTeam;

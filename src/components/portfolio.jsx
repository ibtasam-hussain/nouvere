import React from "react";
import PortfolioImage from "../assets/bg.avif";

const projects = [
  {
    title: "Creative Project 1",
    image: PortfolioImage,
    tags: ["React", "Tailwind", "UI/UX"],
  },
  {
    title: "Creative Project 2",
    image: PortfolioImage,
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "Creative Project 3",
    image: PortfolioImage,
    tags: ["Node.js", "MongoDB", "Express"],
  },
  {
     title: "Creative Project 4",
    image: PortfolioImage,
    tags: ["Node.js", "MongoDB", "Express"],
  }
];

export default function ProjectSection() {
  return (
    <section className="py-12  text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Our Projects
        </h2>

        <div className="space-y-2">
        
          {projects.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center  rounded-xl gap-2 group transition-all duration-700 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-1/2  rounded-xl h-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover shadow-xl transition-transform"
                />
              </div>

{/* TEXT SIDE */}
<div className="w-full lg:w-1/2 h-110 flex flex-col justify-between items-end text-right p-6  rounded-xl border border-purple-700 shadow-md backdrop-blur-lg">
  
  {/* Heading at top */}
  <h3 className="text-white text-2xl font-normal mb-4 leading-snug">
    Archin Architecture<br />Studio
  </h3>

  {/* Bottom content */}
  <div>
    <p className="text-gray-400 text-xs max-w-sm mb-6">
      This paragraph is short description to describe about this<br />
      project, you can use it to improve SEO or highlight some key<br />
      result of this project
    </p>
    
    <div className="flex gap-2 justify-end">
      <span className="px-3 py-1 text-xs text-white border border-white/20 bg-white/5 rounded-full">
        Mobile Responsive
      </span>
      <span className="px-3 py-1 text-xs text-white border border-white/20 bg-white/5 rounded-full">
        UX Design
      </span>
    </div>
  </div>
</div>




            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

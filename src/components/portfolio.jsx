import React from "react";
import PortfolioImage from "../assets/bg.avif";
import Bg from "../assets/ourservicesBG.svg";

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
    <section
  className="w-full min-h-screen py-12 text-white bg-no-repeat bg-center bg-cover"
  style={{
    backgroundImage: `url(${Bg})`,
  }}
>
      <div className="container mx-auto px-4">
               <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
   <button className="text-lg px-5 py-2 border border-purple-500 text-white rounded-full font-medium flex items-center gap-2">
            <span className="text-purple-400 font-semibold text-2xl ">◂</span>{" "}
            <span className="italic">FEATURED WORK</span>
          </button>

          <div className="text-right max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
              Our user-centered design encourages <br />
              <span className="text-white/60 font-normal">productivity &amp; boosts revenue.</span>
            </h2>
          </div>
        </div>

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

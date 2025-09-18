import React from "react";
import PortfolioImage from "../assets/web1.jpg";
import PortfolioImage2 from "../assets/web2.jpg";

import Bg from "../assets/OSbg.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProjectSection({ showAll = false }) {
  const projects = [
    {
      title: "Creative Project 1",
      image: PortfolioImage,
      tags: ["React", "Tailwind", "UI/UX"],
    },
    {
      title: "Creative Project 2",
      image: PortfolioImage2,
      tags: ["Node.js", "MongoDB", "Express"],
    },
    {
      title: "Creative Project 3",
      image: PortfolioImage,
      tags: ["Node.js", "MongoDB", "Express"],
    },
    // // {
    // //   title: "Creative Project 4",
    // //   image: PortfolioImage,
    // //   tags: ["Node.js", "MongoDB", "Express"],
    // // },
    // // {
    // //   title: "Creative Project 5",
    // //   image: PortfolioImage,
    // //   tags: ["Next.js", "Framer", "Animations"],
    // // },
    // // {
    // //   title: "Creative Project 6",
    // //   image: PortfolioImage,
    // //   tags: ["Figma", "Design System"],
    // },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2); // 👈 show only 2 unless showAll is true

  return (
    <section
      className="w-full min-h-screen py-12 text-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
          <button className="text-lg px-5 py-2 border border-purple-500 text-white rounded-full font-medium flex items-center gap-2">
            <span className="text-purple-400 font-semibold text-2xl ">◂</span>{" "}
            <span className="italic">Want a sneak peek?</span>
          </button>

          <div className="text-right max-w-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
              <span className="text-white/60 font-normal">
                See how our user-centric design and development solutions have
                changed the game for brands and enterprises.
              </span>
            </h2>
          </div>
        </div>

        <div className="space-y-2">
          {visibleProjects.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center rounded-xl gap-2 group transition-all duration-700 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-1/2 rounded-xl h-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover shadow-xl transition-transform"
                />
              </div>

              {/* TEXT SIDE */}
              <div className="w-full lg:w-1/2 h-110 flex flex-col justify-between items-end text-right p-6 rounded-xl border border-purple-700 shadow-md backdrop-blur-lg">
                <h3 className="text-white text-2xl font-normal mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs max-w-sm mb-6">
                  This is a short description to describe this project. Use this
                  to highlight key features or impact.
                </p>
                <div className="flex gap-2 justify-end">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs text-white border border-white/20 bg-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* {!showAll && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/portfolio"
              className="px-6 py-3 border border-gray-600 text-gray-300 text-sm font-medium rounded-full hover:border-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              View More
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        )} */}
      </div>
    </section>
  );
}

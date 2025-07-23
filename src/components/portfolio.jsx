"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PortfolioItem from "../assets/bg.svg"

const portfolioItems = [
  {
    id: 1,
    title: "Creativity Demand",
    category: ["branding", "creative"],
    tags: ["DESIGN", "WORDPRESS"],
    image: PortfolioItem
  },
  {
    id: 2,
    title: "Through The Breaking",
    category: ["mobile-app", "creative"],
    tags: ["DESIGN", "WORDPRESS"],
    image: PortfolioItem,
  },
  {
    id: 3,
    title: "Create With Creatives",
    category: ["creative", "branding"],
    tags: ["DESIGN", "WORDPRESS"],
    image:PortfolioItem
  },
  {
    id: 4,
    title: "Digital Innovation",
    category: ["mobile-app", "branding"],
    tags: ["DESIGN", "REACT"],
    image:PortfolioItem
  },
  {
    id: 5,
    title: "Brand Identity Pro",
    category: ["branding"],
    tags: ["BRANDING", "LOGO"],
    image: PortfolioItem
  },
  {
    id: 6,
    title: "Mobile Experience",
    category: ["mobile-app"],
    tags: ["UI/UX", "MOBILE"],
    image: PortfolioItem
  },
  {
    id: 7,
    title: "Creative Studio",
    category: ["creative", "branding"],
    tags: ["DESIGN", "CREATIVE"],
    image: PortfolioItem
  },
  {
    id: 8,
    title: "Tech Solutions",
    category: ["mobile-app", "creative"],
    tags: ["DEVELOPMENT", "TECH"],
    image:PortfolioItem
  },
  {
    id: 9,
    title: "Brand Identity Pro",
    category: ["branding"],
    tags: ["BRANDING", "LOGO"],
    image: PortfolioItem
  }
]

const filterOptions = [
  { label: "ALL", value: "all" },
  { label: "BRANDING", value: "branding" },
  { label: "MOBILE APP", value: "mobile-app" },
  { label: "CREATIVE", value: "creative" },
]

export default function PortfolioSection({ showAll = false }) {
  const [activeFilter, setActiveFilter] = useState("all")
 const navigate = useNavigate()


  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === "all" || item.category.includes(activeFilter)
  )

  const displayItems = showAll ? filteredItems : filteredItems.slice(0, 3)

  return (
    <section className="bg-gray-900 py-20 px-4 min-h-screen">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm font-medium tracking-[0.2em] mb-6">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            <span className="text-blue-400">Our Recent </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Web Design &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Some Past Projects.
            </span>
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-16">
          <nav className="flex items-center space-x-8">
            {filterOptions.map((option, index) => (
              <div key={option.value} className="flex items-center">
                <button
                  onClick={() => setActiveFilter(option.value)}
                  className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                    activeFilter === option.value
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
                {index < filterOptions.length - 1 && (
                  <div className="w-1 h-1 bg-gray-600 rounded-full ml-8" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Portfolio Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {displayItems.map((item) => (
    <div
      key={item.id}
      className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
    >
      <div className="relative aspect-[4/5]">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-white text-xl font-medium mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {item.title}
          </h3>
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {item.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-gray-300 text-xs font-medium tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover dot */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
      </div>
    </div>
  ))}
</div>


        {/* See More Button */}
        {!showAll && filteredItems.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
             onClick={() => navigate("/portfolio")}

              className="group relative px-8 py-4 bg-transparent border border-blue-400 text-blue-400 font-medium tracking-wider rounded-lg transition-all duration-300 hover:bg-blue-400 hover:text-white overflow-hidden"
            >
              <span className="relative z-10">SEE MORE</span>
              <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

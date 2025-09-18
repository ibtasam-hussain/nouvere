import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ArticlesSection = ({ showAll = false }) => {
  const articles = [
    {
      id: 1,
      title: "HubFolio unlocks next-gen workflows with AI-powered creativity",
      date: "20 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=280&fit=crop&auto=format&q=80",
      bgColor: "from-purple-400 via-purple-500 to-purple-600",
    },
    {
      id: 2,
      title: "Continua UX reshapes product design for human-first innovation",
      date: "20 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=280&fit=crop&auto=format&q=80",
      bgColor: "from-purple-300 via-purple-400 to-purple-500",
    },
    {
      id: 3,
      title: "Real-time design systems: bridging UX and scalable businesses",
      date: "21 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1617001243683-1b6cda0b6b21?w=400&h=280&fit=crop&auto=format&q=80",
      bgColor: "from-purple-500 via-purple-600 to-purple-700",
    },
    {
      id: 4,
      title: "DesignOps in action: how global teams achieve consistent impact",
      date: "22 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1606312619344-000a63ec8ff1?w=400&h=280&fit=crop&auto=format&q=80",
      bgColor: "from-purple-600 via-purple-700 to-purple-800",
    },
  ];

  const visibleArticles = showAll ? articles : articles.slice(0, 2);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-[1600px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
          <button className="text-lg px-5 py-2 border border-purple-500 text-white rounded-full font-medium flex items-center gap-2 mb-4 lg:mb-0">
            <span className="text-purple-400 font-semibold text-2xl">◂</span>{" "}
            <span className="italic">ARTICLES</span>
          </button>
          <div className="text-right">
            <h2 className="text-white text-lg lg:text-xl font-light leading-relaxed max-w-xl">
              Let’s decode what drives transformation. Our articles offer
              insights to help{" "}
              <span className="text-gray-400">
                you stay competitive, agile, and future-focused.
              </span>
            </h2>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${article.bgColor} aspect-[4/3] mb-4`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${article.image})`,
                    backgroundBlendMode: "overlay",
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="space-y-2">
                <h3 className="text-white text-lg lg:text-xl font-light leading-relaxed line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && (
          <div className="flex justify-center mt-10">
            <Link
              to="/articles"
              className="px-6 py-3 border border-gray-600 text-gray-300 text-sm font-medium rounded-full hover:border-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              View More
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesSection;

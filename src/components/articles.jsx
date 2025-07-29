import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "HubFolio agency revolutionizes work with the power of AI-Driven",
      date: "20 Nov 2024",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=280&fit=crop&auto=format&q=80",
      bgColor: "from-purple-400 via-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Continua UX anticipate in CorpDesigns-related projects",
      date: "20 Nov 2024",
      image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=280&fit=crop&auto=format&q=80",
      bgColor: "from-purple-300 via-purple-400 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Dotted border container */}
        <div 
          className="relative p-8 lg:p-12"
          style={{
            border: '2px dotted #4a5568',
            borderRadius: '8px'
          }}
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12">
            <div className="flex items-center gap-4 mb-4 lg:mb-0">
              {/* Navigation Arrow Left */}
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={18} />
              </button>
              
              {/* Section Title */}
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  OUR ARTICLES
                </span>
              </div>
            </div>
            
            {/* Right side text */}
            <div className="text-right">
              <h2 className="text-white text-lg lg:text-xl font-light leading-relaxed max-w-md">
                The place that we share everything related to{' '}
                <span className="text-gray-400">design trends, tips and more</span>
              </h2>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {articles.map((article, index) => (
              <div key={article.id} className="group cursor-pointer">
                {/* Article Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 aspect-[4/3] mb-4">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${article.image})`,
                      backgroundBlendMode: 'overlay'
                    }}
                  ></div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${article.bgColor} opacity-60`}></div>
                  
                  {/* Content overlay for better readability */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Article Info */}
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

          {/* View All Articles Button */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 text-sm font-medium rounded-full hover:border-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group">
              View All Articles
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Corner decorative elements */}
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-gray-600"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-gray-600"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-gray-600"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
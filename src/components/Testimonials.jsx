import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Alex Regelman",
      position: "Co-founder",
      company: "Colabrio",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      text: "I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      text: "Outstanding work! The team delivered exactly what we needed and exceeded our expectations with their creative approach."
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "CEO",
      company: "StartupLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      text: "Professional, efficient, and incredibly talented. They transformed our vision into reality with stunning animations."
    },
    {
      id: 4,
      name: "Emily Chen",
      position: "CTO",
      company: "StartupLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      text: "Professional, efficient, and incredibly talented. They transformed our vision into reality with stunning animations."
    },
    {
      id: 5,
      name: "Emily Chen",
      position: "CTO",
      company: "StartupLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      text: "Professional, efficient, and incredibly talented. They transformed our vision into reality with stunning animations."
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex - 1 + i + testimonials.length) % testimonials.length;
      result.push({
        ...testimonials[index],
        position: i === 0 ? 'left' : i === 1 ? 'center' : 'right'
      });
    }
    return result;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg">
            What our clients say about working with us
          </p>
        </div>

        <div 
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-4 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Container */}
          <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-8">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isCenter = testimonial.position === 'center';
              const isLeft = testimonial.position === 'left';
              const isRight = testimonial.position === 'right';
              
              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={`
                    relative transition-all duration-700 ease-in-out cursor-pointer
                    ${isCenter ? 'w-96 h-80 mx-4 z-20' : 'w-80 h-64 z-10'}
                    ${isLeft ? '-mr-16' : ''}
                    ${isRight ? '-ml-16' : ''}
                    ${isCenter ? 'transform scale-105' : 'transform scale-90'}
                  `}
                  onClick={() => {
                    if (isLeft) prevSlide();
                    if (isRight) nextSlide();
                  }}
                >
                  {/* Card */}
                  <div className={`
                    w-full h-full rounded-2xl p-8 flex flex-col justify-between
                    transition-all duration-700 ease-in-out
                    ${isCenter 
                      ? 'bg-white shadow-2xl border border-gray-100' 
                      : 'bg-gray-800 shadow-xl border border-gray-700 opacity-70 hover:opacity-90'
                    }
                    ${!isCenter && isLeft ? 'clip-right' : ''}
                    ${!isCenter && isRight ? 'clip-left' : ''}
                  `}>
                    
                    {/* Quote */}
                    <div className="flex-1">
                      <p className={`
                        text-lg leading-relaxed mb-6
                        ${isCenter ? 'text-gray-800' : 'text-gray-200'}
                      `}>
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200"
                      />
                      <div>
                        <h4 className={`
                          font-semibold text-lg mb-1
                          ${isCenter ? 'text-gray-900' : 'text-white'}
                        `}>
                          {testimonial.name}
                        </h4>
                        <p className={`
                          text-sm
                          ${isCenter ? 'text-gray-600' : 'text-gray-400'}
                        `}>
                          {testimonial.position}
                        </p>
                        <p className={`
                          text-sm font-medium
                          ${isCenter ? 'text-blue-600' : 'text-blue-400'}
                        `}>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Active Card Indicator */}
                    {isCenter && (
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
                    )}
                  </div>

                  {/* Overlay for side cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900/30 rounded-2xl pointer-events-none"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-right {
          clip-path: polygon(0 0, 75% 0, 85% 100%, 0 100%);
        }
        .clip-left {
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 25% 100%);
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
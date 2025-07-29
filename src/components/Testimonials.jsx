import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      text: "A studio with passionate, professional and full creativity. Much more than I'm expect. Great services, high quality products & affordable prices. I'm extremely satisfied!",
      author: "Bradley Gordon",
      position: "CEO & Founder Avion Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&auto=format&q=80"
    },
    {
      id: 2,
      rating: 5.0,
      text: "Thank you so much for the support of HubFolio team, who have been with our business for more than 3 years. A long journey with many exciting experiences and moments. HubFolio will always be our 1st choice.",
      author: "Dominik Szczepialski",
      position: "Team lead, Zara Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&auto=format&q=80"
    },
    {
      id: 3,
      rating: 4.5,
      text: "HubFolio ability to create a high-quality user interface stands out. It's something we placed a premium on. Recommended!",
      author: "Mac Alister",
      position: "Senior Marketing Spotify",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&auto=format&q=80"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-1">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star size={14} className="text-gray-600" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} size={14} className="text-gray-600" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        {/* Bottom left large triangle */}
        <div 
          className="absolute bottom-0 left-0 w-0 h-0"
          style={{
            borderStyle: 'solid',
            borderWidth: '0 0 400px 600px',
            borderColor: 'transparent transparent #7c3aed transparent'
          }}
        ></div>
        
        {/* Bottom right triangle */}
        <div 
          className="absolute bottom-0 right-0 w-0 h-0"
          style={{
            borderStyle: 'solid',
            borderWidth: '300px 0 0 500px',
            borderColor: 'transparent transparent transparent #8b5cf6'
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
          <div className="flex items-center gap-4">
            {/* Navigation Arrow Left */}
            <button 
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            
            {/* Section Title */}
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              TESTIMONIALS
            </span>
          </div>
          
          {/* Header Text and Rating */}
          <div className="lg:text-right space-y-4">
            <h2 className="text-white text-2xl lg:text-3xl font-light leading-relaxed max-w-lg">
              We've helped hundreds of partners,<br />
              to achieve their goals and <span className="text-gray-400">stellar feedback,<br />
              is our reward!</span>
            </h2>
            
            {/* Overall Rating */}
            <div className="flex lg:justify-end items-center gap-3">
              <span className="text-white text-lg font-medium">4.9/5</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-600"} 
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">based on 83 reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-white text-lg font-medium">
                  {testimonial.rating}
                </span>
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 text-base leading-relaxed mb-8 font-light">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white text-sm font-medium">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : index === 1 || index === 3
                    ? 'bg-gray-600' 
                    : 'bg-gray-700'
              }`}
            />
          ))}
          
          {/* Navigation Arrow Right */}
          <button 
            onClick={nextSlide}
            className="ml-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
"use client";

import { Star } from "lucide-react";
import Bg from "../assets/Tbg.png";
const testimonials = [
  {
    name: "Bradley Gordon",
    title: "CEO & Founder, Archin Studio",
    rating: 5,
    text: "A studio with passionate, professional and full creativity. Much more than I'm expect. Great services, high quality products & affordable prices. I'm extremly satisfied!.",
  },
  {
    name: "Dominik Szoboslai",
    title: "Product Manager, Zuma Inc",
    rating: 5,
    text: "Thank you so much for the support of Hubfolio team, who have been with our business for more than 3 years. A long journey with many exciting experiences and moments. Hubfolio will alway be our 1st choice.",
  },
  {
    name: "Mac Alister",
    title: "Senior Marketing, Spotify",
    rating: 4.5,
    text: "Hubfolio ability to create a high-quality user interface stands out. It's something we placed a premium on. Recommended!.",
  },
];

export default function TestimonialsSection() {
  return (
 <section
  className="bg-black text-white py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden"
  style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-6">
          <button className="text-lg px-5 py-2 border border-purple-500 text-white rounded-full font-medium flex items-center gap-2">
            <span className="text-purple-400 font-semibold text-2xl ">◂</span>{" "}
            <span className="italic">TESTIMONIALS</span>
          </button>
          <div className="text-right max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
              <span className="text-white font-medium">
                We’ve helped hundreds of partners,
              </span>
              to achieve their goals and{" "}
              <span className="text-white/60">stellar feedback,</span>
              <span className="text-white/60">is our</span>{" "}
              <span className="text-purple-400 font-medium">reward!</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-full text-sm">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-white/50">Based on 24 reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 px-6 py-8 min-h-[420px] flex flex-col justify-between bg-black/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="text-sm font-medium mb-4 text-white/90">
                  {t.rating.toFixed(1)}{" "}
                  <Star className="inline-block w-4 h-4 text-purple-400 ml-1" />
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  {t.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">
                    ●
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-14">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === 0 ? "bg-white" : "bg-white/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

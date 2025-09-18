"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Bg from "../assets/Tbg.png";

const testimonials = [
  {
    name: "Neil Bryan Kovalski",
    title: "Retail E-Commerce",
    rating: 5,
    text: "Working with Nouvere flipped the script for our online store. They didn’t just give us a pretty website, but they built something that actually worked, converted, and finally got us seen. It felt like they understood our business better than we did!",
  },
  {
    name: "Daniel Reed",
    title: "Tech Startup",
    rating: 5,
    text: "I’ve been through agencies that overpromise and ghost you when it counts. Nouvere was the opposite, and these guys were responsive, sharp, and fully invested. Their SEO work brought a real surge in traffic, and for once, it felt like we had a digital partner!",
  },
  {
    name: "Mariam Al-Farsi",
    title: "Mobile App Founder",
    rating: 5,
    text: "We had a crazy app idea and honestly didn’t think anyone could pull it off. Nouvere made it smooth, sleek, and addictive. Our users love it, and it gave us the confidence to pitch bigger investors.",
  },
  {
    name: "James Kevin",
    title: "Lifestyle Brand",
    rating: 4.8,
    text: "Our social media used to be completely invisible. After Nouvere stepped in, we had a voice, a vibe, and actual engagement. It wasn’t spammy, it was authentic, and our audience finally started talking back.",
  },
  {
    name: "Sofia Romero",
    title: "Media & Entertainment",
    rating: 5,
    text: "We handed them a half-baked animation concept, and they turned it into pure magic. The video became the highlight of our campaign and finally gave our brand the energy it was missing.",
  },
  {
    name: "Nate Williams",
    title: "B2B SaaS",
    rating: 5,
    text: "The PPC campaign they ran was brilliant, and we found leads that we could actually close. Every detail was thought through, and the results came faster than we expected. These guys actually get ROI!",
  },
  {
    name: "Liam Chen",
    title: "IT Professional Services",
    rating: 5,
    text: "We wanted a brand identity that made us look as good as the work we deliver. Nouvere nailed it from the logo to the design system. It feels premium, cohesive, and modern. Clients noticed instantly, and so did competitors!",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index + 3 < testimonials.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section
      className="bg-black text-white py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-6">
          <button className="text-lg px-5 py-2 border border-purple-500 text-white rounded-full font-medium flex items-center gap-2">
            <span className="text-purple-400 font-semibold text-2xl ">◂</span>{" "}
            <span className="italic">TESTIMONIALS</span>
          </button>
          <div className="text-right max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
              <span className="text-white font-medium">
                We don’t just build digital.
              </span>
              We create growth engines{" "}
              <span className="text-white/60"> that defy</span>
              <span className="text-purple-400 font-medium">
                the digital world.
              </span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 border border-purple-500 rounded-full text-sm">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-white/50">Based on 24 reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
            {testimonials.slice(index, index + 3).map((t, i) => (
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
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-white/60">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600/70 hover:bg-purple-600 text-white p-3 rounded-full disabled:opacity-40"
          >
            ◂
          </button>
          <button
            onClick={nextSlide}
            disabled={index + 3 >= testimonials.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600/70 hover:bg-purple-600 text-white p-3 rounded-full disabled:opacity-40"
          >
            ▸
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Star, Circle, ChevronLeft, ChevronRight } from "lucide-react";

const icons = [
  <Circle size={20} />,
  <ChevronLeft size={20} />,
  <ChevronLeft size={20} />,
  <Star size={20} />,
  <ChevronRight size={20} />,
  <ChevronRight size={20} />,
  <Circle size={20} />,
];

export default function AutoSlideIcons() {
  return (
    <div className="w-full bg-black overflow-hidden py-4">
      <div className="relative w-full">
        <div className="flex w-max animate-slide gap-6 px-6">
          {icons.concat(icons).map((icon, idx) => (
            <div
              key={idx}
              className={`w-10 h-10 flex items-center justify-center border rounded-full text-purple-500 border-purple-500`}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

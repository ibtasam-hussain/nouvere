import React from "react";
import bg from "../assets/logo.svg";

const clients = [
  { src: bg, alt: "Company 1" },
  { src: bg, alt: "Slack" },
  { src: bg, alt: "Logo 3" },
  { src: bg, alt: "Logo 4" },
  { src: bg, alt: "Technology Transfer" },
  { src: bg, alt: "125+ Clients" },
];
const OurClients = () => {
  return (
    <div className="bg-black text-white px-4 py-12 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text Section */}
        <div className="md:max-w-md text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-medium">
            Our user-centered design encourages
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-2">
            productivity & boosts revenue.
          </p>
        </div>

        {/* Button */}
       <button className="text-lg px-5 py-2 border border-purple-500 text-white rounded-full font-medium flex items-center gap-2">
            <span className="text-purple-400 font-semibold text-2xl ">◂</span>{" "}
            <span className="italic">OUR CLIENTS</span>
          </button>
      </div>

      {/* Logos */}
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 place-items-center">

        {clients.map((client, index) => (
          <div
            key={index}
            className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border border-gray-700 hover:scale-105 transition duration-300"
          >
            <img
              src={client.src}
              alt={client.alt}
              className="max-w-[70%] max-h-[70%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;

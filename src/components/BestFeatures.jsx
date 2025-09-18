import React, { useState } from "react";
import BirdImage from "../assets/footer.svg";
import BestFeaturesBG from "../assets/bestfeaturesBG.svg";
import {
  FaPalette,
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaMousePointer,
  FaObjectGroup,
  FaPenNib,
  FaPaintBrush,
  FaAd,
  FaYoutube,
  FaEnvelope,
  FaFilm,
  FaVideo,
  FaUserCog,
  FaDatabase,
  FaShoppingCart,
  FaLayerGroup,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    title: "Brand Management",
    icon: <FaPalette size={16} />,
    description:
      "Building strategic frameworks that define, position, and strengthen brands for long-term recognition and market leadership.",
  },
  {
    title: "Website Development",
    icon: <FaCode size={16} />,
    description:
      "Developing enterprise-grade websites built for scalability, performance, and user-centric engagement across devices.",
  },
  // {
  //   title: "Mobile App Development",
  //   icon: <FaMobileAlt size={16} />,
  //   description:
  //     "Apps that are intuitive and future-ready, connecting businesses with customers anywhere, anytime.",
  // },
  {
    title: "Search Engine Optimization (SEO)",
    icon: <FaSearch size={16} />,
    description:
      "Designing data-driven optimization strategies that maximize visibility, credibility, and organic growth.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn size={16} />,
    description:
      "People-driven social media campaigns that amplify presence and foster authentic brand communities.",
  },
  {
    title: "Pay Per Click (PPC)",
    icon: <FaMousePointer size={16} />,
    description:
      "Targeted performance marketing engineered to deliver immediate, measurable ROI, and long-term success.",
  },
  {
    title: "UI/UX Design Services",
    icon: <FaObjectGroup size={16} />,
    description:
      "Delivering human-centered digital experiences designed to simplify complexity and inspire interaction.",
  },
  {
    title: "Content & Creative Services",
    icon: <FaPenNib size={16} />,
    description:
      "Purpose-built narratives and creative assets that drive engagement, awareness, and influence decisions.",
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush size={16} />,
    description:
      "Boosting impactful visual communication that strengthens identity and elevates brand perception.",
  },
  {
    title: "Search Engine Marketing (SEM)",
    icon: <FaAd size={16} />,
    description:
      "Strategic paid advertising solutions that optimize reach, relevance, and conversions for startups and enterprises.",
  },
  {
    title: "YouTube Marketing",
    icon: <FaYoutube size={16} />,
    description:
      "Content-driven campaigns that leverage video storytelling to boost visibility and engagement.",
  },
  {
    title: "Email Marketing",
    icon: <FaEnvelope size={16} />,
    description:
      "Automated, data-led campaigns that strengthen relationships and enhance lifetime customer value.",
  },
  {
    title: "Animation Services",
    icon: <FaFilm size={16} />,
    description:
      "Immersive animations that simplify concepts and enhance brand storytelling, including 2D, 3D, logo, character, and motion graphics.",
  },
  {
    title: "Front-End Development",
    icon: <FaCode size={16} />,
    description:
      "High-performance interfaces that merge usability with flawless functionality.",
  },
  {
    title: "Back-End Development",
    icon: <FaDatabase size={16} />,
    description:
      "Secure, scalable systems engineered for reliability and efficiency.",
  },
  {
    title: "E-commerce Development",
    icon: <FaShoppingCart size={16} />,
    description:
      "Conversion-focused platforms designed to optimize digital retail experiences.",
  },
  {
    title: "Creative Design Integration",
    icon: <FaLayerGroup size={16} />,
    description:
      "Unified design integration that enhances brand experience across channels.",
  },
  {
    title: "Video Production Services",
    icon: <FaVideo size={16} />,
    description:
      "Professional video solutions devised to tell stories with a human-to-human impact, including commercials, short films, event coverage, and product shoots.",
  },
  {
    title: "CRM Solution Services",
    icon: <FaUserCog size={16} />,
    description:
      "Custom CRM solutions designed to streamline processes, optimize engagement, and drive revenue growth.",
  },
];

export default function OurServices() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat p-6 md:p-12"
      style={{
        backgroundImage: `url(${BestFeaturesBG})`,
      }}
    >
      <section className="min-h-screen w-full mt-10 p-6 md:p-12">
        <div className="max-w-7xl mx-auto mt-10">
          {/* TOP HEADER + DESCRIPTION */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            <div>
              <button className="text-lg px-5 py-2 border border-purple-500 text-white rounded-full font-medium flex items-center gap-2">
                <span className="text-purple-400 font-semibold text-2xl">
                  ◂
                </span>{" "}
                <span className="italic">OUR SERVICES</span>
              </button>
            </div>

            <div className="max-w-md text-white/80 space-y-4 transition-all duration-300">
              <p>
                Your Full Scale 360-Degree Design, Development, & Digital
                Marketing Agency
              </p>

              {/* Collapsible Extra Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-white/70">
                  At Nouvere Private Limited, we believe digital shouldn’t feel
                  complicated. That’s why we’ve taken the time to sharpen our
                  services through constant research, testing, and refinement,
                  so you don’t waste a second struggling to find your place in
                  the market. We’re not just another agency ticking boxes. We’re
                  a team that obsesses over delivering digital solutions that
                  actually deliver real-time results. We help your business and
                  brand grow online and stay ahead of the competition. From
                  strategy to creative to tech, everything we do is built to
                  solve real problems, drive measurable growth, and provide your
                  consumers with experiences they will remember. Go Digital
                  Today!
                </p>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="px-4 py-2 border border-white text-sm rounded-full hover:bg-white hover:text-black transition"
              >
                {expanded ? "Show Less" : "Learn More →"}
              </button>
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/1 text-white p-6 backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start m-4">
                    <h3 className="text-2xl m-5 font-medium leading-tight">
                      {service.title}
                    </h3>
                    <div className="p-3 rounded-full bg-white/10 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <p className="text-sm pt-15 m-5 text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="h-40 md:h-50 w-full rounded-xl bg-gradient-to-br from-black/80 to-black/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section with Bird Image and Philosophy */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side - Bird */}
        <div className="w-full md:w-3/5 flex pr-6 items-center justify-center overflow-hidden group">
          <img
            src={BirdImage}
            alt="Bird"
            className="h-120 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-12">
          <div className="bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff1a] rounded-xl p-6 md:p-10 w-full max-w-sm text-white min-h-[520px] flex flex-col gap-6 shadow-md">
            {/* Top Button */}
            <button className="self-end text-xs px-4 py-2 border border-[#ffffff30] text-white rounded-full">
              <span className="mr-1">←</span> What We Deliver?
            </button>

            {/* Main Text */}
            <div className="mt-12 md:mt-20">
              <h2 className="text-lg font-medium leading-snug mb-2">
                We design solutions that redefine how
                <span className="text-purple-300"> businesses</span> lead in a
                digital-first world with{" "}
                <span className="text-purple-300">intelligent, scalable, </span>{" "}
                and built-to-accelerate real growth solutions.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FaCode, FaBullhorn, FaPalette, FaEnvelope, FaMobileAlt, FaUsers, FaObjectGroup } from 'react-icons/fa';
import BirdImage from "../assets/aboutus.svg"; 



const services = [
  {
    title: 'Strategy and Design',
    icon: <FaPalette size={16} />,
    description:
      'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values',
  },
  {
    title: 'Coding and Implementation',
    icon: <FaCode size={16} />,
    description:
      'We implement coding with new tech React, Webflow, Wordpress, Shopify, Flutter, iOS, Android and AI-driven applications',
  },
  {
    title: 'SEO/Marketing and Advertisement',
    icon: <FaBullhorn size={16} />,
    description:
      'Grow your brand with our SEO/Marketing and advertisement solutions. Help increase the traffic, Google 5* rating and more',
  },
  {
    title: 'Social Media Management',
    icon: <FaUsers size={16} />,
    description:
      'Enhance your online presence with our comprehensive social media management services. Engage your audience, build loyalty, and simplify brand awareness.',
  },
  {
    title: 'Email Marketing',
    icon: <FaEnvelope size={16} />,
    description:
      'Unlock the power of email marketing with our targeted campaigns. Drive conversions, nurture leads, and maintain customer relationships effortlessly.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaObjectGroup size={16} />,
    description:
      'Transform your website with our UI/UX design services. Create a seamless user experience that drives engagement and boosts conversions.',
  },
];

export default function OurServices() {
  return (
    <section className="min-h-screen w-full mt-10  p-6 md:p-12">

      <section className="min-h-screen w-full mt-10 p-6 md:p-12">
  <div className="max-w-7xl mx-auto mt-10">

    {/* TOP HEADER + DESCRIPTION */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
      <div>
        <button className="text-xs px-4 py-1 border border-[#ffffff30] text-white rounded-full mb-14 ml-5 hover:bg-white hover:text-black transition-all">
          ← OUR SERVICES
        </button>
   
      </div>

      <div className="max-w-md text-white/80 space-y-4">
        <p>
          From ideation to execution, we combine design and technology to build purposeful digital experiences that resonate deeply.
        </p>
        <button className="px-4 py-2 border border-white text-sm rounded-full hover:bg-white hover:text-black transition">
          Learn More →
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
              <div className=" h-40 md:h-50 w-full rounded-xl bg-gradient-to-br from-black/80 to-black/30" />
            </div>
          ))}
    </div>

  </div>
</section>



    <div className="flex mt-15 min-h-screen">
      {/* Left Side - Bird */}
    {/* Left Side - Bird */}
<div className="w-full md:w-5/8 bg-black flex items-center justify-center">
  <img
    src={BirdImage}
    alt="Bird"
    className="w-full max-w-[500px] h-auto object-contain transition-transform duration-500"
  />
</div>


{/* Right Side - Content */}
<div className="w-3/8 bg-[#1d002f] flex items-center justify-center relative p-4">
  {/* Glass Card */}
  <div className="bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff1a] rounded-xl p-8 md:p-10 w-full max-w-sm text-white min-h-[440px] flex flex-col gap-6 shadow-md">
    
    {/* Top Button */}
    <button className="self-end text-xs px-4 py-1 border border-[#ffffff30] text-white rounded-full hover:bg-white hover:text-black transition-all">
      <span className="mr-1">←</span> OUR PHILOSOPHY
    </button>

    {/* Main Text */}
    <div className="mt-20" >
      <h2 className="text-lg font-medium leading-snug mb-2">
        We help passionate <br />
        <span className="text-purple-300">Founders</span> perfect theirs{" "}
        <span className="text-purple-300">design & development</span> game.
      </h2>
      <p className="text-sm text-[#b8a5cc]">Let’s aim for the top together!</p>
    </div>

  
  </div>
</div>

    </div>
    

    </section>
  );
} 
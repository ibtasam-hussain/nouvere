import React from "react";
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "../assets/footer.svg";
import { Link as ScrollLink } from "react-scroll"; // 👈 import react-scroll

const HubFolioFooter = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerLinks = [
    { name: "Home", to: "home" },
    { name: "Works", to: "portfolio" },
    { name: "Packages", to: "packages" },
    { name: "News", to: "team" },
  ];

  return (
    <footer className="w-full relative overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          {/* Left Section - Logo and Tagline */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex flex-col gap-3 items-start">
              <div className="w-60 h-80 rounded-lg flex items-center justify-center text-white text-sm">
                <img src={Logo} alt="HubFolio Logo" />
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-gray-200 text-base leading-relaxed font-light max-w-sm">
                We hope to empower user and simplify
                <br />
                their everyday lives
              </p>

              <p className="text-gray-400 text-sm font-light">
                © 2024 Nouvere Agency. All Right Reserved.
              </p>
            </div>
          </div>

          {/* Middle Section - Location */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-6">
            <div>
              <h3 className="text-gray-300 text-xs font-medium uppercase tracking-widest mb-6 opacity-80">
                Location
              </h3>
              <address className="text-gray-200 text-sm leading-loose not-italic font-light">
                R-150 Block B Gulshan-e-Jamal, <br />
                Karachi, Pakistan
              </address>
            </div>
          </div>

          {/* Right Section - Contact & Social */}
          <div className="lg:col-span-3 lg:col-start-10 space-y-6">
            <div>
              <h3 className="text-gray-300 text-xs font-medium uppercase tracking-widest mb-6 opacity-80">
                Follow
              </h3>
              <div className="text-gray-200 text-sm leading-loose font-light space-y-1">
                <p>info@nouvere.com</p>
                <p>+92 326 2020580 </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <IconComponent size={14} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <nav className="flex flex-wrap gap-10">
              {footerLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer text-gray-300 hover:text-white text-sm font-light transition-colors duration-300 tracking-wide"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HubFolioFooter;

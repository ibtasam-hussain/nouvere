import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const HubFolioFooter = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'Works', href: '#' },
    { name: 'Studio', href: '#' },
    { name: 'News', href: '#' }
  ];

  return (
      <footer className="w-full relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0a0015 0%, #1a0b2e 25%, #2d1b4e 50%, #4c1d5f 75%, #7209b7 100%)'
      }}>
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">

            {/* Left Section - Logo and Tagline */}
            <div className="lg:col-span-5 space-y-10">
              <div className="flex flex-col gap-3 items-start">
                <h2 className="text-white text-2xl font-medium tracking-tight">
                  NOUVERE
                </h2>
                <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center text-white text-sm">
                  <img src="../assets/logo.svg" alt="HubFolio Logo" />
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-gray-200 text-base leading-relaxed font-light max-w-sm">
                  We hope to empower user and simplify<br />
                  their everyday lives
                </p>

                <p className="text-gray-400 text-sm font-light">
                  © 2024 HubFolio Agency. All Right Reserved.
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
                  192 Thatcher Road St, Manhattan,<br />
                  NY 10038, US
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
                  <p>hello@hubfolio.agency</p>
                  <p>+06816890604</p>
                </div>
              </div>

              {/* Social Media Icons - exact spacing and styling */}
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
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <IconComponent size={14} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Navigation - exact positioning */}
          <div className="mt-20 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <nav className="flex flex-wrap gap-10">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm font-light transition-colors duration-300 tracking-wide"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default HubFolioFooter;
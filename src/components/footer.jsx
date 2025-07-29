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
        {/* Complex gradient overlays to match the exact purple tones */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(75, 0, 130, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)
          `
        }}></div>
        
        {/* Additional atmospheric effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60" style={{
          background: `
            linear-gradient(45deg, transparent 0%, rgba(147, 51, 234, 0.1) 25%, transparent 50%),
            linear-gradient(-45deg, transparent 0%, rgba(126, 34, 206, 0.1) 25%, transparent 50%)
          `
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            
            {/* Left Section - Logo and Tagline */}
            <div className="lg:col-span-5 space-y-10">
              <div className="flex items-center gap-3">
                {/* Pixel-perfect Logo Icon */}
                <div className="w-12 h-12 relative">
                  <svg
                    viewBox="0 0 48 48"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Main bird body - white */}
                    <path
                      d="M6 38L24 6L42 24L36 30L24 18L12 34L6 38Z"
                      fill="white"
                      fillOpacity="0.95"
                    />
                    {/* Wing detail - purple gradient */}
                    <path
                      d="M24 6L42 24L36 18L24 12L18 18L24 6Z"
                      fill="url(#wingGradient)"
                    />
                    {/* Tail detail - purple to cyan gradient */}
                    <path
                      d="M12 34L24 18L30 24L18 38L12 34Z"
                      fill="url(#tailGradient)"
                    />
                    <defs>
                      <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <h2 className="text-white text-2xl font-medium tracking-tight">
                  HubFolio
                </h2>
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
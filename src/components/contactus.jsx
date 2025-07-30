import React, { useState } from 'react';
import { ChevronDown, Paperclip } from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: 'Christian Bogl',
    email: 'Your email address',
    subject: 'Select a subject',
    budget: 'A magical budget for project',
    message: 'Write your message here...'
  });

  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const subjectOptions = [
    'Select a subject',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Branding',
    'Consultation'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Main content container - full width */}
      <div className="relative z-10 w-full max-w-[1600px]">
        <div
          className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-14 xl:p-20"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.3) 50%, rgba(109, 40, 217, 0.2) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Left Section */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h1 className="text-white text-3xl lg:text-4xl font-light leading-tight mb-4">
                  Success is a team<br />
                  play, right? <span className="text-purple-300">Let's work<br />
                  together!</span>
                </h1>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-white text-2xl lg:text-3xl font-light mb-2">
                    +068 5581 96 96
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Call us for support
                  </p>
                </div>

                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300">
                  Get Direction →
                </button>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-3 px-0 focus:border-purple-400 focus:outline-none transition-colors placeholder-gray-500"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-transparent border-b border-gray-600 text-gray-400 text-lg py-3 px-0 focus:border-purple-400 focus:outline-none transition-colors placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Subject Dropdown */}
                <div className="relative">
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Subject
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                      className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-3 px-0 flex items-center justify-between focus:border-purple-400 focus:outline-none transition-colors"
                    >
                      <span>{formData.subject}</span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transition-transform ${isSubjectOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isSubjectOpen && (
                      <div className="absolute top-full left-0 right-0 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-lg mt-2 py-2 z-20">
                        {subjectOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              handleInputChange('subject', option);
                              setIsSubjectOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-white hover:bg-purple-600/30 transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Your Budget */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Your Budget (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full bg-transparent border-b border-gray-600 text-gray-400 text-lg py-3 px-0 focus:border-purple-400 focus:outline-none transition-colors placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-3">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-600 text-gray-400 text-lg py-3 px-0 focus:border-purple-400 focus:outline-none transition-colors placeholder-gray-500 resize-none"
                />
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Paperclip size={18} />
                  <span className="text-sm">Add an attachment</span>
                </button>

                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Send Your Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;

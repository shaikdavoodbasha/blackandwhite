import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      platform: 'GitHub', 
      url: 'https://github.com/username', 
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      color: 'text-white'
    },
    { 
      platform: 'LinkedIn', 
      url: 'https://linkedin.com/in/username', 
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      color: 'text-white'
    },
    { 
      platform: 'Email', 
      url: 'mailto:shannu@email.com', 
      icon: 'M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z',
      color: 'text-white'
    },
    { 
      platform: 'Twitter', 
      url: 'https://twitter.com/username', 
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      color: 'text-white'
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 bg-black text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:70px_70px]"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/5 rounded-full animate-float animation-delay-2000"></div>
        
        {/* Gradient accents */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="overflow-hidden inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-slideInUp">
              GET IN TOUCH
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-white/70 animate-slideInUp animation-delay-200">
              Open to internships, collaborations, and learning opportunities
            </p>
          </div>
          
          {/* Animated underline */}
          <div className="mt-6 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-expandWidth animation-delay-400"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-white/90 mb-6 animate-slideInLeft">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: 'Name', name: 'name', type: 'text' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Message', name: 'message', type: 'textarea' }
              ].map((field, index) => (
                <div 
                  key={field.name}
                  className="opacity-0 animate-slideInUp"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <label className="block text-sm font-light text-white/70 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 placeholder:text-white/30"
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-300 placeholder:text-white/30"
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                    />
                  )}
                </div>
              ))}
              
              <div className="opacity-0 animate-slideInUp animation-delay-1200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 border border-white text-white font-medium rounded-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-white/10 cursor-not-allowed' 
                      : 'hover:bg-white hover:text-black active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 border border-white/20 bg-white/5 rounded-lg animate-fadeIn">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Right Column - Contact Information */}
          <div className="space-y-10">
            <h3 className="text-2xl font-light text-white/90 mb-6 animate-slideInRight">
              Connect With Me
            </h3>
            
            {/* Social Links */}
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300 opacity-0 animate-slideInRight"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-lg group-hover:border-white/30 transition-colors duration-300">
                    <svg 
                      className="w-6 h-6" 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={link.icon}/>
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="text-lg font-medium text-white group-hover:text-white/90">
                      {link.platform}
                    </div>
                    <div className="text-sm text-white/50 group-hover:text-white/70">
                      {link.url.replace('https://', '').replace('mailto:', '')}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-10 p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm opacity-0 animate-slideInUp animation-delay-1600">
              <h4 className="text-xl font-light text-white/90 mb-4">
                Availability
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                  <span className="text-white/70">Open to remote internships</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                  <span className="text-white/70">Available for freelance projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                  <span className="text-white/70">Interested in research collaborations</span>
                </div>
              </div>
            </div>
            
            {/* Quick Response */}
            <div className="opacity-0 animate-slideInUp animation-delay-1800">
              <div className="flex items-center text-white/60 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Typically respond within 24 hours
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-white/50 text-sm opacity-0 animate-fadeIn animation-delay-2000">
          <p>© {new Date().getFullYear()} Shannu. All rights reserved.</p>
          <p className="mt-2 text-white/30">Designed with attention to detail</p>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandWidth {
          0% {
            width: 0;
          }
          100% {
            width: 128px;
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-expandWidth {
          animation: expandWidth 1.2s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
        
        .animation-delay-1600 {
          animation-delay: 1.6s;
        }
        
        .animation-delay-1800 {
          animation-delay: 1.8s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Intersection Observer Support */
        .in-view {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
}
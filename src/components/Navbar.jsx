import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Learning', id: 'learning' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? 'py-3 bg-black/95 backdrop-blur-lg border-b border-white/10' : 'py-5 bg-transparent'}
      `}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-white rounded-full bg-black"></div>
              </div>
              <span className="text-white text-xl font-light tracking-wide">
                Shannu<span className="text-white/50">.dev</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative text-sm font-light text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-white animate-expandWidth"></div>
                  )}
                </button>
              ))}
              
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10
          transition-all duration-500 overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
            
            {/* Mobile Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-4 border border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-white/50 via-white to-white/50 transition-all duration-300"
          style={{
            width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
          }}
        ></div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes expandWidth {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        .animate-expandWidth {
          animation: expandWidth 0.3s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        nav::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        nav {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;
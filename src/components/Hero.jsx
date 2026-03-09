export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 border border-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 border border-white/5 rounded-full"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
        </div>
        
        {/* Dynamic Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer animation-delay-1000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl">
        
        {/* Name with elegant typography */}
        <div className="overflow-hidden mb-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight animate-slideUp">
            SHANNU
          </h1>
        </div>
        
        {/* Professional Title */}
        <div className="overflow-hidden mb-4">
          <div className="relative inline-block">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-2 animate-slideUp animation-delay-200">
              B.Tech Computer Science & Engineering
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent mt-2"></div>
          </div>
        </div>
        
        {/* Specialization */}
        <div className="overflow-hidden mb-8">
          <p className="text-base md:text-lg lg:text-xl text-white/70 animate-slideUp animation-delay-400">
            Aspiring Software Engineer & Full-Stack Developer
          </p>
        </div>
        
        {/* Current Focus */}
        <div className="overflow-hidden mb-12">
          <div className="inline-flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base text-white/60 animate-slideUp animation-delay-600">
            <span className="px-3 py-1 border border-white/10 rounded-full backdrop-blur-sm">Data Structures & Algorithms</span>
            <span className="px-3 py-1 border border-white/10 rounded-full backdrop-blur-sm">React & Next.js</span>
            <span className="px-3 py-1 border border-white/10 rounded-full backdrop-blur-sm">Core Computer Science</span>
            <span className="px-3 py-1 border border-white/10 rounded-full backdrop-full backdrop-blur-sm hidden md:inline-block">System Design</span>
          </div>
        </div>
        
        {/* CTA Buttons - Minimalist Design */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-slideUp animation-delay-800">
          <a
            href="#projects"
            className="group relative px-8 py-4 overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm rounded-none hover:bg-white/10 transition-all duration-300 hover:border-white/40"
          >
            <span className="relative z-10 font-medium tracking-wide">View Projects</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 h-full w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-700"></div>
          </a>
          
          <a
            href="#contact"
            className="group relative px-8 py-4 overflow-hidden border border-white bg-white text-black rounded-none hover:bg-transparent hover:text-white transition-all duration-300"
          >
            <span className="relative z-10 font-medium tracking-wide">Contact Me</span>
            <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-xs text-white/50 mb-2">EXPLORE</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Styles for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideUp {
          0% { 
            opacity: 0;
            transform: translateY(30px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
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
      `}</style>
    </section>
  );
}
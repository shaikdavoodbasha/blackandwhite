import { useState, useEffect, useRef } from 'react';

const skills = {
  fundamentals: [
    { name: "C Programming", level: 85, icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Python", level: 80, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Object-Oriented Programming", level: 75, icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { name: "Database Management", level: 70, icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
  ],
  development: [
    { name: "HTML5", level: 90, icon: "M4 7V5a1 1 0 011-1h14a1 1 0 011 1v2m-1 4v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8m1-4h14m-14 0a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H5z" },
    { name: "CSS3", level: 85, icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
    { name: "JavaScript", level: 80, icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { name: "React.js", level: 75, icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
    { name: "Next.js", level: 65, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  ],
  tools: [
    { name: "Git & GitHub", level: 85, icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
    { name: "VS Code", level: 90, icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { name: "Linux Basics", level: 70, icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
    { name: "Tailwind CSS", level: 85, icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
    { name: "Responsive Design", level: 80, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  ]
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill bars on scroll
            Object.keys(skills).forEach((category) => {
              skills[category].forEach((skill, index) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => ({
                    ...prev,
                    [skill.name]: true
                  }));
                }, index * 200);
              });
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 px-6 bg-black text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Binary Code Pattern */}
        <div className="absolute inset-0 opacity-[0.02] font-mono text-xs md:text-sm">
          <div className="absolute top-10 left-10">01010101</div>
          <div className="absolute top-20 right-10">00110011</div>
          <div className="absolute bottom-20 left-20">11001100</div>
          <div className="absolute bottom-10 right-20">10101010</div>
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white/5 rounded-full animate-spin-slow animation-delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="overflow-hidden inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-slideInUp">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-white/70 animate-slideInUp animation-delay-200">
              Tools and technologies I work with to build impactful solutions
            </p>
          </div>
          
          {/* Animated underline */}
          <div className="mt-6 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-expandWidth animation-delay-400"></div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div 
              key={category}
              className="opacity-0 animate-slideInUp"
              style={{ animationDelay: `${600 + categoryIndex * 200}ms` }}
            >
              {/* Category Card */}
              <div className="h-full p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-white/20 transition-all duration-500">
                
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={
                        category === 'fundamentals' ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" :
                        category === 'development' ? "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" :
                        "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      } />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-white capitalize mb-1">
                      {category}
                    </h3>
                    <p className="text-sm text-white/50">
                      {skillList.length} skills
                    </p>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-6">
                  {skillList.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group"
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors duration-300">
                            <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={skill.icon} />
                            </svg>
                          </div>
                          <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-white/50">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: animatedSkills[skill.name] ? `${skill.level}%` : '0%',
                            animationDelay: `${800 + (categoryIndex * 100) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                      
                      {/* Skill Details (Appears on hover) */}
                      <div className={`
                        mt-2 text-xs text-white/60 overflow-hidden transition-all duration-500
                        ${activeSkill === skill.name ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}
                      `}>
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {skill.level >= 80 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Learning'} proficiency
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Category Footer */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>Average proficiency:</span>
                    <span className="text-white">
                      {Math.round(skillList.reduce((sum, skill) => sum + skill.level, 0) / skillList.length)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Legend */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-slideInUp animation-delay-1200">
          <div className="p-4 border border-white/10 rounded-lg bg-white/[0.02]">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-white mr-3"></div>
              <span className="text-white/70">Learning (60-70%)</span>
            </div>
          </div>
          <div className="p-4 border border-white/10 rounded-lg bg-white/[0.02]">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-white/80 mr-3"></div>
              <span className="text-white/70">Intermediate (71-80%)</span>
            </div>
          </div>
          <div className="p-4 border border-white/10 rounded-lg bg-white/[0.02]">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-white/60 mr-3"></div>
              <span className="text-white/70">Advanced (81-100%)</span>
            </div>
          </div>
        </div>
        
        {/* Currently Learning */}
        <div className="mt-16 p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm opacity-0 animate-slideInUp animation-delay-1400">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                Currently Learning & Exploring
              </h3>
              <p className="text-white/70">
                Expanding my skillset with modern technologies
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 border border-white/10 rounded-full bg-white/5 text-white/70 hover:border-white/30 hover:text-white transition-all duration-300"
                  style={{ animationDelay: `${1600 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skill Growth CTA */}
        <div className="text-center mt-12 opacity-0 animate-slideInUp animation-delay-1800">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Skills are not just about percentages but about the ability to solve real-world problems effectively.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg 
                     text-white/70 hover:text-white hover:border-white/40 
                     transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            See Skills in Action
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
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
        
        @keyframes expandWidth {
          0% {
            width: 0;
          }
          100% {
            width: 128px;
          }
        }
        
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-expandWidth {
          animation: expandWidth 1.2s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
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
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}
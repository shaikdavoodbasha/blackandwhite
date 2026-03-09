import { useState, useEffect, useRef } from 'react';

const journey = [
  {
    semester: "Semester 1",
    title: "C Programming Fundamentals",
    description: "Mastered core programming concepts including variables, loops, functions, and pointers. Built console-based applications and problem-solving skills.",
    skills: ["C Programming", "Algorithms", "Problem Solving", "Debugging"],
    status: "Completed",
    icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    color: "from-white/10 to-white/5"
  },
  {
    semester: "Semester 2",
    title: "Python & Object-Oriented Programming",
    description: "Learned Python programming and OOP principles. Developed projects using classes, inheritance, and polymorphism. Explored data structures and libraries.",
    skills: ["Python", "OOP", "Data Structures", "Libraries"],
    status: "Completed",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    color: "from-white/15 to-white/10"
  },
  {
    semester: "Semester 3",
    title: "Data Structures & Web Development",
    description: "Advanced algorithms and data structures. Introduction to web technologies including HTML, CSS, and JavaScript. Built responsive web applications.",
    skills: ["DSA", "HTML/CSS", "JavaScript", "Responsive Design"],
    status: "Completed",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "from-white/20 to-white/15"
  },
  {
    semester: "Currently",
    title: "React, SQL & Full-Stack Development",
    description: "Building modern web applications with React ecosystem. Learning database management with SQL. Exploring full-stack development and deployment.",
    skills: ["React", "Next.js", "SQL", "Full-Stack"],
    status: "In Progress",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "from-white/25 to-white/20"
  },
  {
    semester: "Next",
    title: "System Design & Advanced Concepts",
    description: "Planning to study system architecture, cloud computing, and advanced software engineering patterns. Focus on scalability and performance optimization.",
    skills: ["System Design", "Cloud", "Microservices", "DevOps"],
    status: "Planned",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-white/5 to-white/2"
  }
];

export default function Learning() {
  const [activeSemester, setActiveSemester] = useState(3);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate progress on scroll
            const timer = setInterval(() => {
              setProgress((oldProgress) => {
                if (oldProgress === 100) {
                  clearInterval(timer);
                  return 100;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
              });
            }, 100);
            
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
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px),linear-gradient(45deg,#ffffff_0.5px,transparent_0.5px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Animated Nodes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1400"></div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/4 w-40 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-px bg-gradient-to-l from-white/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="overflow-hidden inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-slideInUp">
              LEARNING JOURNEY
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-white/70 animate-slideInUp animation-delay-200">
              My evolving path in computer science education
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex justify-between text-sm text-white/50 mb-2">
              <span>Start</span>
              <span>Current Progress: {Math.round(progress)}%</span>
              <span>Target</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent transform -translate-x-1/2 md:translate-x-0"></div>
          
          {/* Journey Items */}
          <div className="space-y-12">
            {journey.map((item, index) => (
              <div 
                key={item.semester}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center group opacity-0 animate-slideInUp`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
                onMouseEnter={() => setActiveSemester(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black border-2 border-white rounded-full transform -translate-x-1/2 z-10 
                              group-hover:scale-125 group-hover:bg-white transition-all duration-300"></div>
                
                {/* Content Card */}
                <div className={`
                  w-full md:w-5/12 ml-12 md:ml-0 p-6 md:p-8 border rounded-2xl 
                  transition-all duration-500
                  ${activeSemester === index 
                    ? 'border-white/40 bg-gradient-to-br from-white/10 to-white/5' 
                    : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                  }
                  ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}
                `}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mr-4`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm text-white/50 font-light">{item.semester}</span>
                        <h3 className="text-xl md:text-2xl font-light text-white">{item.title}</h3>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <span className={`
                      px-3 py-1 text-xs font-medium rounded-full
                      ${item.status === 'Completed' ? 'bg-white/10 text-white/90' : 
                        item.status === 'In Progress' ? 'bg-white/20 text-white animate-pulse' : 
                        'bg-white/5 text-white/70'}
                    `}>
                      {item.status}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 mb-6 font-light leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs border border-white/10 rounded-full 
                                 bg-white/5 text-white/70 hover:border-white/30 hover:text-white 
                                 transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${800 + skillIndex * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Milestone Indicator */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center text-sm text-white/50">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {item.status === 'Completed' ? 'Achieved milestone' : 
                       item.status === 'In Progress' ? 'Currently mastering' : 
                       'Upcoming focus area'}
                    </div>
                  </div>
                </div>
                
                {/* Connection Line (Mobile) */}
                <div className="absolute left-6 top-1/2 w-px h-full md:hidden bg-gradient-to-b from-white/20 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
          
          {/* Journey End Marker */}
          <div className="absolute left-6 md:left-1/2 bottom-0 w-6 h-6 border-2 border-white rounded-full transform -translate-x-1/2 md:translate-x-0">
            <div className="absolute inset-1 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        
        {/* Learning Philosophy */}
        <div className="mt-20 p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm opacity-0 animate-slideInUp animation-delay-1400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">20+</div>
              <div className="text-white/70">Projects Built</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">1000+</div>
              <div className="text-white/70">Hours of Code</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl md:text-4xl font-light text-white mb-2">Continuous</div>
              <div className="text-white/70">Learning Mindset</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/80 text-lg italic font-light max-w-2xl mx-auto">
              "The journey of learning computer science is not about reaching a destination, 
              but about continuously evolving with technology."
            </p>
          </div>
        </div>
        
        {/* Next Steps CTA */}
        <div className="text-center mt-12 opacity-0 animate-slideInUp animation-delay-1600">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg 
                     text-white/70 hover:text-white hover:border-white/40 
                     transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            View My Projects
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
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
        
        .animation-delay-1600 {
          animation-delay: 1.6s;
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}
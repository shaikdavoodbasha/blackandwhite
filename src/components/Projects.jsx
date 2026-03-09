import { useState } from 'react';

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive CRUD-based system designed to efficiently manage student records with advanced filtering and search capabilities. Built with modern React patterns and persistent storage.",
    tech: ["React", "Tailwind CSS", "Context API", "LocalStorage"],
    category: "Web Application",
    status: "Completed",
    githubUrl: "https://github.com/username/student-management",
    demoUrl: "https://demo.student-management.com",
    features: ["Add/Edit/Delete student records", "Advanced search & filtering", "Data persistence", "Responsive design"]
  },
  {
    title: "Todo Application",
    description: "A sophisticated task management application with persistent storage, drag-and-drop functionality, and multiple view modes for enhanced productivity.",
    tech: ["JavaScript", "CSS3", "HTML5", "Web Storage API"],
    category: "Productivity Tool",
    status: "Completed",
    githubUrl: "https://github.com/username/todo-app",
    demoUrl: "https://todo-demo.example.com",
    features: ["Drag & drop tasks", "Multiple priority levels", "Dark/light theme", "Task categorization"]
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website showcasing projects and skills with smooth animations and responsive design. Focused on performance and user experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    category: "Portfolio",
    status: "In Progress",
    githubUrl: "https://github.com/username/portfolio",
    demoUrl: "https://shannu.dev",
    features: ["Smooth animations", "Performance optimized", "SEO friendly", "Mobile first"]
  },
  {
    title: "E-commerce Dashboard",
    description: "Analytics dashboard for e-commerce platforms with real-time data visualization, sales tracking, and inventory management features.",
    tech: ["React", "Chart.js", "Node.js", "MongoDB"],
    category: "Dashboard",
    status: "Planned",
    githubUrl: "",
    demoUrl: "",
    features: ["Real-time analytics", "Sales tracking", "Inventory management", "User management"]
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Application", "Productivity Tool", "Portfolio", "Dashboard"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 bg-black text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
        </div>
        
        {/* Animated Circles */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/5 rounded-full animate-pulse-slow animation-delay-1000"></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-40 left-20 opacity-10 text-sm font-mono animate-float">
          {"<Code />"}
        </div>
        <div className="absolute bottom-40 right-20 opacity-10 text-sm font-mono animate-float animation-delay-2000">
          {"{ developer: 'shannu' }"}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="overflow-hidden inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-slideInUp">
              PROJECTS
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-white/70 animate-slideInUp animation-delay-200">
              Showcasing my journey through code and creativity
            </p>
          </div>
          
          {/* Animated underline */}
          <div className="mt-6 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-expandWidth animation-delay-400"></div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? 'border-white bg-white text-black'
                  : 'border-white/20 hover:border-white/40 text-white/70 hover:text-white'
              } opacity-0 animate-slideInUp`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="relative group opacity-0 animate-slideInUp"
              style={{ animationDelay: `${800 + index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`
                relative h-full p-6 md:p-8 border rounded-2xl 
                transition-all duration-500 overflow-hidden
                ${hoveredProject === index 
                  ? 'border-white/40 bg-white/5' 
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }
              `}>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`
                    px-3 py-1 text-xs font-medium rounded-full
                    ${project.status === 'Completed' ? 'bg-white/10 text-white/90' : 
                      project.status === 'In Progress' ? 'bg-white/20 text-white' : 
                      'bg-white/5 text-white/70'}
                  `}>
                    {project.status}
                  </span>
                </div>
                
                {/* Category */}
                <div className="mb-4">
                  <span className="text-sm text-white/50 font-light">
                    {project.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 mb-6 font-light leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features List (Visible on hover) */}
                <div className={`
                  mb-6 transition-all duration-500 overflow-hidden
                  ${hoveredProject === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <h4 className="text-sm font-medium text-white/90 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/70">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs border border-white/10 rounded-full 
                                 bg-white/5 text-white/70 hover:border-white/30 hover:text-white 
                                 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  {/* View Details Arrow */}
                  <div className={`
                    transform transition-transform duration-500
                    ${hoveredProject === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}
                  `}>
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
                
                {/* Project Number */}
                <div className="absolute -bottom-6 -right-6 text-8xl font-bold text-white/5 select-none">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-16 opacity-0 animate-slideInUp animation-delay-1600">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg 
                     text-white/70 hover:text-white hover:border-white/40 
                     transition-all duration-300 group"
          >
            View All Projects on GitHub
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
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-10px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-expandWidth {
          animation: expandWidth 1.2s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
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
        
        .animation-delay-1600 {
          animation-delay: 1.6s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}
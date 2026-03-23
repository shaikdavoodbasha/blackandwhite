// import { useEffect, useRef } from 'react';

// export default function About() {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-20 md:py-32 px-6 bg-black text-white overflow-hidden"
//       id="about"
//     >
      
//       {/* Background Elements */}
//       <div className="absolute inset-0 z-0">
//         {/* Animated geometric patterns */}
//         <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 border border-white/5 animate-spin-slow"></div>
//         <div className="absolute bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 border border-white/5 animate-spin-slow animation-delay-2000"></div>
        
//         {/* Diagonal Lines */}
//         <div className="absolute inset-0 opacity-[0.02]">
//           <div className="h-full w-full bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:80px_80px]"></div>
//         </div>
        
//         {/* Gradient Orbs */}
//         <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-white/3 to-transparent blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-1/3 left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-white/2 to-transparent blur-3xl animate-pulse-slow animation-delay-1000"></div>
//       </div>
      
//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Section Header with Reveal Animation */}
//         <div className="overflow-hidden mb-12 md:mb-16">
//           <div className="relative inline-block">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight opacity-0 animate-slideInLeft">
//               ABOUT ME
//             </h2>
//             <div className="absolute bottom-0 left-0 w-0 h-px bg-white animate-expandWidth animation-delay-300"></div>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          
//           {/* Left Column - Main Content */}
//           <div className="space-y-8">
//             {/* Main Paragraph with Typewriter Effect */}
//             <div className="overflow-hidden">
//               <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 font-light opacity-0 animate-slideInUp animation-delay-500">
//                 I'm a passionate 2nd-year Computer Science student dedicated to 
//                 mastering the fundamentals of software engineering through 
//                 continuous learning and practical application.
//               </p>
//             </div>
            
//             {/* Animated Stats */}
//             <div className="grid grid-cols-2 gap-6 mt-10">
//               <div className="text-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:border-white/20 transition-all duration-300 opacity-0 animate-slideInUp animation-delay-700">
//                 <div className="text-3xl md:text-4xl font-light mb-2 text-white">
//                   Year 2
//                 </div>
//                 <div className="text-sm md:text-base text-white/60">
//                   B.Tech CSE
//                 </div>
//               </div>
              
//               <div className="text-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg hover:border-white/20 transition-all duration-300 opacity-0 animate-slideInUp animation-delay-800">
//                 <div className="text-3xl md:text-4xl font-light mb-2 text-white">
//                   100%
//                 </div>
//                 <div className="text-sm md:text-base text-white/60">
//                   Job-Ready Focus
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Column - Skills & Details */}
//           <div className="space-y-8">
//             {/* Skills Grid with Staggered Animation */}
//             <div className="overflow-hidden">
//               <h3 className="text-xl md:text-2xl font-light mb-6 text-white/80 opacity-0 animate-slideInRight animation-delay-600">
//                 Current Focus Areas
//               </h3>
              
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { skill: 'Data Structures', level: 85 },
//                   { skill: 'Algorithms', level: 80 },
//                   { skill: 'React/Next.js', level: 75 },
//                   { skill: 'System Design', level: 65 },
//                 ].map((item, index) => (
//                   <div 
//                     key={index}
//                     className="relative p-4 border border-white/10 rounded-lg group hover:border-white/20 transition-all duration-300 opacity-0 animate-slideInUp"
//                     style={{ animationDelay: `${900 + index * 200}ms` }}
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-sm md:text-base text-white/90">{item.skill}</span>
//                       <span className="text-xs text-white/60">{item.level}%</span>
//                     </div>
//                     {/* Progress Bar */}
//                     <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
//                         style={{ 
//                           width: '0%',
//                           animationDelay: `${1100 + index * 200}ms`,
//                           animationName: 'fillWidth',
//                           animationDuration: '1.5s',
//                           animationFillMode: 'forwards',
//                           animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
//                         }}
//                         data-width={item.level}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Philosophy Statement */}
//             <div className="overflow-hidden mt-8">
//               <div className="relative p-6 border-l-4 border-white pl-6">
//                 <svg 
//                   className="absolute -left-3 top-6 w-6 h-6 text-white" 
//                   fill="currentColor" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
//                 </svg>
//                 <p className="text-white/80 italic font-light opacity-0 animate-slideInUp animation-delay-1200">
//                   "Building strong foundations today for innovative solutions tomorrow."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Learning Journey Timeline */}
//         <div className="mt-16 md:mt-24 overflow-hidden">
//           <h3 className="text-xl md:text-2xl font-light mb-8 text-white/80 opacity-0 animate-slideInUp animation-delay-1400">
//             Learning Journey
//           </h3>
          
//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent ml-6 md:ml-8"></div>
            
//             <div className="space-y-8 ml-12 md:ml-16">
//               {[
//                 { phase: 'Foundation Building', desc: 'Mastering core CS concepts & programming fundamentals' },
//                 { phase: 'Skill Development', desc: 'Learning modern frameworks & development tools' },
//                 { phase: 'Real-World Projects', desc: 'Applying knowledge to build meaningful applications' },
//                 { phase: 'Industry Readiness', desc: 'Preparing for software engineering roles & interviews' },
//               ].map((item, index) => (
//                 <div 
//                   key={index}
//                   className="relative opacity-0 animate-slideInRight"
//                   style={{ animationDelay: `${1600 + index * 200}ms` }}
//                 >
//                   <div className="absolute -left-9 top-2 w-4 h-4 rounded-full border-2 border-white bg-black"></div>
//                   <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
//                     <h4 className="text-lg font-medium text-white mb-2">{item.phase}</h4>
//                     <p className="text-white/70 text-sm md:text-base">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes slideInLeft {
//           0% {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slideInRight {
//           0% {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slideInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes expandWidth {
//           0% {
//             width: 0;
//           }
//           100% {
//             width: 100%;
//           }
//         }
        
//         @keyframes fillWidth {
//           0% {
//             width: 0%;
//           }
//           100% {
//             width: var(--target-width);
//           }
//         }
        
//         @keyframes spinSlow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
        
//         @keyframes pulseSlow {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }
        
//         .animate-slideInLeft {
//           animation: slideInLeft 0.8s ease-out forwards;
//         }
        
//         .animate-slideInRight {
//           animation: slideInRight 0.8s ease-out forwards;
//         }
        
//         .animate-slideInUp {
//           animation: slideInUp 0.8s ease-out forwards;
//         }
        
//         .animate-expandWidth {
//           animation: expandWidth 1.2s ease-out forwards;
//         }
        
//         .animate-spin-slow {
//           animation: spinSlow 20s linear infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulseSlow 4s ease-in-out infinite;
//         }
        
//         .animation-delay-300 {
//           animation-delay: 0.3s;
//         }
        
//         .animation-delay-500 {
//           animation-delay: 0.5s;
//         }
        
//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
        
//         .animation-delay-700 {
//           animation-delay: 0.7s;
//         }
        
//         .animation-delay-800 {
//           animation-delay: 0.8s;
//         }
        
//         .animation-delay-900 {
//           animation-delay: 0.9s;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
        
//         .animation-delay-1200 {
//           animation-delay: 1.2s;
//         }
        
//         .animation-delay-1400 {
//           animation-delay: 1.4s;
//         }
        
//         .animation-delay-1600 {
//           animation-delay: 1.6s;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         /* Set custom property for progress bars */
//         [data-width] {
//           --target-width: attr(data-width %);
//         }
        
//         /* Intersection observer triggered class */
//         section.visible .animate-slideInLeft,
//         section.visible .animate-slideInRight,
//         section.visible .animate-slideInUp,
//         section.visible .animate-expandWidth {
//           animation-play-state: running;
//         }
//       `}</style>
//     </section>
//   );
// }
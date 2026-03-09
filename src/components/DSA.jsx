import { useState, useEffect, useRef } from 'react';

const dsaData = {
  stats: {
    totalProblems: 120,
    leetCode: 85,
    hackerRank: 35,
    easy: 60,
    medium: 45,
    hard: 15,
    streak: 14
  },
  categories: [
    {
      name: "Arrays & Strings",
      count: 40,
      icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
      topics: ["Two Pointers", "Sliding Window", "Hashing", "Sorting"]
    },
    {
      name: "Recursion & Backtracking",
      count: 25,
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      topics: ["DFS", "Permutations", "Combinations", "Maze Solving"]
    },
    {
      name: "Linked Lists",
      count: 20,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      topics: ["Pointers", "Cycle Detection", "Reversal", "Two Pointer"]
    },
    {
      name: "Sorting & Searching",
      count: 25,
      icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
      topics: ["Binary Search", "Quick Sort", "Merge Sort", "Heap Sort"]
    },
    {
      name: "Dynamic Programming",
      count: 10,
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      topics: ["Memoization", "Tabulation", "State Optimization", "Patterns"]
    }
  ],
  platforms: [
    { name: "LeetCode", color: "from-white/20 to-white/10", problems: 85 },
    { name: "HackerRank", color: "from-white/15 to-white/5", problems: 35 }
  ]
};

export default function DSA() {
  const [animatedStats, setAnimatedStats] = useState({
    totalProblems: 0,
    leetCode: 0,
    hackerRank: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    streak: 0
  });
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counting stats
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            
            Object.keys(dsaData.stats).forEach((stat) => {
              const targetValue = dsaData.stats[stat];
              let current = 0;
              const increment = targetValue / steps;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                  current = targetValue;
                  clearInterval(timer);
                }
                setAnimatedStats(prev => ({
                  ...prev,
                  [stat]: Math.floor(current)
                }));
              }, stepDuration);
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
      
      {/* Background Elements - Code Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Code Editor Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full font-mono text-xs md:text-sm">
            <div className="absolute top-10 left-10">function solveProblem() {'{'}</div>
            <div className="absolute top-16 left-16">return "optimal solution";</div>
            <div className="absolute top-20 left-10">{'}'}</div>
            <div className="absolute bottom-20 right-10">// Time Complexity: O(n log n)</div>
            <div className="absolute bottom-16 right-16">// Space Complexity: O(1)</div>
          </div>
        </div>
        
        {/* Animated Binary Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Floating Code Snippets */}
        <div className="absolute top-1/4 right-1/4 opacity-10 animate-float">
          {"<algorithm>"}
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-10 animate-float animation-delay-2000">
          {"O(n²) → O(n log n)"}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="overflow-hidden inline-block mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight animate-slideInUp">
              PROBLEM SOLVING
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-white/70 animate-slideInUp animation-delay-200">
              Mastering Data Structures & Algorithms through consistent practice
            </p>
          </div>
          
          {/* Animated underline */}
          <div className="mt-6 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-expandWidth animation-delay-400"></div>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {/* Total Problems */}
          <div className="col-span-2 md:col-span-1 p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-white/20 transition-all duration-500 opacity-0 animate-slideInUp animation-delay-600">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">
              {animatedStats.totalProblems}+
            </div>
            <div className="text-white/70">Problems Solved</div>
            <div className="mt-4 text-xs text-white/50">
              Across multiple platforms
            </div>
          </div>
          
          {/* LeetCode Stats */}
          <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-white/20 transition-all duration-500 opacity-0 animate-slideInUp animation-delay-700">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">
              {animatedStats.leetCode}
            </div>
            <div className="text-white/70">LeetCode</div>
            <div className="mt-4 text-xs text-white/50">
              {Math.round((animatedStats.leetCode / animatedStats.totalProblems) * 100) || 0}% of total
            </div>
          </div>
          
          {/* Difficulty Distribution */}
          <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-white/20 transition-all duration-500 opacity-0 animate-slideInUp animation-delay-800">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white/70">Difficulty</div>
              <div className="text-xs text-white/50">Solved</div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Easy</span>
                  <span className="text-white">{animatedStats.easy}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white/40 rounded-full transition-all duration-1000"
                    style={{ width: `${(animatedStats.easy / animatedStats.totalProblems) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Medium</span>
                  <span className="text-white">{animatedStats.medium}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white/60 rounded-full transition-all duration-1000"
                    style={{ width: `${(animatedStats.medium / animatedStats.totalProblems) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Hard</span>
                  <span className="text-white">{animatedStats.hard}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: `${(animatedStats.hard / animatedStats.totalProblems) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Streak */}
          <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-white/20 transition-all duration-500 opacity-0 animate-slideInUp animation-delay-900">
            <div className="text-3xl md:text-4xl font-light text-white mb-2">
              {animatedStats.streak} days
            </div>
            <div className="text-white/70">Current Streak</div>
            <div className="mt-4 flex items-center text-xs text-white/50">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Daily practice ongoing
            </div>
          </div>
        </div>
        
        {/* Categories Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white/90 mb-8 opacity-0 animate-slideInUp animation-delay-1000">
            Problem Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dsaData.categories.map((category, index) => (
              <div
                key={category.name}
                className={`p-6 border rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeCategory === index
                    ? 'border-white/40 bg-white/5'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                } opacity-0 animate-slideInUp`}
                style={{ animationDelay: `${1100 + index * 100}ms` }}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={category.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{category.name}</h4>
                      <div className="text-sm text-white/50">{category.count} problems</div>
                    </div>
                  </div>
                  <div className="text-2xl font-light text-white/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className={`mt-4 transition-all duration-500 overflow-hidden ${
                  activeCategory === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic, idx) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs border border-white/10 rounded-full bg-white/5 text-white/70"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Mastery Level:</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${star <= Math.min(5, Math.floor(category.count / 8)) ? 'text-white' : 'text-white/20'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Platforms Performance */}
        <div className="mb-16 opacity-0 animate-slideInUp animation-delay-1500">
          <h3 className="text-2xl font-light text-white/90 mb-8">
            Platform Performance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dsaData.platforms.map((platform) => (
              <div key={platform.name} className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-light text-white">{platform.name}</h4>
                  <span className="text-2xl font-light text-white">
                    {platform.problems}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70">Problems Solved</span>
                      <span className="text-white">
                        {Math.round((platform.problems / dsaData.stats.totalProblems) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${platform.color} transition-all duration-1000`}
                        style={{ width: `${(platform.problems / dsaData.stats.totalProblems) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-white/50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Avg. time per problem: {platform.name === 'LeetCode' ? '25min' : '20min'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center opacity-0 animate-slideInUp animation-delay-1700">
          <div className="mb-8">
            <h3 className="text-2xl font-light text-white mb-4">
              View Detailed Solutions
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore my problem-solving approach with well-documented solutions,
              time complexity analysis, and optimization strategies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/username/leetcode-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg hover:border-white/40 transition-all duration-300"
            >
              <span className="relative z-10 font-medium tracking-wide flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Solutions
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 h-full w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-700"></div>
            </a>
            
            <a
              href="https://leetcode.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 overflow-hidden border border-white bg-white text-black rounded-lg hover:bg-transparent hover:text-white transition-all duration-300"
            >
              <span className="relative z-10 font-medium tracking-wide flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3.542c-.69-.069-1.417.034-2.194.309-1.155.429-2.146 1.231-3.056 2.186-.91.956-1.74 2.065-2.49 3.22-.749 1.156-1.417 2.36-1.995 3.532-.578 1.172-1.067 2.31-1.468 3.398-.4 1.088-.714 2.126-.94 3.112-.225.986-.362 1.92-.412 2.802-.05.882-.012 1.711.113 2.486.125.775.337 1.497.636 2.165.298.668.683 1.283 1.156 1.845.473.562 1.034 1.072 1.682 1.53.648.458 1.384.864 2.208 1.22.824.355 1.735.66 2.734.915.999.255 2.086.46 3.26.615 1.174.156 2.435.262 3.783.319 1.348.057 2.782.064 4.304.022 1.522-.043 3.132-.126 4.83-.25 1.699-.124 3.485-.289 5.359-.496l.39-.039.39-.039"/>
                </svg>
                LeetCode Profile
              </span>
              <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>
          
          <div className="mt-8 text-sm text-white/50">
            <p>Regularly updating with new solutions and optimizations</p>
          </div>
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
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1100 {
          animation-delay: 1.1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-1700 {
          animation-delay: 1.7s;
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
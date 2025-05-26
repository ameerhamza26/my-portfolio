import React, { useRef, useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

type Skill = {
  name: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'devops' | 'cloud';
};

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Backend
    { name: 'Java', proficiency: 85, category: 'backend' },
    { name: 'Go', proficiency: 80, category: 'backend' },
    { name: 'Spring', proficiency: 85, category: 'backend' },
    { name: 'PostgreSQL', proficiency: 75, category: 'backend' },
    // Frontend
    { name: 'Angular', proficiency: 60, category: 'frontend' },
    { name: 'TypeScript', proficiency: 60, category: 'frontend' },
    { name: 'JavaScript', proficiency: 60, category: 'frontend' },
    // Devops
    { name: 'Docker', proficiency: 70, category: 'devops' },
    { name: 'Kubernetes', proficiency: 70, category: 'devops' },
    { name: 'Helm', proficiency: 85, category: 'devops' },
    { name: 'IAC', proficiency: 50, category: 'devops' },
    
    // Tools
    { name: 'AWS', proficiency: 70, category: 'cloud' },
    { name: 'Digital Ocean', proficiency: 70, category: 'cloud' },
    { name: 'Oracle Cloud', proficiency: 70, category: 'cloud' },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'devops' | 'tools'>('all');

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div 
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            My technical toolkit spans modern web technologies, with a focus on building scalable and performant applications.
          </p>

          <div className="flex justify-center mb-8 flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'frontend' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'backend' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory('devops')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'devops' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Devops
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'tools' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Tools
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`transition-all duration-500 delay-${index * 100}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: hasAnimated ? 1 : 0,
                  transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${
                      skill.category === 'frontend' ? 'bg-blue-600' :
                      skill.category === 'backend' ? 'bg-teal-600' :
                      skill.category === 'devops' ? 'bg-orange-500' :
                      'bg-purple-600'
                    }`}
                    style={{ 
                      width: hasAnimated ? `${skill.proficiency}%` : '0%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
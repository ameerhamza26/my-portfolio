import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div 
        className={`container mx-auto px-4 md:px-6 z-10 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <span className="text-blue-600 font-medium text-sm md:text-base tracking-widest uppercase mb-4 inline-block">
          Hello, I'm
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
          Ameer Hamza
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
          Software Engineer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-base md:text-lg">
        Java & Go Expert | Backend Development, Cloud-Native Architectures, System Design, and DevOps Specialist
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View My Work
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
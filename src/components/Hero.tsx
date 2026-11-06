import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { SocialLinks } from './ui/SocialLinks';

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 to-teal-50 pt-24 pb-16">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div
        className={`container mx-auto px-4 md:px-6 z-10 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <span className="inline-flex items-center gap-2 bg-white/80 border border-green-200 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          {profile.availability}
        </span>
        <span className="block text-blue-600 font-medium text-sm md:text-base tracking-widest uppercase mb-4">Hello, I'm</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">{profile.name}</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 font-light">{profile.title}</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-base md:text-lg">{profile.tagline}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            <Mail size={18} className="mr-2" />
            Get in Touch
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View My Work
          </button>
          <a
            href={profile.resumeUrl}
            download="Ameer-Hamza-Resume.pdf"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            <Download size={18} className="mr-2" />
            Resume
          </a>
        </div>
        <div className="flex justify-center">
          <SocialLinks variant="light" />
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Your Name</h2>
            <p className="text-gray-400">Frontend Developer & UI/UX Designer</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white transition-colors"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </button>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
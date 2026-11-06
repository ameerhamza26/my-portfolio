import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import { SocialLinks } from './ui/SocialLinks';

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-1">{profile.name}</h2>
          <p className="text-gray-400">{profile.title}</p>
        </div>
        <SocialLinks />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white transition-colors"
        >
          <ArrowUp size={16} className="mr-2" />
          Back to Top
        </button>
      </div>

      <hr className="border-gray-800 my-8" />

      <p className="text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

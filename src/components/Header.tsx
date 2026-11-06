import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '../data/profile';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const linkClass = (id: string) =>
    `transition-colors font-medium ${active === id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl md:text-2xl font-bold text-gray-900"
        >
          Ameer<span className="text-blue-600">Hamza</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollToSection(n.id)} className={linkClass(n.id)}>
              {n.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            download="Ameer-Hamza-Resume.pdf"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            <Download size={16} className="mr-2" />
            Resume
          </a>
        </nav>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4">
          <nav className="flex flex-col space-y-2" aria-label="Mobile">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollToSection(n.id)} className={`${linkClass(n.id)} py-2 text-left`}>
                {n.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download="Ameer-Hamza-Resume.pdf"
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

import React, { useRef, useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

/** Section wrapper with a heading and a one-time fade-in reveal on scroll. */
export const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = 'bg-white', children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.05 });
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (isInView) setShown(true);
  }, [isInView]);

  return (
    <section id={id} className={`py-20 scroll-mt-16 ${className}`}>
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ${
          shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">{title}</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
        {subtitle && <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

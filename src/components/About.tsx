import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section id="about" className="py-20 bg-white">
      <div 
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img 
                  src="/images/profile.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">

                I am a <strong>Software Engineer</strong> with 9 years of extensive experience in backend development, building features in Go and Java, system design, and cloud infrastructure. Over the course of my career, I have developed expertise in a wide array of tools, technologies, and frameworks to deliver secure, scalable, and efficient solutions for diverse industries.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With strong expertise in Java, Go, and cloud-native technologies, I combine backend development proficiency with advanced architecture design and DevOps strategies. My passion lies in helping organizations implement scalable systems, automate infrastructure, and achieve engineering excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
              I am continually driven to expand my knowledge and skills to contribute effectively within my areas of expertise. As a team player, I approach projects with dedication, motivation, and a commitment to excellence, fostering collaboration to achieve shared goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Quote } from 'lucide-react';
import { highlights, testimonial, yearsOfExperience } from '../data/profile';
import { Section } from './ui/Section';

export const About: React.FC = () => {
  const years = yearsOfExperience();

  return (
    <Section id="about" title="About Me">
      <div className="max-w-5xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-lg">
              <img src="/images/profile.jpg" alt="Ameer Hamza" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              I'm a hands-on <strong>backend technical lead</strong> with <strong>{years}+ years</strong> of experience across
              enterprise SaaS, fintech and commerce. I build services in <strong>Java/Spring Boot and Go</strong>, and the{' '}
              <strong>AWS and Kubernetes</strong> platforms they run on.
            </p>
            <p>
              At Securiti AI I owned SAML SSO delivery and built Go platform features. At SimpliFi I led three engineers through
              the M2P processor integration. Most recently, at ALFAH, I architected a supplier integration platform that cut
              onboarding from weeks to under two days, and led its EKS platform build and handover to DevOps.
            </p>
            <p>
              I care about clean architecture, automated testing, GitOps delivery and good observability. I enjoy owning problems
              end-to-end, from design workshops to production incidents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-blue-50 rounded-xl p-5 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600">{years}+ yrs</div>
            <div className="text-sm text-gray-600 mt-1">Professional experience</div>
          </div>
          {highlights.map((h) => (
            <div key={h.label} className="bg-blue-50 rounded-xl p-5 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{h.value}</div>
              <div className="text-sm text-gray-600 mt-1">{h.label}</div>
            </div>
          ))}
        </div>

        <figure className="mt-12 bg-gray-50 rounded-xl p-8 relative">
          <Quote className="absolute top-6 left-6 text-blue-200" size={40} aria-hidden="true" />
          <blockquote className="relative text-gray-700 italic leading-relaxed pl-10">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-4 pl-10 text-sm">
            <span className="font-semibold text-gray-900">{testimonial.author}</span>
            <span className="text-gray-500"> · {testimonial.role}</span>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
};

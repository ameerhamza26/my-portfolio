import React from 'react';
import { ArrowUpRight, PenLine } from 'lucide-react';
import { articles, profile } from '../data/profile';
import { Section } from './ui/Section';

export const Writing: React.FC = () => (
  <Section
    id="writing"
    title="Writing"
    subtitle="Notes from the trenches on Kubernetes, DevOps and backend engineering, published on Medium."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {articles.map((a) => (
        <a
          key={a.url}
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span className="inline-flex items-center">
              <PenLine size={14} className="mr-1" />
              {a.date}
            </span>
            <ArrowUpRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">{a.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">{a.summary}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {a.tags.map((t) => (
              <span key={t} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
    <div className="text-center mt-10">
      <a
        href={profile.socials.medium}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        All articles on Medium
        <ArrowUpRight size={18} className="ml-2" />
      </a>
    </div>
  </Section>
);

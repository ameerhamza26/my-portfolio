import React from 'react';
import { ExternalLink, FolderGit2, Star } from 'lucide-react';
import { projects } from '../data/profile';
import { Section } from './ui/Section';

export const Projects: React.FC = () => (
  <Section
    id="projects"
    title="Featured Projects"
    subtitle="Production systems I've designed, built or led, from fintech card platforms to cloud-native integration platforms."
    className="bg-gray-50"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {projects.map((p) => (
        <article
          key={p.title}
          className={`flex flex-col rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 ${
            p.featured ? 'border-blue-600' : 'border-gray-200'
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <span className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <FolderGit2 size={20} />
            </span>
            {p.featured && (
              <span className="inline-flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-full">
                <Star size={12} className="mr-1" /> Highlight
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
          <p className="text-sm text-blue-600 mb-3">{p.org}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
          {p.link && (
            <a
              href={p.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              <ExternalLink size={14} className="mr-1" />
              {p.link.label}
            </a>
          )}
        </article>
      ))}
    </div>
  </Section>
);

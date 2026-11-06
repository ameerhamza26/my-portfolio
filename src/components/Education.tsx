import React from 'react';
import { GraduationCap, Award, BadgeCheck } from 'lucide-react';
import { awards, certifications, education } from '../data/profile';
import { Section } from './ui/Section';

export const Education: React.FC = () => (
  <Section id="education" title="Education & Credentials" className="bg-gray-50">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
      <div className="lg:col-span-2 space-y-6">
        {education.map((e) => (
          <div key={e.degree} className="bg-white rounded-xl shadow-md p-6 flex gap-4">
            <span className="shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <GraduationCap size={24} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{e.degree}</h3>
              <p className="text-blue-600">{e.school}</p>
              <p className="text-sm text-gray-500 mb-2">{e.period}</p>
              <ul className="text-gray-700 text-sm space-y-1">
                {e.details.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="flex items-center text-lg font-bold text-gray-900 mb-4">
            <BadgeCheck size={20} className="mr-2 text-blue-600" /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex justify-between gap-3 text-sm">
                <span className="text-gray-800">{c.name}</span>
                <span className="text-gray-500">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="flex items-center text-lg font-bold text-gray-900 mb-4">
            <Award size={20} className="mr-2 text-blue-600" /> Awards
          </h3>
          <ul className="space-y-2 text-sm text-gray-800">
            {awards.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

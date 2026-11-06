import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { jobs } from '../data/profile';
import { Section } from './ui/Section';

export const Experience: React.FC = () => (
  <Section
    id="experience"
    title="Work Experience"
    subtitle="My professional journey in software development and the impact I've made along the way."
  >
    <ol className="max-w-4xl mx-auto relative border-l-2 border-blue-100 ml-4 md:ml-auto">
      {jobs.map((job) => (
        <li key={job.company} className="mb-10 ml-8 last:mb-0">
          <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white ring-4 ring-white">
            <Briefcase size={14} />
          </span>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
              <h3 className="text-xl font-bold text-blue-600">{job.company}</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                {job.context && <span>{job.context}</span>}
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {job.location}
                </span>
              </div>
            </div>

            {job.roles.map((role) => (
              <div key={role.position} className="mb-5 last:mb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{role.position}</h4>
                  <span className="flex items-center text-sm text-gray-500 whitespace-nowrap">
                    <Calendar size={14} className="mr-1" />
                    {role.startDate} – {role.endDate}
                    {role.endDate === 'Present' && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">Current</span>
                    )}
                  </span>
                </div>
                <ul className="space-y-2">
                  {role.description.map((item) => (
                    <li key={item} className="text-gray-700 flex">
                      <span className="mr-2 text-blue-600">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-100">
              {job.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

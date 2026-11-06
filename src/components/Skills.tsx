import React from 'react';
import { Server, Database, Cloud, ShieldCheck, Activity, Users } from 'lucide-react';
import { skillGroups } from '../data/profile';
import { Section } from './ui/Section';

const ICONS: Record<string, React.ReactNode> = {
  Backend: <Server size={22} />,
  'Data & Messaging': <Database size={22} />,
  'Cloud & Delivery': <Cloud size={22} />,
  'Security & Networking': <ShieldCheck size={22} />,
  'Quality & Operations': <Activity size={22} />,
  'Leadership & Tools': <Users size={22} />,
};

export const Skills: React.FC = () => (
  <Section
    id="skills"
    title="Skills & Expertise"
    subtitle="Backend engineering and cloud platform work: designing services, then building and running the infrastructure underneath them."
    className="bg-gray-50"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {skillGroups.map((g) => (
        <div key={g.category} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">{ICONS[g.category]}</span>
            <h3 className="text-lg font-bold text-gray-900">{g.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

import React, { useRef, useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

type Job = {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
};

export const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      company: 'Next Generation Innovations',
      position: 'Principal Engineer',
      location: 'Karachi',
      startDate: 'June 2024',
      endDate: 'Present',
      description: [
        'Initiated and architected a supplier integration platform using Clean Architecture within a monorepo structure, enabling scalable and maintainable codebase.',
        'Reduced supplier integration time from weeks to under 2 days by building a reusable foundation that supports diverse supplier use cases across the system.',
        'Collaborated closely with the DevOps team to migrate legacy systems to Kubernetes, leveraging ArgoCD for GitOps-based deployment pipelines.',
        'Maintained continuous collaboration with Lead Engineer to review and iterate on architecture and design improvements for both backend services and infrastructure components.'
      ]
    },
    {
      id: 2,
      company: 'Simplifi',
      position: 'Senior Software Engineer',
      location: 'Karachi',
      startDate: 'August 2021',
      endDate: 'June 2024',
      description: [
        'Transitioned our microservices from Postgres to Mysql in response to the need for on-premise data hosting in a specific country',
        'Led a team in integrating the new fintech processor M2P and oversaw the integration process',
        'Successfully designed, developed, and smoothly executed a consumer card project necessitating significant refactoring in microservices',
        'Previously, we stored documents in the database, but then seamlessly integrated object storage with Oracle cloud to store documents in buckets'
      ]
    },
    {
      id: 3,
      company: 'Securiti AI',
      position: 'Senior Software Engineer',
      location: 'Karachi',
      startDate: 'January 2019',
      endDate: 'August 2021',
      description: [
        'Worked in Infra team',
        'Improved system performance by making proactive adjusments and resolving bugs',
        'Effectively implement SAML SSO Support across multiple Identity providers',
        'Integrated callback hooks based on enabling or disabling of modules',
        'Switched to per Schema level separation instead of per Database in Redshift'
      ]
    },
    {
      id: 4,
      company: '360 Factors',
      position: 'Software Engineer',
      location: 'Karachi',
      startDate: 'July 2017',
      endDate: 'January 2019',
      description: [
        'Implemented new featurs and addressed bugs using Java Spring Framework within the Predict application',
        'Configured Teamcity for deployment process',
        'Migrated the on premise environment to Azure',
        'Implemented the integration BPM workflows utilizing the Activiti Engine',
      ]
    },
    {
      id: 5,
      company: 'Skill Orbit',
      position: 'Software Engineer',
      location: 'Karachi',
      startDate: 'January 2016',
      endDate: 'July 2017',
      description: [
        'Effectively created the Range feature in ArcGIS maps using .NET for a Navy application',
        'Practical experience with the IBM Bluemix platform and its services',
        'Designed and built a social sharing application for the food industry using Angular and Ionic framework',
        'Received the "Outstanding Innovator" Award during the Company\'s Annual Celebration',
      ]
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div 
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          My professional journey in software development and the impact I've made along the way.
        </p>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-px"></div>

          {jobs.map((job, index) => (
            <div 
              key={job.id} 
              className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 ml-8 md:ml-auto'} md:w-1/2 ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <div 
                className={`absolute top-0 left-0 md:left-auto ${
                  index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                } w-4 h-4 rounded-full bg-blue-600 border-4 border-white z-10 transform -translate-x-1/2 md:translate-y-1`}
              ></div>
              
              <div className={`bg-white rounded-lg shadow-md p-6 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{job.position}</h3>
                <h4 className="text-lg font-medium text-blue-600 mb-3">{job.company}</h4>
                
                <div className="flex flex-wrap mb-4 text-sm text-gray-500 gap-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{job.startDate} — {job.endDate}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex">
                      <span className="mr-2">•</span>
                      <span
                        className={`${
                          [1, 3, 5].includes(job.id) ? 'text-left' : ''
                        }`}
                      >
                        {item}
                      </span>

                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
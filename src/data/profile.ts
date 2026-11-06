// Single source of truth for all site content.
// Update this file to change what appears on the website.

export const CAREER_START = new Date(2015, 11, 1); // Dec 2015 (Skill Orbit)

export const yearsOfExperience = (): number => {
  const ms = Date.now() - CAREER_START.getTime();
  return Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000));
};

export const profile = {
  name: 'Ameer Hamza',
  title: 'Technical Lead · Backend & Cloud Platforms',
  shortTitle: 'Backend & Cloud Engineer',
  tagline:
    'I design and ship scalable backend systems in Java and Go, and the AWS / Kubernetes platforms they run on, from architecture to production.',
  location: 'Karachi, Pakistan',
  email: 'ameerhamza810@gmail.com',
  phone: '+923462651725',
  phoneDisplay: '+92 346 2651725',
  availability: 'Available immediately for full-time roles',
  resumeUrl: '/resume.pdf',
  siteUrl: 'https://www.ameerhamza.me',
  socials: {
    github: 'https://github.com/ameerhamza26',
    linkedin: 'https://www.linkedin.com/in/engineerameerhamza/',
    medium: 'https://medium.com/@ameerhamza_6048',
    youtube: 'https://youtube.com/@buildwithhamza-g1t',
  },
};

export const highlights = [
  { value: '<2 days', label: 'Supplier onboarding at ALFAH (was weeks)' },
  { value: '3 engineers', label: 'Led at SimpliFi on the M2P integration' },
  { value: '6 companies', label: 'Enterprise SaaS, fintech & commerce' },
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    items: ['Java', 'Go', 'Spring Boot', 'Spring Framework', 'REST APIs', 'Microservices', 'Java Multithreading', 'Clean Architecture', 'Hibernate / JPA'],
  },
  {
    category: 'Data & Messaging',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'Amazon Redshift', 'Amazon SQS', 'Amazon S3', 'Oracle Object Storage'],
  },
  {
    category: 'Cloud & Delivery',
    items: ['AWS', 'EKS', 'ECS', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'ArgoCD', 'CodePipeline', 'CodeBuild', 'TeamCity', 'Azure', 'Oracle Cloud', 'DigitalOcean'],
  },
  {
    category: 'Security & Networking',
    items: ['SAML SSO', 'RBAC', 'IAM / IRSA', 'CloudFront', 'WAF', 'Private ALBs', 'VPC', 'AWS Client VPN', 'Istio Ambient'],
  },
  {
    category: 'Quality & Operations',
    items: ['JUnit', 'Integration Testing', 'Prometheus', 'Grafana', 'Thanos', 'CloudWatch Logs', 'Linux', 'Bash', 'Incident Troubleshooting'],
  },
  {
    category: 'Leadership & Tools',
    items: ['Team Leadership', 'System Design', 'Architecture Reviews', 'Code Reviews', 'Angular', 'TypeScript', 'Claude Code', 'Codex'],
  },
];

export type Role = {
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type Job = {
  company: string;
  context?: string;
  location: string;
  roles: Role[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    company: 'ALFAH',
    context: 'Part-time freelance contract',
    location: 'Remote',
    tags: ['Java', 'AWS', 'EKS', 'Terraform', 'ArgoCD', 'Istio'],
    roles: [
      {
        position: 'Software Engineering Consultant · Backend & Cloud',
        startDate: 'Aug 2026',
        endDate: 'Present',
        description: [
          'Develop Java supplier/ERP integrations for order submission and shipment feedback, implementing XML/JSON transformations, status mappings and validation logic, using multithreading, JUnit and integration tests.',
          'Build and maintain Terraform-managed AWS/EKS infrastructure with Helm and ArgoCD; automate delivery through CodePipeline and CodeBuild and troubleshoot deployment, networking and storage failures.',
          'Implement secure access with CloudFront/WAF, private ALBs, workload IAM roles, AWS Client VPN and Istio Ambient authorization policies.',
          'Deploy the auth-analytics application with Linux and Bash, including database user creation and migrations; investigate behaviour through CloudWatch Logs.',
        ],
      },
    ],
  },
  {
    company: 'Next Generation Innovations',
    context: 'Client: ALFAH',
    location: 'Karachi, Pakistan',
    tags: ['Java', 'Clean Architecture', 'AWS', 'Terraform', 'EKS/ECS', 'GitOps'],
    roles: [
      {
        position: 'Principal Software Engineer',
        startDate: 'Jun 2024',
        endDate: 'Jul 2026',
        description: [
          'Planned the SIS monorepo and architected a reusable Java supplier integration platform using Clean Architecture, reducing supplier integration time from weeks to under two days.',
          'Built catalog ingestion, order transfer and shipment feedback workflows with reusable CSV/Excel readers and SQS/S3 integrations.',
          'Provisioned AWS with Terraform, planned the EKS migration with DevOps, led cluster creation and handed platform ownership over to the main DevOps team.',
          'Implemented CloudFront, WAF, private ALB ingress and Istio Ambient policies; established GitOps delivery with ArgoCD and monitoring with Prometheus, Grafana and Thanos.',
          'Led design workshops and architecture reviews across backend services and cloud infrastructure.',
        ],
      },
    ],
  },
  {
    company: 'SimpliFi',
    context: 'Fintech & card services · MENA',
    location: 'Karachi, Pakistan',
    tags: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Oracle Cloud', 'Hibernate/JPA'],
    roles: [
      {
        position: 'Technical Lead',
        startDate: 'Apr 2022',
        endDate: 'Jun 2024',
        description: [
          'Led a team of three engineers through integration with the M2P fintech processor.',
          'Designed consumer-card services and guided the substantial microservice refactoring they required.',
          'Migrated microservices from PostgreSQL to MySQL to meet country-specific on-premises hosting requirements.',
          'Moved document storage out of the database into Oracle Cloud Object Storage.',
        ],
      },
      {
        position: 'Senior Software Engineer',
        startDate: 'Aug 2021',
        endDate: 'Apr 2022',
        description: [
          'Designed and built Java/Spring Boot transaction-management services for events received from fintech processors, with Hibernate/JPA persistence.',
          'Implemented client webhooks to deliver event notifications in an event-driven platform.',
          'Created a notification service sending email through the Twilio gateway; covered services with JUnit and integration tests.',
        ],
      },
    ],
  },
  {
    company: 'Securiti AI',
    context: 'Privaci privacy platform',
    location: 'Karachi, Pakistan',
    tags: ['Go', 'SAML SSO', 'RBAC', 'Redshift'],
    roles: [
      {
        position: 'Senior Software Engineer',
        startDate: 'Jan 2019',
        endDate: 'Aug 2021',
        description: [
          'Owned SAML single sign-on delivery across multiple identity providers, designed for reliability and scale.',
          'Developed Go backend features in the infrastructure team; contributed RBAC controls and callback hooks for module activation and deactivation.',
          'Moved Redshift data separation from database-level to schema-level isolation.',
          'Improved system performance by investigating and resolving backend defects.',
        ],
      },
    ],
  },
  {
    company: '360 Factors',
    context: 'Predict360 GRC platform',
    location: 'Karachi, Pakistan',
    tags: ['Java', 'Spring', 'Activiti BPM', 'Azure', 'TeamCity'],
    roles: [
      {
        position: 'Software Engineer',
        startDate: 'Jul 2017',
        endDate: 'Jan 2019',
        description: [
          'Developed Java Spring features and resolved defects in Predict360, an enterprise risk and compliance platform.',
          'Used Java multithreading to analyse hundreds of files concurrently.',
          'Integrated business workflows using the Activiti BPM engine.',
          'Configured TeamCity deployments and migrated an on-premises environment to Microsoft Azure.',
        ],
      },
    ],
  },
  {
    company: 'Skill Orbit',
    location: 'Karachi, Pakistan',
    tags: ['.NET', 'ArcGIS', 'AngularJS', 'Ionic', 'IBM Bluemix'],
    roles: [
      {
        position: 'Software Engineer',
        startDate: 'Dec 2015',
        endDate: 'Jul 2017',
        description: [
          'Built the "Range" feature in ArcGIS maps using .NET for a Pakistan Navy warning portal.',
          'Contributed to Linkagoal web and mobile apps with AngularJS; built a food-industry social sharing app with Angular and Ionic.',
          'Worked hands-on with the IBM Bluemix platform and its services.',
          'Received the "Outstanding Innovator" award at the company\'s annual celebration.',
        ],
      },
    ],
  },
];

export type Project = {
  title: string;
  org: string;
  description: string;
  tags: string[];
  featured?: boolean;
  link?: { label: string; url: string };
};

export const projects: Project[] = [
  {
    title: 'ALFAH Supplier Integration & Cloud Platform',
    org: 'Next Generation Innovations / ALFAH',
    featured: true,
    description:
      'Automotive supplier integration platform covering catalogs, stock, pricing, orders and shipment feedback. Reusable Java services on Clean Architecture in a monorepo, running on an AWS/EKS platform built with Terraform, GitOps delivery, Istio security and centralized monitoring. Cut supplier onboarding from weeks to under two days.',
    tags: ['Java', 'Clean Architecture', 'SQS', 'S3', 'EKS', 'Terraform', 'ArgoCD', 'Istio', 'Prometheus'],
  },
  {
    title: 'SimpliFi Card Platform',
    org: 'SimpliFi',
    featured: true,
    description:
      'Instant debit card issuance for the MENA region. Built transaction-processing, notification and webhook services, led the M2P processor integration, and moved the platform to MySQL for on-prem data residency.',
    tags: ['Spring Boot', 'Microservices', 'MySQL', 'Hibernate/JPA', 'Oracle Cloud', 'Twilio'],
  },
  {
    title: 'Kubernetes Application-Collision Incident',
    org: 'Incident write-up',
    featured: true,
    description:
      'Investigated API failures caused by conflicting resource identities and an unwanted plugin on EFS. Disabled the plugin, restored HTTP 200s, and documented resource/selector and storage isolation measures.',
    tags: ['Kubernetes', 'EFS', 'Incident Response', 'SRE'],
    link: {
      label: 'Read on Medium',
      url: 'https://medium.com/@ameerhamza_6048/multiverse-collapse-in-kubernetes-when-two-application-worlds-collided-3200aa3238a5',
    },
  },
  {
    title: 'Privaci',
    org: 'Securiti AI',
    description:
      'AI-powered platform automating compliance with complex global privacy regulations. Delivered SAML SSO login across IdPs, RBAC and platform improvements in Go.',
    tags: ['Go', 'SAML SSO', 'RBAC', 'Redshift'],
  },
  {
    title: 'Predict360',
    org: '360 Factors',
    description:
      'Enterprise risk and compliance (GRC) software with configurable, industry-specific workflows. Built features, BPM workflows and performance improvements on the Java Spring Framework.',
    tags: ['Java', 'Spring', 'Activiti BPM', 'Azure'],
  },
  {
    title: 'Warning Portal for Pakistan Navy',
    org: 'Skill Orbit',
    description:
      'Government-level .NET MVC application where officers create geo-located warnings rendered in ArcGIS. Worked alongside PhD researchers on geospatial problems and queries.',
    tags: ['.NET MVC', 'ArcGIS', 'Geospatial'],
  },
  {
    title: 'Linkagoal',
    org: 'Skill Orbit',
    description:
      'Goal-based social network helping people realize, share and achieve life goals. Worked on the web and mobile apps.',
    tags: ['AngularJS', 'Ionic', 'Mobile'],
  },
];

export const education = [
  {
    degree: 'MS, Data Engineering & Information Management',
    school: 'NED University of Engineering and Technology',
    period: '2017 – 2019',
    details: ['CGPA 3.26', 'Coursework in discrete mathematics and computer systems modelling'],
  },
  {
    degree: 'BE, Computer & Information Systems',
    school: 'NED University of Engineering and Technology',
    period: '2012 – 2015',
    details: ['Coursework: data analytics, big data computing, advanced databases', 'Independent study project on blockchain (Ethereum)'],
  },
];

export const certifications = [
  { name: 'AWS Developer Associate', year: '2017' },
  { name: 'Spring: Framework in Depth', year: '2018' },
  { name: 'Introduction to Big Data', year: '2018' },
  { name: 'Ethereum and Solidity', year: '2019' },
];

export const awards = [
  'Outstanding Innovator, Skill Orbit',
  '1st place, CACHE 2013 (App Hub project)',
  '2nd place, Speed Mobile App Development, Developer’s Day 2014, FAST-NU',
  '2nd place, Poster Design, FASTECH 2013, FAST-NU',
];

export const testimonial = {
  quote:
    'I taught Ameer two undergraduate courses at NED. He is a focused person whose deep concentration and insight are his strengths. This has enabled him to excel in the software development domain. He is an emotionally mature fellow who loves to respect and support his colleagues.',
  author: 'Shahab Tehzeeb',
  role: 'Assistant Professor, NED University',
};

export type Article = { title: string; url: string; date: string; summary: string; tags: string[] };

// From https://medium.com/@ameerhamza_6048 (add new posts at the top)
export const articles: Article[] = [
  {
    title: 'Multiverse Collapse in Kubernetes: When Two Application Worlds Collided',
    url: 'https://medium.com/@ameerhamza_6048/multiverse-collapse-in-kubernetes-when-two-application-worlds-collided-3200aa3238a5',
    date: 'Oct 2026',
    summary:
      'Two WordPress apps, identical resource names, one shared namespace — and a public API that suddenly demanded authentication. A real incident and the isolation lessons it taught.',
    tags: ['Kubernetes', 'DevOps', 'EFS'],
  },
  {
    title: 'Building Docker Images for Different Environments: A Comparative Guide',
    url: 'https://medium.com/@ameerhamza_6048/building-docker-images-for-different-environments-a-comparative-guide-02b490f28d0d',
    date: 'Jan 2025',
    summary:
      'Two strategies for building Docker images across environments, and the trade-offs each brings to a reliable CI/CD deployment process.',
    tags: ['Docker', 'CI/CD', 'DevOps'],
  },
  {
    title: 'Storing Secrets Safely in a Git Repository',
    url: 'https://medium.com/@ameerhamza_6048/storing-secrets-safely-in-git-repository-a873bfa94cc5',
    date: 'Dec 2024',
    summary:
      'How to commit database passwords and cloud keys to Git safely when working with microservices on Kubernetes.',
    tags: ['Kubernetes', 'Secrets', 'Microservices'],
  },
];

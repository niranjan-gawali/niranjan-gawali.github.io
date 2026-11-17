export interface NavigationItem {
  label: string
  href: string
}

export interface SectionContent {
  id: string
  eyebrow: string
  title: string
  description?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  location: string
  dates: string
  summary: string
}

export interface ProjectEntry {
  name: string
  organization: string
  domain: string
  description: string
  contribution: string
  technologies: string[]
}

export const siteContent = {
  brand: {
    name: 'Niranjan Gawali',
    monogram: 'NG',
    role: 'Software Lead',
    experienceLabel: '9+ years of experience',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Professional Work', href: '#professional-work' },
    { label: 'Personal Projects', href: '#personal-projects' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: 'SOFTWARE LEAD / 9+ YEARS OF EXPERIENCE',
    title: {
      before: 'I build software that makes',
      emphasis: 'complex things',
      after: 'feel simple.',
    },
    description:
      'Full stack engineer designing and building enterprise web applications, distributed systems, and cloud-native platforms.',
    primaryAction: { label: 'Get in touch', href: '#contact' },
    secondaryAction: { label: 'Explore my experience', href: '#experience' },
  },
  about: {
    id: 'about',
    eyebrow: '01 / ABOUT',
    title: 'Full stack, end to end.',
    description: 'From user interfaces and APIs to the systems behind them.',
    body:
      'I’m a full stack software engineer with 9+ years of experience building enterprise applications. My work spans backend services, frontend platforms, data systems, and cloud infrastructure, with a focus on turning complex requirements into reliable software.',
    experienceStat: '9+',
    experienceStatLabel: 'Years of experience',
    experienceStatDetail: 'Software engineering',
  } satisfies SectionContent & {
    body: string
    experienceStat: string
    experienceStatLabel: string
    experienceStatDetail: string
  },
  experience: {
    id: 'experience',
    eyebrow: '02 / EXPERIENCE',
    title: 'Professional experience',
    description: 'A career across product engineering and enterprise software.',
    entries: [
      {
        company: 'SoftClouds',
        role: 'Software Lead',
        location: 'Pune, India',
        dates: 'July 2026 – Present',
        summary:
          'Role responsibilities and current projects will be added once those details are ready.',
      },
      {
        company: 'Globant India',
        role: 'Senior Software Engineer',
        location: 'Pune, India',
        dates: 'June 2021 – July 20, 2026',
        summary:
          'Building features for enterprise platforms across backend microservices and React microfrontends. Contributing to GraphQL Federation, PostgreSQL data modeling, AWS integrations, code quality, and production support.',
      },
      {
        company: 'Birlasoft Ltd',
        role: 'Senior Technical Consultant',
        location: 'Pune, India',
        dates: 'July 2019 – June 2021',
        summary:
          'Delivered end-to-end application features, translating business requirements into UI, API, and database changes across travel management and resource tracking products.',
      },
      {
        company: 'Barquecon Technologies Pvt. Ltd',
        role: 'Software Engineer',
        location: 'Pune, India',
        dates: 'September 2017 – June 2019',
        summary:
          'Developed full stack features for social and school communication products, including user feeds, profiles, real-time interactions, and backend API integrations.',
      },
    ] satisfies ExperienceEntry[],
  } satisfies SectionContent & { entries: ExperienceEntry[] },
  skills: {
    id: 'skills',
    eyebrow: '03 / TOOLKIT',
    title: 'Technologies I work with',
    description: 'A selection of tools and technologies from my experience.',
    groups: [
      { name: 'Languages & frameworks', items: ['Node.js', 'NestJS', 'TypeScript', 'JavaScript', 'ReactJS', 'Angular', 'Express.js'] },
      { name: 'APIs & architecture', items: ['GraphQL', 'GraphQL Federation', 'Microservices', 'Microfrontends', 'REST APIs', 'Serverless'] },
      { name: 'Data', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
      { name: 'Cloud & delivery', items: ['AWS', 'GCP', 'AWS Lambda', 'Docker', 'CI/CD', 'Git'] },
      { name: 'Quality & workflow', items: ['Jest', 'K6', 'CI/CD', 'Git', 'Agile / Scrum', 'AI-assisted development'] },
      { name: 'AI-assisted development', items: ['Cline', 'Claude', 'DeepSeek', 'Glob'] },
    ],
  },
  projects: {
    personal: {
      id: 'personal-projects',
      eyebrow: '05 / PERSONAL PROJECTS',
      title: 'Personal projects',
      statusTitle: 'Coming soon',
      description: 'I’m preparing a few independent projects to share here. Check back soon for updates and download links.',
    },
    professional: {
      id: 'professional-work',
      eyebrow: '04 / PROFESSIONAL WORK',
      title: 'Professional work',
      description: 'Selected products from my work with engineering teams across different organizations.',
    entries: [
      {
        name: 'SEVEN Park Management',
        organization: 'Globant India',
        domain: 'Entertainment venue management · Saudi Entertainment Ventures',
        description:
          'A large-scale platform supporting the operations of entertainment venues.',
        contribution:
          'Developed backend microservices and React microfrontends, worked on federated GraphQL and PostgreSQL, and supported cloud integrations and production releases.',
        technologies: ['Node.js', 'NestJS', 'React', 'GraphQL Federation', 'PostgreSQL', 'AWS'],
      },
      {
        name: 'Great Minds',
        organization: 'Globant India',
        domain: 'Digital content delivery',
        description:
          'A digital content platform running in a serverless AWS environment.',
        contribution:
          'Built backend and React features, used Redis caching to reduce database load, and worked on API performance testing and production support.',
        technologies: ['NestJS', 'React', 'AWS Lambda', 'PostgreSQL', 'MongoDB', 'Redis', 'K6'],
      },
      {
        name: 'Travel Request',
        organization: 'Birlasoft Ltd',
        domain: 'Travel management',
        description:
          'An application for managing employee travel requests.',
        contribution:
          'Delivered application modules across the Angular interface, Node.js APIs, and MySQL data layer, including relational schema design.',
        technologies: ['Angular 7', 'Node.js', 'Express.js', 'MySQL'],
      },
      {
        name: 'Resource Tracker',
        organization: 'Birlasoft Ltd',
        domain: 'Resource and project team management',
        description:
          'A system for tracking resources and project teams.',
        contribution:
          'Implemented full stack features, integrated backend APIs, and contributed to code reviews and application reliability.',
        technologies: ['Angular 7', 'Node.js', 'Express.js', 'MongoDB'],
      },
      {
        name: 'Spoyoo',
        organization: 'Barquecon Technologies Pvt. Ltd',
        domain: 'Social platform for sports enthusiasts',
        description:
          'A social media platform with feeds, profiles, and real-time interactions for sports fans.',
        contribution:
          'Developed and maintained core social features, integrated backend APIs, and worked with MongoDB data and performance.',
        technologies: ['Angular 5', 'Node.js', 'MongoDB'],
      },
      {
        name: 'Schoolinit',
        organization: 'Barquecon Technologies Pvt. Ltd',
        domain: 'School communication management',
        description:
          'A communication management system for school communities.',
        contribution:
          'Developed application features and backend integrations, with a focus on stable, consistent operation.',
        technologies: ['Angular 5', 'Node.js'],
      },
    ] satisfies ProjectEntry[],
    },
  } satisfies {
    personal: SectionContent & { statusTitle: string; description: string }
    professional: SectionContent & { entries: ProjectEntry[] }
  },
  credentials: {
    id: 'credentials',
    eyebrow: '06 / CREDENTIALS',
    title: 'Learning and certifications',
    certifications: [
      {
        name: 'AWS Certified Developer – Associate',
        date: 'October 2024',
        href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/c86511a8f4314cfca411917e5aff26b8',
      },
      {
        name: 'Google Cloud Certified Associate Cloud Engineer',
        date: 'January 2023',
        href: 'https://www.credly.com/badges/6504f745-eef1-44ef-bd3e-8ce64606643b/public_url',
      },
    ],
    education: [
      'Bachelor of Engineering in Computer Science · Savitribai Phule Pune University · 2011–2015',
      'Higher Secondary Certificate · 2011',
      'Secondary School Certificate · 2009',
    ],
    languages: ['English', 'Hindi', 'Marathi'],
  },
  contact: {
    id: 'contact',
    eyebrow: '07 / CONTACT',
    title: 'Let’s connect.',
    description: 'Have a question or want to talk about software? Get in touch.',
    email: 'gawaliniranjan@gmail.com',
    profiles: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/niranjan-gawali-36426075/' },
      { label: 'Medium', href: 'https://medium.com/@niranjan.gawali' },
    ],
  },
}
